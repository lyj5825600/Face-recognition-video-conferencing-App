package com.jie.vo;

import io.swagger.annotations.ApiModel;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

/**
 * @package: com.jie.vo
 * @className: ParticipantListVO
 * @date: 2022/4/5 15:45
 * @version: 1.0
 */
@Data
@Builder
@ApiModel(description = "人脸列表")
@AllArgsConstructor
@NoArgsConstructor
public class ParticipantListVO {
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
