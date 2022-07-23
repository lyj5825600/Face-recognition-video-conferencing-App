package com.jie.util;

import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.stereotype.Component;

import java.util.Date;
import java.util.HashMap;
import java.util.Map;

/**
 * @ProjectName:yeb
 * @Package:com.zlq.server.config.security
 * @ClassName: JwtTokenUtil
 * @description:
 * @author: Larry
 * @CreateDate:2021/4/23 10:36 下午
 */
@Component
public class JwtTokenUtil {
    private static final String CLAIM_KEY_USERNAME = "sub";
    private static final String CLAIM_KEY_CREATED = "created";

    @Value("${jwt.secret}")
    private String secret;

    @Value("${jwt.expiration}")
    private Long expiration;

    /**
     * 功能描述: <br>
     * 〈根据用户信息生成token〉
     *
     * @param userDetails
     * @Author: Larry
     * @Date: 2021/4/23 10:40 下午
     * @return: java.lang.String
     */
    public String generateToken(UserDetails userDetails) {
        Map<String, Object> claims = new HashMap<>();
        claims.put(CLAIM_KEY_USERNAME, userDetails.getUsername());
        claims.put(CLAIM_KEY_CREATED, new Date());
        return generateToken(claims);
    }

    /**
     * 根据用户名生成token
     * @param username
     * @return
     */
    public String generateToken(String username) {
        Map<String, Object> claims = new HashMap<>();
        claims.put(CLAIM_KEY_USERNAME, username);
        claims.put(CLAIM_KEY_CREATED, new Date());
        return generateToken(claims);
    }


    /**
     * 功能描述: <br>
     * 〈根据负载生成JWT,TOKEN〉
     *
     * @param claims
     * @Author: Larry
     * @Date: 2021/4/23 11:08 下午
     * @return: java.lang.String
     */
    private String generateToken(Map<String, Object> claims) {
        return Jwts.builder()
                .setClaims(claims)
                .setExpiration(generateExpirationDate())
                .signWith(SignatureAlgorithm.HS512, secret)
                .compact();
    }

    /**
     * 功能描述: <br>
     * 〈从token中获取username〉
     *
     * @param token
     * @Author: Larry
     * @Date: 2021/4/23 11:11 下午
     * @return: java.lang.String
     */
    public String getUsernameFromToken(String token) {
        String username;
        try {
            Claims claims = getClaimsFromToken(token);
            username = claims.getSubject();
        } catch (Exception e) {
            username = null;
        }
        return username;
    }


    /**
     * 功能描述: <br>
     * 〈生成token失效时间〉
     *
     * @param
     * @Author: Larry
     * @Date: 2021/4/23 11:08 下午
     * @return: java.util.Date
     */
    private Date generateExpirationDate() {
        return new Date(System.currentTimeMillis() + expiration * 1000);
    }

    /**
     * 功能描述: <br>
     * 〈从token里面获取荷载〉
     *
     * @param token
     * @Author: Larry
     * @Date: 2021/4/23 11:17 下午
     * @return: io.jsonwebtoken.Claims
     */
    private Claims getClaimsFromToken(String token) {
        Claims claims = null;
        try {
            claims = Jwts.parser()
                    .setSigningKey(secret)
                    .parseClaimsJws( token.replaceFirst("\ufeff", ""))
                    .getBody();
        } catch (Exception e) {
            e.printStackTrace();
        }
        return claims;
    }

    /**
     * 功能描述: <br>
     * 〈验证token是否有效〉
     *
     * @param token
     * @param userDetails
     * @Author: Larry
     * @Date: 2021/4/23 11:21 下午
     * @return: boolean
     */
    public boolean validateToken(String token, UserDetails userDetails) {
        String username = getUsernameFromToken(token);
        return username.equals(userDetails.getUsername()) && !isTokenExpired(token);
    }

    /**
     * 功能描述: <br>
     * 〈判断token是否可以被刷新〉
     * @Author: Larry
     * @Date: 2021/4/23 11:27 下午
     * @param token
     * @return: boolean
     */
    public boolean canRefresh(String token){
        return !isTokenExpired(token);
    }

    /**
     * 功能描述: <br>
     * 〈刷新token〉
     * @Author: Larry
     * @Date: 2021/4/23 11:30 下午
     * @param token
     * @return: java.lang.String
     */
    public String refreshToken(String token){
        Claims claims = getClaimsFromToken(token);
        claims.put(CLAIM_KEY_CREATED,new Date());
        return generateToken(claims);
    }

    /**
     * 功能描述: <br>
     * 〈判定token是否失效〉
     *
     * @param token
     * @Author: Larry
     * @Date: 2021/4/23 11:21 下午
     * @return: boolean
     */
    private boolean isTokenExpired(String token) {
        Date expireDate = getExpiredDateFromToken(token);
        return expireDate.before(new Date());
    }

    /**
     * 功能描述: <br>
     * 〈从token中获取过期时间〉
     *
     * @param token
     * @Author: Larry
     * @Date: 2021/4/23 11:24 下午
     * @return: java.util.Date
     */
    private Date getExpiredDateFromToken(String token) {
        Claims claims = getClaimsFromToken(token);
        return claims.getExpiration();
    }
}
