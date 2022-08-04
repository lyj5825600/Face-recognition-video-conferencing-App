package com.jie.vo;

import com.fasterxml.jackson.annotation.JsonFormat;
import io.swagger.annotations.ApiModel;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;

/**
 * @package: com.jie.vo
 * @className: CalendarVO
 * @date: 2022/4/13 9:44
 * @version: 1.0
 */
@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
@ApiModel(description = "预约会议信息")
public class CalendarVO {
    /**
     * 待办会议号
     */
    private Integer meetingNumber;
    //会议发起人
    private String meetingNickname;
    /**
     * 会议标题
     */
    private String meetingTitle;
    /**
     * 会议地点
     */
    private String meetingAddress;
    /**
     * 会议开始时间
     */
    @JsonFormat(shape=JsonFormat.Shape.STRING, pattern = "yyyy-MM-dd HH:mm:ss")
    private LocalDateTime meetingStartTime;

    /**
     * 会议结束时间
     */
    @JsonFormat(shape=JsonFormat.Shape.STRING, pattern = "yyyy-MM-dd HH:mm:ss")
    private LocalDateTime meetingEndTime;

}
