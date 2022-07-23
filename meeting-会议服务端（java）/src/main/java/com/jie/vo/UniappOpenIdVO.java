package com.jie.vo;

import io.swagger.annotations.ApiModel;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

/**
 * @package: com.jie.vo
 * @className: UniappOpenIdVO
 * @date: 2022/4/6 22:17
 * @version: 1.0
 */
@Data
@AllArgsConstructor
@NoArgsConstructor
public class UniappOpenIdVO {
    //用户唯一标识
    private String openid;
    //会话密钥
    private String session_key;
    //失败码
    private String errcode;
}
