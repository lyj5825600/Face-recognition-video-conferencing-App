package com.jie.service.impl;

import cn.hutool.core.date.DateTime;
import cn.hutool.core.date.DateUtil;
import cn.hutool.core.date.LocalDateTimeUtil;
import com.baomidou.mybatisplus.core.conditions.query.LambdaQueryWrapper;
import com.baomidou.mybatisplus.extension.service.impl.ServiceImpl;
import com.jie.dto.MeetingStatisticalDTO;
import com.jie.entity.Meeting;
import com.jie.entity.MeetingStatistical;
import com.jie.mapper.MeetingMapper;
import com.jie.mapper.MeetingStatisticalMapper;
import com.jie.service.MeetingStatisticalService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.time.ZoneId;
import java.time.format.DateTimeFormatter;
import java.time.temporal.ChronoUnit;
import java.util.Date;
import java.util.List;
import java.util.Optional;

/**
 * <p>
 *  服务实现类
 * </p>
 *
 * @author zwq
 * @since 2022-05-11
 */
@Service
public class MeetingStatisticalServiceImpl extends ServiceImpl<MeetingStatisticalMapper, MeetingStatistical> implements MeetingStatisticalService {
    @Autowired
    private MeetingMapper meetingMapper;
    //统计7天内新增会议数量
    @Override
    public List<MeetingStatisticalDTO> meetingsAddedWithinSevenDays() {
        DateTime startTime = DateUtil.beginOfDay(DateUtil.offsetDay(new Date(), -7));
        DateTime endTime = DateUtil.endOfDay(new Date());
        return this.baseMapper.meetingsAddedWithinSevenDays(startTime, endTime);
    }
    //凌晨23点执行一次
    @Scheduled(cron = "0 0 23 * * ?", zone = "Asia/Shanghai")
    public void saveUniqueView() {
        // 获取每天会议数
        Integer count=meetingMapper.countDayMeetingNumber(DateTimeFormatter.ofPattern("yyyy-MM-dd").format(LocalDateTime.now()));
        // 获取昨天日期插入数据
        MeetingStatistical meetingStatistical = MeetingStatistical.builder()
                .meetingCount(count)
                .build();
        this.baseMapper.insert(meetingStatistical);
    }
}
