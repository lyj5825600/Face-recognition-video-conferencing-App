package com.jie.entity;

import com.baomidou.mybatisplus.annotation.FieldFill;
import com.baomidou.mybatisplus.annotation.IdType;
import com.baomidou.mybatisplus.annotation.TableField;
import com.baomidou.mybatisplus.annotation.TableId;
import lombok.Data;
import lombok.EqualsAndHashCode;

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
@EqualsAndHashCode(callSuper = false)
public class Calendar implements Serializable {

    private static final long serialVersionUID = 1L;

    /**
     * id
     */
    @TableId(value = "id", type = IdType.AUTO)
    private Integer id;

    /**
     * 待办会议号
     */
    private Integer meetingNumber;
    /**
     * 用户本人
     */
    private String username;
    /**
     * 会议地点
     */
    private String meetingAddress;
    /**
     * 会议开始时间
     */
    private LocalDateTime meetingStartTime;

    /**
     * 会议结束时间
     */
    private LocalDateTime meetingEndTime;

    /**
     * 会议发布人
     */
    private String meetingNickname;

    /**
     * 会议标题
     */
    private String meetingTitle;

    /**
     * 创建时间
     */
    @TableField(fill = FieldFill.INSERT)
    private LocalDateTime createTime;

    /**
     * 更新时间
     */
    @TableField(fill = FieldFill.UPDATE)
    private LocalDateTime updateTime;

    /**
     * 是否删除
     */
    private Integer calendarDelete;


}
