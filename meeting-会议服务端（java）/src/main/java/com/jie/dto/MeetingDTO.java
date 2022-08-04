package com.jie.dto;

import com.baomidou.mybatisplus.annotation.TableField;
import com.jie.entity.Meeting;
import com.jie.entity.ParticipantsPerson;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;
import java.util.List;

/**
 * @package: com.jie.vo
 * @className: MeetingVO
 * @date: 2022/4/5 11:15
 * @version: 1.0
 */
@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class MeetingDTO{
    //会议id
    private Integer id;
    //会议标题
    private String meetingName;
    //会议开始时间
    private LocalDateTime meetingStartTime;
    //会议号
    private Integer meetingNumber;
    //会议发起人
    private String nickname;
    //是否关闭
    private Integer meetingDelete;
    //会议类型 0是线上会议 1是线下会议
    private Integer meetingType;
    /*会议人数*/
    private int meetingPerson;
    //会议签到成功人员
    private List<SignDTO> successfullyPerson;
    //会议未签到人员
    private List<ParticipantsPersonDTO> failedPerson;
}
