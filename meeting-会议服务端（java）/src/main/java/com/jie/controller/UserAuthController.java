package com.jie.controller;


import com.google.code.kaptcha.impl.DefaultKaptcha;
import com.jie.annotation.OptLog;
import com.jie.dto.UniappUserLoginParamVO;
import com.jie.dto.UserBackDTO;
import com.jie.dto.UserDetailDTO;
import com.jie.dto.UserLoginParam;
import com.jie.mapper.RoleMapper;
import com.jie.service.UserAuthService;
import com.jie.util.RespBean;
import com.jie.util.UserUtils;
import com.jie.vo.ConditionVO;
import com.jie.vo.QQLoginVO;
import com.jie.vo.UserRegisteredVO;
import com.jie.vo.UserVO;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import javax.imageio.ImageIO;
import javax.servlet.ServletOutputStream;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;
import javax.validation.Valid;
import java.awt.image.BufferedImage;
import java.io.IOException;
import java.security.Principal;

import static com.jie.constant.OptTypeConst.SAVE;

/**
 * <p>
 *  前端控制器
 * </p>
 *
 * @author zwq
 * @since 2022-01-04
 */
@Slf4j
@RestController
@Api(tags = "用户模块")
public class UserAuthController {

    @Autowired
    private UserAuthService userAuthService;
    @Autowired
    private RoleMapper roleMapper;
    @Autowired
    private DefaultKaptcha defaultKaptcha;

    @ApiOperation("用户app注册")
    @PostMapping("/registered")
    public RespBean registered(@RequestBody UserRegisteredVO userRegisteredVO){
        return userAuthService.registeredUserAuth(userRegisteredVO);
    }
    @ApiOperation("用户app登录")
    @PostMapping("/app/login")
    public RespBean appLogin(@RequestBody UserLoginParam adminLoginParam, HttpServletRequest request){
        return userAuthService.appLogin(adminLoginParam,request);
    }
    /**
     * 登录之后返回Token
     * @param adminLoginParam
     * @param request
     * @return
     */
    @ApiOperation(value = "后台登录")
    @PostMapping("/login")
    public RespBean login(@RequestBody UserLoginParam adminLoginParam, HttpServletRequest request){
        return userAuthService.login(adminLoginParam.getUsername(),adminLoginParam.getPassword(),adminLoginParam.getCode(),request);
    }
//    @ApiOperation(value = "小程序登录返回Token")
//    @PostMapping("/uniapp/login")
//    public RespBean login(@RequestBody UniappUserLoginParamVO uniappUserLoginParamVO, HttpServletRequest request){
//        return userAuthService.login(uniappUserLoginParamVO,request);
//    }
    @ApiOperation(value = "获取当前登录用户的信息")
    @GetMapping("/admin/info")
    public UserDetailDTO getAdminInfo(){
        //获取当前用户名称
        String username = UserUtils.getLoginUser().getUsername();
        UserDetailDTO admin =  userAuthService.getAdminByUserName(username);
        //防止读取密码
        admin.setPassword(null);
        //查询角色
        admin.setRoleList(roleMapper.listRolesByUserInfoId(admin.getId()));
        return admin;
    }

    @ApiOperation(value = "退出登录")
    @PostMapping("/logout")
    public RespBean logout(){
        //让前端从请求头删除token
        return RespBean.success("注销成功!");
    }

    @ApiOperation(value = "验证码")
    @GetMapping(value = "/captcha",produces = "image/jpeg")
    public void captcha(HttpServletRequest request, HttpServletResponse response){
        //定义response输出类型为image/jpeg类型
        response.setDateHeader("Expires",0);
        response.setHeader("Cache-Control","no-store,no-cache,must-revalidate");
        response.addHeader("Cache-Control","post-check=0,pre-check=0");
        response.setContentType("image/jpeg");
        //生成验证码
        String text = defaultKaptcha.createText();
        HttpSession session = request.getSession();
        session.setAttribute("captcha",text);
        log.info("验证码"+text);
        //根据文本验证码内容得到图片
        BufferedImage image = defaultKaptcha.createImage(text);
        ServletOutputStream outputStream = null;
        try {
            outputStream = response.getOutputStream();
            //输出流输出图片
            ImageIO.write(image,"jpg",outputStream);
            outputStream.flush();
        } catch (IOException e) {
            e.printStackTrace();
        }finally {
            if (outputStream!=null){
                try {
                    outputStream.close();
                } catch (IOException e) {
                    e.printStackTrace();
                }
            }
        }

    }

    @ApiOperation(value = "管理员修改其他用户密码")
    @PutMapping("/updateAdminPassword")
    public RespBean updatePassword(@Valid @RequestBody UserVO user) {
        userAuthService.updatePassword(user);
        return RespBean.success("修改成功");
    }
    @ApiOperation(value = "用户修改密码")
    @PutMapping("/updateUserPassword")
    public RespBean updateUserPassword(String password) {
        userAuthService.updateUserPassword(password);
        return RespBean.success("修改成功");
    }
    /**
     * 查询后台用户列表
     *
     * @param condition 条件
     * @return 用户列表
     */
    @ApiOperation(value = "查询后台用户列表")
    @GetMapping("/users")
    public RespBean<UserBackDTO> listUsers(ConditionVO condition) {
        return userAuthService.listUserBackDTO(condition);
    }
}

