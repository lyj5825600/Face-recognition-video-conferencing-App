package com.jie.service;

import com.baomidou.mybatisplus.extension.service.IService;
import com.jie.dto.*;
import com.jie.entity.UserAuth;
import com.jie.util.RespBean;
import com.jie.vo.ConditionVO;
import com.jie.vo.QQLoginVO;
import com.jie.vo.UserRegisteredVO;
import com.jie.vo.UserVO;

import javax.servlet.http.HttpServletRequest;

/**
 * <p>
 *  服务类
 * </p>
 *
 * @author zwq
 * @since 2022-01-04
 */
public interface UserAuthService extends IService<UserAuth> {

    /**
     * 登录之后返回token
     * @param username
     * @param password
     * @param request
     * @return
     */
    RespBean login(String username, String password, String code,HttpServletRequest request);

    /**
     * 根据用户名获取用户
     * @param username
     * @return
     */
    UserDetailDTO getAdminByUserName(String username);

    /**
     * 小程序登录之后返回token
     * @param uniappUserLoginParamDTO
     * @param request
     * @return
     */
    RespBean login(UniappUserLoginParamVO uniappUserLoginParamDTO, HttpServletRequest request);
    /**
     * 用户注册
     * @param userRegisteredVO
     * @return
     */
    RespBean registeredUserAuth(UserRegisteredVO userRegisteredVO);

    /**
     * 用户app登录
     * @param adminLoginParam
     * @param request
     * @return
     */
    RespBean appLogin(UserLoginParam adminLoginParam, HttpServletRequest request);

    /**
     * 修改密码
     * @param user
     */
    void updatePassword(UserVO user);

    /**
     * 查询后台用户列表
     *
     * @param condition 条件
     * @return 用户列表
     */
    RespBean<UserBackDTO> listUserBackDTO(ConditionVO condition);

    /**
     * 用户修改自己密码
     * @param password
     */
    void updateUserPassword(String password);
}
