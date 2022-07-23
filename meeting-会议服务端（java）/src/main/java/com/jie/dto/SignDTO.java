package com.jie.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;

/**
 * 会议签到成功返回字段
 * @package: com.jie.dto
 * @className: SignDTO
 * @date: 2022/4/11 19:53
 * @version: 1.0
 */
@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class SignDTO {
    //签到姓名
    private String signNickname;
    //签到方式
    private Integer signWay;
    //签到时间
    private LocalDateTime signTime;
}
