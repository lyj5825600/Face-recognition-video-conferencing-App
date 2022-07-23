package com.jie.service.impl;

import com.alibaba.fastjson.JSON;
import com.baomidou.mybatisplus.core.conditions.query.LambdaQueryWrapper;
import com.baomidou.mybatisplus.core.conditions.query.QueryWrapper;
import com.baomidou.mybatisplus.core.conditions.update.LambdaUpdateWrapper;
import com.baomidou.mybatisplus.extension.api.R;
import com.baomidou.mybatisplus.extension.service.impl.ServiceImpl;
import com.jie.constant.CommonConst;
import com.jie.constant.MeetingConst;
import com.jie.dto.*;
import com.jie.entity.UserAuth;
import com.jie.entity.UserInfo;
import com.jie.entity.UserRole;
import com.jie.enums.LoginTypeEnum;
import com.jie.mapper.RoleMapper;
import com.jie.mapper.UserAuthMapper;
import com.jie.mapper.UserInfoMapper;
import com.jie.mapper.UserRoleMapper;
import com.jie.service.UserAuthService;
import com.jie.util.*;
import com.jie.vo.*;
import eu.bitwalker.useragentutils.UserAgent;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.data.redis.core.RedisTemplate;
import org.springframework.scheduling.annotation.Async;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.crypto.bcrypt.BCrypt;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.util.StringUtils;
import org.springframework.web.client.RestTemplate;

import javax.annotation.Resource;
import javax.servlet.http.HttpServletRequest;
import java.time.LocalDateTime;
import java.time.ZoneId;
import java.util.HashMap;
import java.util.List;
import java.util.Objects;

import static com.jie.enums.ZoneEnum.SHANGHAI;

/**
 * <p>
 * 服务实现类
 * </p>
 *
 * @author zwq
 * @since 2022-01-04
 */
@Service
public class UserAuthServiceImpl extends ServiceImpl<UserAuthMapper, UserAuth> implements UserAuthService {
    @Value("${jwt.tokenHead}")
    private String tokenHead;
    @Autowired
    private JwtTokenUtil jwtTokenUtil;
    @Autowired
    private UserDetailsServiceImpl userDetailsService;
    @Autowired
    private PasswordEncoder passwordEncoder;
    @Autowired
    private RoleMapper roleDao;
    @Autowired
    private RestTemplate restTemplate;
    @Resource
    private HttpServletRequest request;
    //用户mapper
    @Autowired
    private UserInfoMapper userInfoDao;
    @Autowired
    private UserAuthMapper userAuthDao;
    @Autowired
    private UserRoleMapper userRoleDao;

    @Autowired
    private RedisTemplate redisTemplate;
    //小程序APPID
    private static final String APPID = "wxaf14f75f3356c0d7";
    //小程序授权码
    private static final String SECRET ="bd169dec7775a8090b1655eb510d28c4";
    //用户名存redis
    private static final String USERNAME="username";
    /**
     * 注册
     * @param userRegisteredVO
     * @return
     */
    @Transactional
    @Override
    public RespBean registeredUserAuth(UserRegisteredVO userRegisteredVO) {
        //判断redis有无用户
        if (redisTemplate.opsForHash().hasKey(MeetingConst.USER+USERNAME,userRegisteredVO.getPhone())){
            return RespBean.error("账户早已注册,请转移登录页面");
        }
        //没有就存入用户信息
        redisTemplate.opsForHash().put(MeetingConst.USER+USERNAME,userRegisteredVO.getPhone(),userRegisteredVO.getNickname());
        // 获取设备信息
        String ipAddress = IpUtils.getIpAddress(request);
        String ipSource = IpUtils.getIpSource(ipAddress);
        int meetingNumber=Integer.parseInt(userRegisteredVO.getPhone().substring(3,userRegisteredVO.getPhone().length()));
        //先注册用户信息表 默认头像地址
        UserInfo userInfo=new UserInfo(userRegisteredVO.getNickname(), CommonConst.IMAGES,meetingNumber,0,LocalDateTime.now(ZoneId.of(SHANGHAI.getZone())));
        userInfoDao.addUserInfo(userInfo);
        //注册用户表 phone做username唯一
        UserAuth userAuth=new UserAuth(userInfo.getId(),userRegisteredVO.getPhone(),passwordEncoder.encode(userRegisteredVO.getPassword()),1,ipAddress,ipSource,LocalDateTime.now(ZoneId.of(SHANGHAI.getZone())));
        userAuthDao.adduserAuth(userAuth);
        userRoleDao.insert(UserRole.builder().userId(userAuth.getId()).roleId(2).build());
        return RespBean.success("注册成功");
    }

