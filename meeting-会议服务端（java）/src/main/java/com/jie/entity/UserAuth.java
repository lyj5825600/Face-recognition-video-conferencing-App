package com.jie.entity;

import com.baomidou.mybatisplus.annotation.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.io.Serializable;
import java.time.LocalDateTime;

/**
 * <p>
 *
 * </p>
 *
 * @author zwq
 * @since 2022-01-04
 */
@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
@TableName("user_auth")
public class UserAuth implements Serializable {

    private static final long serialVersionUID = 1L;

    @TableId(value = "id", type = IdType.AUTO)
    private Integer id;

    /**
     * 用户信息id
     */
    private Integer userInfoId;

    /**
     * 用户名（）
     */
    private String username;

    /**
     * 密码
     */
    private String password;

    /**
     * 登录类型
     */
    private Integer loginType;

    /**
     * 用户登录ip
     */
    private String ipAddress;

    /**
     * ip来源
     */
    private String ipSource;

    /**
     * 创建时间
     */
    @TableField(fill = FieldFill.INSERT)
    private LocalDateTime createTime;

    /**
     * 修改时间
     */
    @TableField(fill = FieldFill.UPDATE)
    private LocalDateTime updateTime;

    /**
     * 最近登录时间
     */
    private LocalDateTime lastLoginTime;

    public UserAuth(Integer userInfoId, String username, String password, Integer loginType, String ipAddress, String ipSource, LocalDateTime createTime) {
        this.userInfoId = userInfoId;
        this.username = username;
        this.password = password;
        this.loginType = loginType;
        this.ipAddress = ipAddress;
        this.ipSource = ipSource;
        this.createTime = createTime;
    }
}
