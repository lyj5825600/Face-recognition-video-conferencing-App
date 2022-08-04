package com.jie.service;

import com.baomidou.mybatisplus.extension.service.IService;
import com.jie.dto.MeetingStatisticalDTO;
import com.jie.entity.MeetingStatistical;

import java.util.List;

/**
 * <p>
 *  服务类
 * </p>
 *
 * @author zwq
 * @since 2022-05-11
 */
public interface MeetingStatisticalService extends IService<MeetingStatistical> {
    //统计7天内新增会议数量
    List<MeetingStatisticalDTO> meetingsAddedWithinSevenDays();
}
