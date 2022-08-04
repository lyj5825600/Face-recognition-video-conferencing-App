package com.jie.vo;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

/**
 * 用户注册类
 * @package: com.jie.vo
 * @className: UserRegisteredVO
 * @date: 2022/4/9 17:14
 * @version: 1.0
 */
@Data
@AllArgsConstructor
@NoArgsConstructor
public class UserRegisteredVO {
    //姓名
    private String nickname;
    //手机号
    private String phone;
    //密码
    private String password;
}
