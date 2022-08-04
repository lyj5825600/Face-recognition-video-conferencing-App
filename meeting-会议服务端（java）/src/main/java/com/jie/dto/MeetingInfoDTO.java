package com.jie.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

/**
 * 会议后台信息
 * @package: com.jie.dto
 * @className: MeetingInfoDTO
 * @date: 2022/5/11 10:08
 * @version: 1.0
 */
@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class MeetingInfoDTO {
    /**
     * 用户量
     */
    private Integer userCount;
    /**
     * 会议总数
     */
    private Integer meetingCount;
    /**
     * 服务使用次数
     */
    private Integer signCount;
    /**
     *列表统计
     */
    private List<MeetingStatisticalDTO> meetingsAddedWithinSevenDays;
    /**
     * 签到分类
     */
    private Integer faceSign;
    private Integer sign;
}
