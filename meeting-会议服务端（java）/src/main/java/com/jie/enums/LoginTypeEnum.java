package com.jie.enums;

import lombok.AllArgsConstructor;
import lombok.Getter;

/**
 * 登录方式枚举
 *
 * @author yezhiqiu
 * @date 2021/07/28
 */
@Getter
@AllArgsConstructor
public enum LoginTypeEnum {
    /**
     * 手机号登录
     */
    PHONE(1, "邮箱登录", ""),
    /**
     * QQ登录
     */
    QQ(2, "QQ登录", "qqLoginStrategyImpl");
    /**
     * 登录方式
     */
    private final Integer type;

    /**
     * 描述
     */
    private final String desc;

    /**
     * 策略
     */
    private final String strategy;


}
