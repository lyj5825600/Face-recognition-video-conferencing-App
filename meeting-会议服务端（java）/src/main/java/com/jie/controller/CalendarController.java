package com.jie.controller;


import com.alibaba.fastjson.JSONObject;
import com.baomidou.mybatisplus.extension.api.R;
import com.jie.baiduai.BaiDuAiCheckService;
//import com.jie.config.DelayLetterRabbitmqConfig;
import com.jie.config.DelayLetterRabbitmqConfig;
import com.jie.constant.CommonConst;
import com.jie.dto.UserDetailDTO;
import com.jie.entity.Meeting;
import com.jie.service.CalendarService;
import com.jie.strategy.context.UploadStrategyContext;
import com.jie.util.BASE64DecodedMultipartFile;
import com.jie.util.HttpUtil;
import com.jie.util.RespBean;
import com.jie.util.UserUtils;
import com.jie.vo.CalendarVO;
import com.jie.vo.ConditionVO;
import com.jie.vo.FacenetVO;
import com.jie.vo.MettingVO;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import lombok.extern.slf4j.Slf4j;
import org.apache.commons.exec.CommandLine;
import org.apache.commons.exec.DefaultExecutor;
import org.apache.commons.exec.PumpStreamHandler;

import org.springframework.amqp.AmqpException;
import org.springframework.amqp.core.Message;
import org.springframework.amqp.core.MessagePostProcessor;
import org.springframework.amqp.rabbit.core.RabbitTemplate;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.client.RestTemplate;
import org.springframework.web.multipart.MultipartFile;

import java.io.*;
import java.security.Principal;
import java.time.Duration;
import java.time.LocalDateTime;
import java.time.ZoneId;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.concurrent.CompletableFuture;

import static com.jie.enums.ZoneEnum.SHANGHAI;

/**
 * <p>
 *  前端控制器
 * </p>
 *
 * @author zwq
 * @since 2022-04-04
 */
@RestController
@Slf4j
@RequestMapping("/calendar")
@Api(tags = "日历预约模块")
public class CalendarController {
    @Autowired
    private CalendarService calendarService;
    @Autowired
    private RestTemplate restTemplate;
    @Autowired
    private RabbitTemplate rabbitTemplate;

//    @ApiOperation("测试")
//    @PostMapping("/test")
//    public RespBean test(Integer time){
//        String message="我是"+time;
//        //EXCHANGE_NAME, ROUTE_KEY
//        rabbitTemplate.convertAndSend(DelayLetterRabbitmqConfig.EXCHANGE_NAME,DelayLetterRabbitmqConfig.ROUTE_KEY,message,(t)->{
//            //设置延迟时间 毫秒
//            //会议结束时间-当前时间
//            Duration duration = Duration.between(LocalDateTime.now(), meeting.getMeetingEndTime());
//            //设置消息过期时间
//            message.getMessageProperties().setExpiration(duration.toMillis() + "");
//            log.info(meeting.getMeetingName() + "成功投递" + "到期时间为" + duration.toMillis()/1000 + "秒");
//            log.info("异步添加mq延迟队列");
//            return message;
//            t.getMessageProperties().setDelay(time);
//            log.info("设置成功"+time/1000);
//            return t;
//        });
//        return RespBean.success();
//    }

    @ApiOperation("新建日程")
    @PostMapping("/addCalendar")
    public RespBean addCalendar(@RequestBody CalendarVO calendarVO){
        return calendarService.addCalendar(calendarVO,UserUtils.getLoginUser().getUsername());
    }
    @ApiOperation("删除日程")
    @PostMapping("/deleteCalendars")
    public RespBean deleteCalendars(@RequestBody List<Integer> ids){
        calendarService.removeByIds(ids);
        return RespBean.success("删除成功");
    }
    @ApiOperation("根据日期查看本用户日程信息")
    @GetMapping("/getCalendar")
    public RespBean getCalendar(ConditionVO condition,String dataTime){
        //根据用户名获取用户历史会议信息
        return RespBean.success("calendar",calendarService.getCalendarList(condition, UserUtils.getLoginUser().getUsername(),dataTime));
    }
    @ApiOperation("根据日期id查询本用户日程信息")
    @GetMapping("/getCalendarId")
    public RespBean getCalendarId(Integer id){
        return RespBean.success("CalendarId",calendarService.getById(id));
    }

}

