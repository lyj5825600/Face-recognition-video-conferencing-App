package com.jie.dto;

import com.jie.vo.PageResult;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;
import java.util.List;

/**
 * 历史会议信息列表
 * @package: com.jie.dto
 * @className: UserConferenceDTO
 * @date: 2022/4/5 9:27
 * @version: 1.0
 */
@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class UserConferenceDTO {
    //会议签到表主键
    private int id;
    //会议签到表主键
    private Integer meetingId;
    //会议号
    private int meetingNumber;
    //会议名
    private String meetingName;
    //会议发起人
    private String nickname;
    //会议日期
    private LocalDateTime signTime;
}