    /**
     * 用户app登录
     * @param adminLoginParam
     * @param request
     * @return
     */
    @Override
    public RespBean appLogin(UserLoginParam adminLoginParam, HttpServletRequest request) {
        //这个东西其实就相当于我们的根据用户名获取用户信息，因为admin实现类UserDetails接口
        UserDetails userDetails = userDetailsService.loadUserByUsername(adminLoginParam.getUsername());
        //这里要考虑我们前端传过来的是明文密码，我们这里判断的是加密的所有要这样判断
        //使用springsecurity提供的加密工具
        if (userDetails == null || !passwordEncoder.matches(adminLoginParam.getPassword(), userDetails.getPassword())) {
            return RespBean.error("用户名或密码不正确!");
        }
        if (!userDetails.isEnabled()) {
            return RespBean.error("账号被禁用，请联系管理员!");
        }
        //更新并返回token
        return token(userDetails);
    }

    /**
     * 修改密码
     * @param user
     */
    @Override
    public void updatePassword(UserVO user) {
        // 根据用户名修改密码
        userAuthDao.update(new UserAuth(), new LambdaUpdateWrapper<UserAuth>()
                .set(UserAuth::getPassword, BCrypt.hashpw(user.getPassword(), BCrypt.gensalt()))
                .eq(UserAuth::getUsername, user.getUsername()));
    }

    @Override
    public RespBean<UserBackDTO> listUserBackDTO(ConditionVO condition) {
        // 获取后台用户数量
        Integer count = userAuthDao.countUser(condition);
        if (count == 0) {
            return new RespBean<>();
        }
        List<UserBackDTO> userBackDTOList = userAuthDao.listUsers(PageUtils.getLimitCurrent(), PageUtils.getSize(), condition);
        return RespBean.success("users",userBackDTOList);
    }

    /**
     * 用户修改密码
     * @param password
     */
    @Override
    public void updateUserPassword(String password) {
        userAuthDao.update(new UserAuth(), new LambdaUpdateWrapper<UserAuth>()
                .set(UserAuth::getPassword, BCrypt.hashpw(password, BCrypt.gensalt()))
                .eq(UserAuth::getUsername, UserUtils.getLoginUser().getUsername()));
    }

    /**
     * 返回token
     * @param userDetails
     * @return
     */
    public  RespBean token(UserDetails userDetails){
        //更新security登录对象
        UsernamePasswordAuthenticationToken authenticationToken =
                new UsernamePasswordAuthenticationToken(userDetails, null, userDetails.getAuthorities());
        SecurityContextHolder.getContext().setAuthentication(authenticationToken);
        //成功之后分配令牌
        String token = jwtTokenUtil.generateToken(userDetails);
        HashMap<String, String> tokenMap = new HashMap<>();
        tokenMap.put("token", token);
        tokenMap.put("tokenHead", tokenHead);
        return RespBean.success("登录成功", tokenMap);
    }

    /**
     * 后台管理登录方法
     *
     * @param username
     * @param password
     * @param code
     * @param request
     * @return
     */
    @Override
    public RespBean login(String username, String password, String code, HttpServletRequest request) {
        //验证码
        String captcha = (String) request.getSession().getAttribute("captcha");
        if (StringUtils.isEmpty(captcha) || !captcha.equalsIgnoreCase(code)) {
            return RespBean.error("验证码错误,重新输入");
        }
        //这个东西其实就相当于我们的根据用户名获取用户信息，因为admin实现类UserDetails接口
        UserDetails userDetails = userDetailsService.loadUserByUsername(username);
        //这里要考虑我们前端传过来的是明文密码，我们这里判断的是加密的所有要这样判断
        //使用springsecurity提供的加密工具
        if (userDetails == null || !passwordEncoder.matches(password, userDetails.getPassword())) {
            return RespBean.error("用户名或密码不正确!");
        }
        if (!userDetails.isEnabled()) {
            return RespBean.error("账号被禁用，请联系管理员!");
        }
        return token(userDetails);
    }

