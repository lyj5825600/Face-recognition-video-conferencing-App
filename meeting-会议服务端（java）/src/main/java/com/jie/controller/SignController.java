package com.jie.controller;


import com.baomidou.mybatisplus.extension.api.R;
import com.jie.service.SignService;
import com.jie.util.RespBean;
import com.jie.util.UserUtils;
import com.jie.vo.ConditionVO;
import com.jie.vo.SignVO;
import io.swagger.annotations.*;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.geo.Point;
import org.springframework.data.redis.connection.RedisGeoCommands;
import org.springframework.data.redis.core.RedisTemplate;
import org.springframework.web.bind.annotation.*;

import java.security.Principal;
import java.util.List;
import java.util.Objects;

/**
 * <p>
 * 会议签到表
 * </p>
 *
 * @author zwq
 * @since 2022-04-04
 */
@RestController
@RequestMapping("/sign")
@Slf4j
@Api(tags = "会议签到模块")
public class SignController {

    @Autowired
    private SignService signService;
    /**
     * 根据当前用户获取他的历史会议信息
     *
     * @return
     */
    @ApiOperation(value = "根据当前用户获取他的历史会议信息")
    @GetMapping("/userHistoryConference")
    public RespBean<?> getUserHistoryConference(ConditionVO condition) {
        //根据用户名获取用户历史会议信息
        return RespBean.success("conference", signService.getUserConference(condition, UserUtils.getLoginUser().getUsername()));
    }

    /**
     * 根据当前用户删除会议id为xx的历史会议记录
     *
     * @return
     */

    @ApiOperation(value = "删除当前用户指定的历史会议记录")
    @PostMapping("/removeHistoryConference")
    public RespBean<?> removeHistoryConference(@RequestBody List<Integer> id) {
        signService.removeByIds(id);
        return RespBean.success("删除成功");
    }

    /**
     * 调用远程RPC深度学习模型进行人脸签到
     *
     * @param signVO
     * @return
     */
    @ApiOperation(value = "签到接口")
    @PostMapping("/faceRecognitionCheck")
    public RespBean<?> faceRecognitionCheck(SignVO signVO) {
        //人脸识别接口验证
        return signService.faceRecognition(signVO, UserUtils.getLoginUser().getUsername());
    }
}

