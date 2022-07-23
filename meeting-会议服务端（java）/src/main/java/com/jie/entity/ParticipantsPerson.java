package com.jie.entity;

import com.baomidou.mybatisplus.annotation.IdType;
import com.baomidou.mybatisplus.annotation.TableId;
import lombok.*;

import java.io.Serializable;
import java.time.LocalDateTime;
import java.util.Date;

/**
 * <p>
 *
 * </p>
 *
 * @author zwq
 * @since 2022-04-04
 */
@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
@EqualsAndHashCode(callSuper = false)
public class ParticipantsPerson implements Serializable {

    private static final long serialVersionUID = 1L;

    /**
     * id
     */
    @TableId(value = "id", type = IdType.AUTO)
    private Integer id;

    /**
     * 会议室id
     */
    private Integer meetingId;
    /**
     * 会议号
     */
    private Integer meetingNumber;

    /**
     * 参会姓名
     */
    private String meetingNickname;
    /**
     * 发布会议账户
     */
    private String username;
    /**
     * 发布人姓名
     */
    private String nickname;

    /**
     * 人脸照片
     */
    private String facePhotos;
    /**
     * 会议开始时间
     */
    private LocalDateTime meetingStartTime;
    /**
     * 创建时间
     */
    private LocalDateTime createTime;

    /**
     * 更新时间
     */
    private LocalDateTime updateTime;

    /**
     * 是否删除
     */
    private Integer meetingDelete;


}
