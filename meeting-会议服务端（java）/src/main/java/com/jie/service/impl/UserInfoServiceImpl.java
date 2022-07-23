package com.jie.service.impl;

import com.baomidou.mybatisplus.core.conditions.query.LambdaQueryWrapper;
import com.baomidou.mybatisplus.extension.service.impl.ServiceImpl;
import com.jie.dto.MeetingInfoDTO;
import com.jie.dto.MeetingStatisticalDTO;
import com.jie.dto.UserOnlineDTO;
import com.jie.entity.*;
import com.jie.mapper.*;
import com.jie.service.MeetingStatisticalService;
import com.jie.service.UserAuthService;
import com.jie.service.UserInfoService;
import com.jie.service.UserRoleService;
import com.jie.strategy.context.UploadStrategyContext;
import com.jie.util.BASE64DecodedMultipartFile;
import com.jie.util.RespBean;
import com.jie.util.UserUtils;
import com.jie.vo.ConditionVO;
import com.jie.vo.PageResult;
import com.jie.vo.UserRoleVO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.concurrent.CompletableFuture;
import java.util.concurrent.ConcurrentHashMap;
import java.util.stream.Collectors;

/**
 * <p>
 *  服务实现类
 * </p>
 *
 * @author zwq
 * @since 2022-01-04
 */
@Service
public class UserInfoServiceImpl extends ServiceImpl<UserInfoMapper, UserInfo> implements UserInfoService {

    @Autowired
    private UserAuthMapper userAuthDao;
    @Autowired
    private UploadStrategyContext uploadStrategyContext;
    @Autowired
    private UserRoleService userRoleService;
    @Autowired
    private MeetingMapper meetingMapper;
    @Autowired
    private SignMapper signMapper;
    @Autowired
    private MeetingStatisticalService meetingStatisticalService;
    /**
     * 修改当前登录用户的名称
     * @param username
     * @param nickname
     */
    @Override
    public void updateByNickName(String username, String nickname) {
        //获取用户信息的主键id
        Integer userInfoId = userAuthDao.selectOne(new LambdaQueryWrapper<UserAuth>().eq(UserAuth::getUsername, username)).getUserInfoId();
        UserInfo userInfo = this.baseMapper.selectOne(new LambdaQueryWrapper<UserInfo>()
                .eq(UserInfo::getId, userInfoId)
        );
        userInfo.setNickname(nickname);
        this.updateById(userInfo);
        return;
    }
    @Transactional(rollbackFor = Exception.class)
    @Override
    public void updateUserInfoImages(String images) {
        //获取用户信息
        UserInfo userInfo = this.baseMapper.selectOne(new LambdaQueryWrapper<UserInfo>().eq(UserInfo::getId,
                UserUtils.getLoginUser().getUserInfoId()));
        String userInfoImage = uploadStrategyContext.executeUploadStrategy(BASE64DecodedMultipartFile.base64ToMultipart(images),UserUtils.getLoginUser().getUsername()+"/"+userInfo.getNickname());
        userInfo.setAvatar(userInfoImage);
        this.baseMapper.updateById(userInfo);
    }

    /**
     * 更改用户角色
     * @param userRoleVO
     */
    @Transactional(rollbackFor = Exception.class)
    @Override
    public void updateUserRole(UserRoleVO userRoleVO) {
        // 更新用户角色和昵称
        UserInfo userInfo = UserInfo.builder()
                .id(userRoleVO.getUserInfoId())
                .nickname(userRoleVO.getNickname())
                .build();
        this.baseMapper.updateById(userInfo);
        // 删除用户角色重新添加
        userRoleService.remove(new LambdaQueryWrapper<UserRole>()
                .eq(UserRole::getUserId, userRoleVO.getUserInfoId()));
        List<UserRole> userRoleList = userRoleVO.getRoleIdList().stream()
                .map(roleId -> UserRole.builder()
                        .roleId(roleId)
                        .userId(userRoleVO.getUserInfoId())
                        .build())
                .collect(Collectors.toList());
        userRoleService.saveBatch(userRoleList);
    }


    /**
     * 统计后台接口
     * @return
     */
    @Override
    public MeetingInfoDTO statistics() {
        //统计用户人数
        int userCount=this.baseMapper.selectCount(null);
        //统计会议数量
        int meetingCount=meetingMapper.selectCount(null);
        //统计7天内新增会议数量
        List<MeetingStatisticalDTO> meetingsAddedWithinSevenDays=meetingStatisticalService.meetingsAddedWithinSevenDays();
        //统计用户服务使用次数
        int signCount=signMapper.selectCount(null);
        //统计人脸和手动签到
        int faceSign=signMapper.selectCount(new LambdaQueryWrapper<Sign>().eq(Sign::getSignWay,0));
        int sign=signMapper.selectCount(new LambdaQueryWrapper<Sign>().eq(Sign::getSignWay,1));
        return MeetingInfoDTO.builder()
                .userCount(userCount)
                .meetingCount(meetingCount)
                .meetingsAddedWithinSevenDays(meetingsAddedWithinSevenDays)
                .signCount(signCount)
                .faceSign(faceSign)
                .sign(sign)
                .build();
    }


}