    /**
     * 根据小程序code来获取openid
     * @param code
     * @return
     */
    public UniappOpenIdVO getopenId(String code){
        //小程序验证获取openid给前端
        String url = "https://api.weixin.qq.com/sns/jscode2session?" +
                "appid="+APPID+"&secret="+SECRET+"&js_code="+code+"&grant_type=authorization_code";
        String openid = restTemplate.getForObject(url, String.class);
        UniappOpenIdVO uniappOpenIdVO = JSON.parseObject(openid, UniappOpenIdVO.class);
        return uniappOpenIdVO;
    }
    /**
     * 根据小程序来登录
     *
     * @param uniappUserLoginParamDTO
     * @param request
     * @return
     */
    @Transactional
    @Override
    public RespBean login(UniappUserLoginParamVO uniappUserLoginParamDTO, HttpServletRequest request) {
        //这个东西其实就相当于我们的根据用户名获取用户信息，因为admin实现类UserDetails接口
        UniappOpenIdVO uniappOpenIdVO = getopenId(uniappUserLoginParamDTO.getCode());
        if (!Objects.isNull(uniappOpenIdVO.getErrcode())){
            return RespBean.error("小程序code码失效");
        }
        UserDetails userDetails = userDetailsService.loadUserByUsername(uniappOpenIdVO.getOpenid());
        //判断如果数据库没有就直接创建并返回
        if (Objects.isNull(userDetails)){
            // 获取设备信息
            String ipAddress = IpUtils.getIpAddress(request);
            String ipSource = IpUtils.getIpSource(ipAddress);
            UserInfo userInfo=new UserInfo(uniappUserLoginParamDTO.getUsername(),uniappUserLoginParamDTO.getImage(),123456,0,LocalDateTime.now(ZoneId.of(SHANGHAI.getZone())));
            userInfoDao.addUserInfo(userInfo);
            UserAuth userAuth=new UserAuth(userInfo.getId(), uniappOpenIdVO.getOpenid(),passwordEncoder.encode("1234567"),2,ipAddress,ipSource,LocalDateTime.now(ZoneId.of(SHANGHAI.getZone())));
            userAuthDao.adduserAuth(userAuth);
            userRoleDao.insert(UserRole.builder().userId(userAuth.getId()).roleId(2).build());
            String token = jwtTokenUtil.generateToken(uniappUserLoginParamDTO.getUsername());
            HashMap<String, String> tokenMap = new HashMap<>();
            tokenMap.put("token", token);
            tokenMap.put("tokenHead", tokenHead);
            return RespBean.success("创建并登录成功", tokenMap);
        }
        if (!passwordEncoder.matches("1234567", userDetails.getPassword())) {
                return RespBean.error("账号或密码不正确!");
            }
        if (!userDetails.isEnabled()) {
            return RespBean.error("账号被禁用，请联系管理员!");
        }
            //更新security登录对象
            UsernamePasswordAuthenticationToken authenticationToken =
                    new UsernamePasswordAuthenticationToken(userDetails, null, userDetails.getAuthorities());
            SecurityContextHolder.getContext().setAuthentication(authenticationToken);
            //成功之后分配令牌
            String token = jwtTokenUtil.generateToken(userDetails);
            HashMap<String, String> tokenMap = new HashMap<>();
            tokenMap.put("token", token);
            tokenMap.put("tokenHead", tokenHead);
            return RespBean.success("登录成功", tokenMap);
    }
    /**
     * 根据用户名获取用户信息
     *
     * @param username
     * @return
     */
    @Override
    public UserDetailDTO getAdminByUserName(String username) {
        UserAuth user = this.baseMapper.selectOne(new QueryWrapper<UserAuth>().eq("username", username));
        // 查询账号信息
        UserInfo userInfo = userInfoDao.selectById(user.getUserInfoId());
        // 查询账号角色
        List<String> roleList = roleDao.listRolesByUserInfoId(userInfo.getId());
        // 获取设备信息
        String ipAddress = IpUtils.getIpAddress(request);
        String ipSource = IpUtils.getIpSource(ipAddress);
        UserAgent userAgent = IpUtils.getUserAgent(request);
        //更新用户登录信息
        updateUserInfo();
        // 封装权限集合
        return UserDetailDTO.builder()
                .id(user.getId())
                .loginType(user.getLoginType())
                .userInfoId(userInfo.getId())
                .username(user.getUsername())
                .password(user.getPassword())
                .meetingNumber(userInfo.getMeetingNumber())
                .email(userInfo.getEmail())
                .roleList(roleList)
                .nickname(userInfo.getNickname())
                .avatar(userInfo.getAvatar())
                .ipAddress(ipAddress)
                .ipSource(ipSource)
                .isDisable(userInfo.getIsDisable())
                .browser(userAgent.getBrowser().getName())
                .os(userAgent.getOperatingSystem().getName())
                .lastLoginTime(LocalDateTime.now(ZoneId.of(SHANGHAI.getZone())))
                .build();
    }

    /**
     * 更新用户信息
     */
    @Async
    public void updateUserInfo() {
        UserAuth userAuth = UserAuth.builder()
                .id(UserUtils.getLoginUser().getId())
                .ipAddress(UserUtils.getLoginUser().getIpAddress())
                .ipSource(UserUtils.getLoginUser().getIpSource())
                .lastLoginTime(UserUtils.getLoginUser().getLastLoginTime())
                .build();
        userAuthDao.updateById(userAuth);
    }


}
