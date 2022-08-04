package com.jie.service;

import com.baomidou.mybatisplus.extension.service.IService;
import com.jie.dto.MeetingInfoDTO;
import com.jie.dto.UserOnlineDTO;
import com.jie.entity.UserInfo;
import com.jie.util.RespBean;
import com.jie.vo.ConditionVO;
import com.jie.vo.PageResult;
import com.jie.vo.UserRoleVO;

import java.util.Map;

/**
 * <p>
 *  服务类
 * </p>
 *
 * @author zwq
 * @since 2022-01-04
 */
public interface UserInfoService extends IService<UserInfo> {

    /**
     * 修改当前登录用户的nickname
     * @param name
     * @param nickname
     */
    void updateByNickName(String name, String nickname);

    /**
     * 修改用户的头像
     * @param images
     */
    void updateUserInfoImages(String images);

    /**
     * 修改用户头像信息
     * @param userRoleVO
     */
    void updateUserRole(UserRoleVO userRoleVO);



    /**
     * 统计接口
     * @return
     */
    MeetingInfoDTO statistics();
}
