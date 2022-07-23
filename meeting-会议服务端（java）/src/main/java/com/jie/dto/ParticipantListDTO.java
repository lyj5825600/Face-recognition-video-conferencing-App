package com.jie.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

/**
 * @package: com.jie.dto
 * @className: ParticipantListDTO
 * @date: 2022/5/8 20:07
 * @version: 1.0
 */
@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class ParticipantListDTO {
    /**
     * 参会人id
     */
    private Integer id;
    /**
     * 参会人姓名
     */
    private String nickname;
    /**
     * 参会人电话
     */
    private String phone;
    /**
     * 参会人性别(0是男 1是女)
     */
    private int sex;

    /**
     * 参会人照片
     */
    private String facePhotos;
}
