package com.jie.listener;

import com.jie.config.DelayLetterRabbitmqConfig;
import com.jie.entity.Meeting;
import com.jie.mapper.MeetingMapper;
import lombok.extern.slf4j.Slf4j;
import org.springframework.amqp.rabbit.annotation.RabbitHandler;
import org.springframework.amqp.rabbit.annotation.RabbitListener;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import org.springframework.transaction.annotation.Transactional;

import java.util.Date;
import java.util.Map;

/**
 * mq会议定时关闭
 * @package: com.jie.listener
 * @className: MeetingListener
 * @date: 2022/4/28 10:39
 * @version: 1.0
 */
@Component
@Slf4j
public class MeetingListener {
    @Autowired
    private MeetingMapper meetingMapper;
    @Transactional
    @RabbitListener(queues = DelayLetterRabbitmqConfig.QUEUE_NAME)
    public void receiveMeetingWillOver(Meeting meeting){
        //设置数据库会议到期标识
        meeting.setMeetingDelete(1);
        meetingMapper.updateById(meeting);
        log.info(meeting.getMeetingName()+"会议关闭成功");
    }
}
