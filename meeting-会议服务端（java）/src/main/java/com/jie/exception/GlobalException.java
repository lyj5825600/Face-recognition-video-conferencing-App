package com.jie.exception;

import com.jie.util.RespBean;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestControllerAdvice;

import java.sql.SQLException;
import java.sql.SQLIntegrityConstraintViolationException;

/**
 * 全局异常处理
 * @package: com.jie.exception
 * @className: GlobalException
 * @date: 2022/1/10 14:46
 * @version: 1.0
 */
@RestControllerAdvice
public class GlobalException {

    @ExceptionHandler(SQLException.class)
    public RespBean mySqlException(Exception e){
        if (e instanceof SQLIntegrityConstraintViolationException){
            return RespBean.error("该数据有关联数据,操作失败");
        }
        return RespBean.error("数据库异常,操作失败！");
    }
}
