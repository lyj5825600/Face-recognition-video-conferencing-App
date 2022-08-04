package com.jie.entity;

import com.baomidou.mybatisplus.annotation.*;
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
 * @since 2022-01-04
 */
@Data
@AllArgsConstructor
@NoArgsConstructor
@EqualsAndHashCode(callSuper = false)
@Builder
@TableName("user_info")
public class UserInfo implements Serializable {

    private static final long serialVersionUID = 1L;

    /**
     * 用户ID
     */
    @TableId(value = "id", type = IdType.AUTO)
    private Integer id;

    /**
     * 邮箱号
     */
    private String email;
    /**
     * 用户昵称
     */
    private String nickname;

    /**
     * 用户头像
     */
    private String avatar;
    /**
     * 会议号
     */
    private Integer meetingNumber;

    /**
     * 是否禁用
     */
    private Integer isDisable;

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

    public UserInfo(String nickname,String avatar,Integer meetingNumber,Integer isDisable,LocalDateTime createTime){
        this.nickname=nickname;
        this.avatar=avatar;
        this.meetingNumber=meetingNumber;
        this.isDisable=isDisable;
        this.createTime=createTime;
    }

}
