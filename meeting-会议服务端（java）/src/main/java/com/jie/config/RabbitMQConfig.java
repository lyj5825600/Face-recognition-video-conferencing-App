package com.jie.config;

import org.springframework.amqp.core.*;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import static com.jie.constant.MQPrefixConst.*;

/**
 * Rabbitmq配置类
 *死信实现延迟队列
 * @author yezhiqiu
 * @date 2021/07/29
 */
@Configuration
public class RabbitMQConfig {

    //定义延时队列
    @Bean("delayQueue")
    public Queue delayQueue(){
        return QueueBuilder.durable("delayQueue")
                //如果消息过时，则会被投递到当前对应jie-dlx-exchange
                .withArgument("x-dead-letter-exchange","my-dlx-exchange")
                //如果消息过时，jie-dlx-exchange则会根据jie-key-delay投递消息
                .withArgument("x-dead-letter-routing-key","routing-key-delay").build();
    }
    //定义死信队列
    @Bean("dlxQueue")
    public Queue dlxQueue(){
        return QueueBuilder.durable("my-dlx-queue").build();
    }
    //定义死信交换机
    @Bean("dlxExchange")
    public Exchange dlxExchange(){
        return ExchangeBuilder.directExchange("my-dlx-exchange").build();
    }
    //绑定死信队列和交换机
    @Bean("dlxBinding")
    public Binding dlxBinding(@Qualifier("dlxExchange") Exchange exchange, @Qualifier("dlxQueue")Queue queue){
        return BindingBuilder.bind(queue).to(exchange).with("routing-key-delay").noargs();
    }
}

