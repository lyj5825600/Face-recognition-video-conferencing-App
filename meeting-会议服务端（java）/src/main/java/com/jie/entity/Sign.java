package com.jie.entity;

import com.baomidou.mybatisplus.annotation.FieldFill;
import com.baomidou.mybatisplus.annotation.IdType;
import com.baomidou.mybatisplus.annotation.TableField;
import com.baomidou.mybatisplus.annotation.TableId;
import com.jie.dto.MeetingDTO;
import lombok.*;

import java.io.Serializable;
import java.time.LocalDateTime;
import java.util.Date;

/**
 * <p>
 *  会议签到表
 * </p>
 *
 * @author zwq
 * @since 2022-04-04
 */
@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
@EqualsAndHashCode(callSuper = false)
public class Sign implements Serializable {

    private static final long serialVersionUID = 1L;

    /**
     * id
     */
    @TableId(value = "id", type = IdType.AUTO)
    private Integer id;

    /**
     * 会议id
     */
    private Integer meetingId;
    /**
     * 会议号
     */
    private Integer meetingNumber;

    /**
     * 会议名
     */
    private String meetingName;
    /**
     * 会议发起人账号
     */
    private String username;
    /**
     * 会议发起人
     */
    private String nickname;
    /**
     * 签到姓名
     */
    private String signNickname;
    /**
     * 签到账户
     */
    private String signUsername;

    /**
     * 签到方式
     */
    private Integer signWay;

    /**
     * 签到时间
     */
    private LocalDateTime signTime;

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
     * 签到成功 成功为0 失败为1
     */
    private Integer successful;
    /**
     * 用户是否删除
     */
    private Integer isDelete;
}
