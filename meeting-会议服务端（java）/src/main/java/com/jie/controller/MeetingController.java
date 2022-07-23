package com.jie.controller;


import com.jie.annotation.OptLog;
import com.jie.dto.MeetingDTO;
import com.jie.entity.Meeting;
import com.jie.service.MeetingService;
import com.jie.util.RespBean;
import com.jie.util.UserUtils;
import com.jie.vo.ConditionVO;
import com.jie.vo.MettingVO;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.*;

import static com.jie.constant.OptTypeConst.SAVE;

/**
 * <p>
 *  前端控制器
 * </p>
 *
 * @author zwq
 * @since 2022-04-04
 */
@RestController
@RequestMapping("/meeting")
@Api(tags = "会议管理")
public class MeetingController {
    @Autowired
    private MeetingService meetingService;

    @GetMapping("/joinConference")
    @ApiOperation("视频会议提供信息")
    public RespBean<Map<String,Object>> joinConference(Integer meetingNumber){
        //获取会议发起人id
       Map<String,Object> map=meetingService.joinConference(meetingNumber);
        return RespBean.success("joinConference",map);
    }

    @ApiOperation(value = "根据id查看会议信息")
    @GetMapping("/viewConferenceInformationBasedTheId/{id}")
    public RespBean<Meeting> viewConferenceInformationBasedTheId(@PathVariable("id") int id){
        return RespBean.success("metting",meetingService.mettingInformation(id));
    }
    @ApiOperation("根据当前用户关闭最新会议")
    @PostMapping("/shutDownMettingByUserName")
    public RespBean shutDownMettingByUserName(){
        return meetingService.shutDownMetting(UserUtils.getLoginUser());
    }

    @ApiOperation("用户查看自己创建的会议记录")
    @GetMapping("/oneselfMeeting")
    public RespBean oneselfMeeting(ConditionVO condition){
        return RespBean.success("oneselfMeeting",meetingService.getOneSelfMeeting(condition, UserUtils.getLoginUser().getUsername()));
    }

    @OptLog(optType = SAVE)
    @ApiOperation("当前用户创建会议并交给ai审核")
    @PostMapping("/saveMeeting")
    public RespBean saveMeeting(@RequestBody MettingVO mettingVO){
        return meetingService.saveMeeting(mettingVO);
    }

    @ApiOperation("会议号识别会议是否合法流程")
    @PostMapping("/conferenceIdViewTheConferenceStatus")
    public RespBean conferenceIdViewTheConferenceStatus(Integer meetingNumber){
        return meetingService.getMeetingStatus(meetingNumber);
    }
    @ApiOperation("管理员查看全部会议信息")
    @GetMapping("/viewAllConferenceInformation")
    public RespBean viewAllConferenceInformation(ConditionVO condition){
        return RespBean.success("allConferenceInformation",meetingService.viewAllConferenceInformation(condition));
    }
    @ApiOperation("管理员根据会议号关闭会议")
    @PostMapping("/adminCloseMeeting")
    public RespBean adminCloseMeeting(Integer meetingNumber){
        //关闭redis的会议信息和数据库的会议信息
        meetingService.adminShutDownMetting(meetingNumber);
        return RespBean.success("关闭成功");
    }

}

