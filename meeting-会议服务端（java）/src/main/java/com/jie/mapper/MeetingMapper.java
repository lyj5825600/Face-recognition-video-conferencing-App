package com.jie.mapper;

import com.baomidou.mybatisplus.core.mapper.BaseMapper;
import com.jie.entity.Meeting;
import org.apache.ibatis.annotations.Mapper;

/**
 * <p>
 *  Mapper 接口
 * </p>
 *
 * @author zwq
 * @since 2022-04-04
 */
@Mapper
public interface MeetingMapper extends BaseMapper<Meeting> {
    //获取当前用户的最新会议
    Meeting latestMetting(String username);
    //根据会议号获取最新会议信息
    Meeting getMeetingStatus(int meetingNumber);
    //添加并返回主键
    int saveMeeting(Meeting meeting);
    //统计每天都会议数
    Integer countDayMeetingNumber(String date);
    //统计7天内的会议总数
}
