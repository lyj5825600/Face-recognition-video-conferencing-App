package com.jie.config.security;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.jie.util.RespBean;
import org.springframework.security.access.AccessDeniedException;
import org.springframework.security.web.access.AccessDeniedHandler;
import org.springframework.stereotype.Component;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.io.PrintWriter;

/**
 * 权限不足
 * 对页面请求的处理
 * @package: com.jie.config
 * @className: RestfulAccessDenieHandler
 * @date: 2022/1/6 15:12
 * @version: 1.0
 */
@Component
public class RestfulAccessDenieHandler implements AccessDeniedHandler {
    @Override
    public void handle(HttpServletRequest httpServletRequest, HttpServletResponse httpServletResponse, AccessDeniedException e) throws IOException, ServletException {
        httpServletResponse.setCharacterEncoding("UTF-8");
        httpServletResponse.setContentType("application/json");
        PrintWriter writer = httpServletResponse.getWriter();
        RespBean bean = RespBean.error("权限不足请联系管理员!");
        bean.setCode(403);
        writer.write(new ObjectMapper().writeValueAsString(bean));
        writer.flush();
        writer.close();
    }
}
