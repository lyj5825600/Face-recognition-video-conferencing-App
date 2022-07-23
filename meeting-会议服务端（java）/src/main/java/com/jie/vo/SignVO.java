package com.jie.vo;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

/**
 * 签到
 * @package: com.jie.vo
 * @className: SignVO
 * @date: 2022/4/11 19:50
 * @version: 1.0
 */
@Data
@AllArgsConstructor
@NoArgsConstructor
public class SignVO {
    //房间号
    private Integer meetingNumber;
    //人脸图片的base64
    private String faceImage;
    //签到的nickname
    private String nickname;
    //判断是线上签到还是线下签到(true是线上，false是线上)
    private boolean IsSign;
    //当前的会议线下地址名称
    private String meetingAddress;
    /**
     会议地址经度
     */
    private Double meetingLongitude;
    /*
     *会议地址纬度
     */
    private Double meetingLatitude;
}
