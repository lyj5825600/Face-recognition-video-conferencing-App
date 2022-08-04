package com.jie.mapper;

import com.baomidou.mybatisplus.core.mapper.BaseMapper;
import com.jie.entity.UserInfo;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;

/**
 * <p>
 *  Mapper 接口
 * </p>
 *
 * @author zwq
 * @since 2022-01-04
 */
@Mapper
public interface UserInfoMapper extends BaseMapper<UserInfo> {
    /**
     * 插入并返回主键
     */
    int addUserInfo(UserInfo userInfo);


}
