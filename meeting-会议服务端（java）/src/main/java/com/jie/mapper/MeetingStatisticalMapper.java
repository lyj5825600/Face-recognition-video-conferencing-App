package com.jie.mapper;

import com.baomidou.mybatisplus.core.mapper.BaseMapper;
import com.jie.dto.MeetingStatisticalDTO;
import com.jie.entity.MeetingStatistical;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;

import java.util.Date;
import java.util.List;

/**
 * <p>
 *  Mapper 接口
 * </p>
 *
 * @author zwq
 * @since 2022-05-11
 */
@Mapper
public interface MeetingStatisticalMapper extends BaseMapper<MeetingStatistical> {
    //统计7天内的会议数量
    List<MeetingStatisticalDTO> meetingsAddedWithinSevenDays(@Param("startTime") Date startTime, @Param("endTime") Date endTime);
}
