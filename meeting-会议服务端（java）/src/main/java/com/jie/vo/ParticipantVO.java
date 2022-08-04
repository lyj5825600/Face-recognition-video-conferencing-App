package com.jie.vo;

import io.swagger.annotations.ApiModel;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

/**
 * @package: com.jie.vo
 * @className: ParticipantVO
 * @date: 2022/4/7 11:32
 * @version: 1.0
 */
@Data
@Builder
@ApiModel(description = "会议创建中添加的参会人列表")
@AllArgsConstructor
@NoArgsConstructor
public class ParticipantVO {
    //参会人id
    private Integer id;
}
