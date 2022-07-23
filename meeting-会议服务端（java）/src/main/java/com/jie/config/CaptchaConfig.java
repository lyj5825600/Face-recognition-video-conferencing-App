package com.jie.config;

import com.google.code.kaptcha.impl.DefaultKaptcha;
import com.google.code.kaptcha.util.Config;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import java.util.Properties;

/**
 * 验证码配置类
 *
 * @author 杰 on 2021/12/31
 */
@Configuration
public class CaptchaConfig {

    @Bean
    public DefaultKaptcha defaultKaptcha(){
        //验证码生成
        DefaultKaptcha defaultKaptcha = new DefaultKaptcha();
        //配置
        Properties properties = new Properties();
        //是否有边框
        properties.setProperty("kaptcha.border","yes");
        //设置边框颜色
        properties.setProperty("kaptcha.border.color","105,179,90");
        //验证码
        properties.setProperty("kaptcha.session.key","code");
        //验证码文本字符颜色，默认为黑色
        properties.setProperty("kaptcha.textproducer.font.color","blue");
        //设置字体样式
        properties.setProperty("kaptcha.textproducer.font.names","宋体,楷体,微软雅黑");
        //设置字体大小
        properties.setProperty("kaptcha.textproducer.font.size","30");
        //字符长度默认为5
        properties.setProperty("kaptcha.textproducer.char.length","4");
        //验证码图片宽度 默认为200
        properties.setProperty("kaptcha.image.width","100");
        //验证码图片高度 默认为40
        properties.setProperty("kapcha.image.height","40");
        Config config = new Config(properties);
        defaultKaptcha.setConfig(config);
        return defaultKaptcha;

    }
}
