package com.jie.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

/**
 * @package: com.jie.dto
 * @className: ParticipantsPersonDTO
 * @date: 2022/4/13 9:05
 * @version: 1.0
 */
@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class ParticipantsPersonDTO {
    //未签到人姓名
    private String meetingNickname;
}
