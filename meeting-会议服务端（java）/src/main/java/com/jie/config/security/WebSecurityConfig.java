package com.jie.config.security;

import com.jie.filter.FilterInvocationSecurityMetadataSourceImpl;
import com.jie.filter.JwtAuthencationTokenFilter;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.ObjectPostProcessor;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.builders.WebSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.access.intercept.FilterSecurityInterceptor;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;

/**
 * security配置类
 * @package: com.jie.config
 * @className: WebSecurityConfig
 * @date: 2021/12/28 16:02
 * @version: 1.0
 */
@EnableWebSecurity
@Configuration

public class WebSecurityConfig extends WebSecurityConfigurerAdapter {

    @Autowired
    private RestAuthorizationEntryPoint restAuthorizationEntryPoint;
    @Autowired
    private RestfulAccessDenieHandler restfulAccessDenieHandler;
    @Autowired
    private FilterInvocationSecurityMetadataSourceImpl filterInvocationSecurityMetadataSource;
    @Autowired
    private CustomUrlDecisionManager customUrlDecisionManager;

    /**
     * 密码加密
     *
     * @return {@link PasswordEncoder} 加密方式
     */
    @Bean
    public PasswordEncoder passwordEncoder() {
        return new BCryptPasswordEncoder();
    }
    @Override
    public void configure(WebSecurity web) throws Exception {
        web.ignoring().antMatchers("/login","/logout",
                "/uniapp/login",
                "/registered",
                "/calendar/test",
                "/meeting/conferenceIdViewTheConferenceStatus",
                "/sign/faceRecognitionCheck",
                "/app/login",
                "/css/**",
                "/js/**",
                "/index.html",
                "favicon.ico",
                "/doc.html",
                "/webjars/**",
                "/swagger-resources/**",
                "/v2/api-docs/**",
                "/captcha"
        );
    }
//因为我们使用了swagger2接口文档，所以除了静态资源以及登入登出之外还要将其与swagger2有关的都释放掉

    @Override
    protected void configure(HttpSecurity http) throws Exception {
            //使用JWT不需要csrf
            http.csrf()
                    .disable()
                    //基于token不需要session
                    .sessionManagement()
                    .sessionCreationPolicy(SessionCreationPolicy.STATELESS)
                    .and()
                    //所有请求都需要认证
                    .authorizeRequests()
                    .anyRequest()
                    .authenticated()
                    //动态权限配置
                    .withObjectPostProcessor(new ObjectPostProcessor<FilterSecurityInterceptor>() {
                        @Override
                        public <O extends FilterSecurityInterceptor> O postProcess(O o) {
                            o.setAccessDecisionManager(customUrlDecisionManager);
                            o.setSecurityMetadataSource(filterInvocationSecurityMetadataSource);
                            return o;
                        }
                    })
                    .and()
                    //关掉缓存
                    .headers()
                    .cacheControl();

//        添加jwt，登录授权过滤器
        http.addFilterBefore(jwtAuthenticationTokenFilter(), UsernamePasswordAuthenticationFilter.class);
//        添加自定义未授权和未登录结果返回
        http.exceptionHandling()
                .accessDeniedHandler(restfulAccessDenieHandler)
                .authenticationEntryPoint(restAuthorizationEntryPoint);

    }
    @Bean
    public JwtAuthencationTokenFilter jwtAuthenticationTokenFilter(){
        return new JwtAuthencationTokenFilter();
    }

}
