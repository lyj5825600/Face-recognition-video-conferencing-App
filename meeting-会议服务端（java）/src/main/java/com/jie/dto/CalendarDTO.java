package com.jie.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;

/**
 * @package: com.jie.dto
 * @className: CalendarDTO
 * @date: 2022/4/13 10:16
 * @version: 1.0
 */
@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class CalendarDTO {
    //id
    private Integer id;
    //开始时间
    private LocalDateTime meetingStartTime;
    //结束时间
    private LocalDateTime meetingEndTime;
    //会议号
    private Integer meetingNumber;
    //会议标题
    private String meetingTitle;
}
