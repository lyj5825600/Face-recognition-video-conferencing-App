package com.jie.config;

import org.springframework.amqp.core.*;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import java.util.HashMap;
import java.util.Map;

/**
 * 基于延迟插件的延迟队列
 * @package: com.jie.config
 * @className: DelayLetterRabbitmqConfig
 * @date: 2022/5/10 8:37
 * @version: 1.0
 */
@Configuration
public class DelayLetterRabbitmqConfig {
    //最后经过死信队列转发后实际消费的交换机
    public static final String EXCHANGE_NAME = "delayed_exchange";
    //最后经过死信队列转发后实际消费的队列
    public static final String QUEUE_NAME = "delayed_queue";
    //最后经过死信队列转发后实际消费的路由key
    public static final String ROUTE_KEY = "delayed_key";

    /**
     * 交换机
     */
    @Bean
    CustomExchange exchange() {
        //通过x-delayed-type参数设置fanout /direct / topic / header 类型
        Map<String, Object> args = new HashMap<>();
        args.put("x-delayed-type", "direct");
        return new CustomExchange(EXCHANGE_NAME, "x-delayed-message",true, false,args);
    }

    /**
     * 队列
     */
    @Bean
    public Queue queue() {
        return new Queue(QUEUE_NAME,true,false,false);
    }

    /**
     * 将队列绑定到交换机
     */
    @Bean
    public Binding binding(CustomExchange exchange, Queue queue) {
        return BindingBuilder
                .bind(queue)
                .to(exchange)
                .with(ROUTE_KEY)
                .noargs();
    }
}

