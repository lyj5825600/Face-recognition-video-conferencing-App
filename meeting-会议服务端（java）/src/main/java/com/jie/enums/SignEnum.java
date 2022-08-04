package com.jie.enums;

import lombok.AllArgsConstructor;
import lombok.Getter;

/**
 * 会议签到策略
 * @package: com.jie.enums
 * @className: SignEnum
 * @date: 2022/4/12 9:31
 * @version: 1.0
 */
@Getter
@AllArgsConstructor
public enum SignEnum {
    /**
     * oss
     */
    FACE(1, "人脸签到","faceStrategylmpl"),
    /**
     * 本地
     */
    MANUAL(2, "手动签到","manualStrategyImpl");

    /**
     * 签到方式方式
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
