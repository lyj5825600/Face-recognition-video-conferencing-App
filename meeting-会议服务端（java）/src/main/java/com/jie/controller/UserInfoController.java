package com.jie.controller;


import com.baomidou.mybatisplus.core.conditions.query.LambdaQueryWrapper;
import com.jie.annotation.OptLog;
import com.jie.entity.UserInfo;
import com.jie.service.UserInfoService;
import com.jie.util.RespBean;
import com.jie.util.UserUtils;
import com.jie.vo.ConditionVO;
import com.jie.vo.UserRoleVO;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.security.Principal;
import java.util.Map;
import java.util.concurrent.CompletableFuture;

import static com.jie.constant.OptTypeConst.UPDATE;

/**
 * <p>
 *  前端控制器
 * </p>
 *
 * @author zwq
 * @since 2022-01-04
 */
@RestController
@RequestMapping("/user-info")
@Api(tags = "用户描述信息")
public class UserInfoController {

    @Autowired
    private UserInfoService userInfoService;

    /**
     * 修改当前登录用户的nickname
     */
    @ApiOperation(value = "修改当前登录用户的名称")
    @PostMapping("/updateNickname")
    public RespBean<?> updateNickname(Principal principal,String nickname){

        //根据username修改nickname
        userInfoService.updateByNickName(principal.getName(),nickname);
        return RespBean.success("修改成功");
    }

    @ApiOperation(value = "修改用户的头像信息")
    @PostMapping("/updateUserInfoImages")
    public RespBean<?> updateUserInfoImages(String images){
        userInfoService.updateUserInfoImages(images);
        return RespBean.success("头像修改成功");
    }
    /**
     * 修改用户权限
     */
    @OptLog(optType = UPDATE)
    @ApiOperation(value = "修改用户权限")
    @PutMapping("/role")
    public RespBean<?> updateUserRole(@Valid @RequestBody UserRoleVO userRoleVO){
        userInfoService.updateUserRole(userRoleVO);
        return RespBean.success();
    }

    @ApiOperation("根据用户id获取用户信息")
    @GetMapping("/getUserInfoById")
    public RespBean<?> getUserInfoById(Integer id){
        UserInfo userInfo = userInfoService.getById(id);
        return RespBean.success("userinfo",userInfo);
    }

    @ApiOperation("后台统计接口")
    @GetMapping("/getStatistics")
    public RespBean<?> statistics(){
        return RespBean.success("后台统计",userInfoService.statistics());
    }


}

