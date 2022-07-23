package com.jie.mapper;

import com.baomidou.mybatisplus.core.mapper.BaseMapper;
import com.jie.dto.UserBackDTO;
import com.jie.entity.UserAuth;
import com.jie.vo.ConditionVO;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;

import java.util.List;

/**
 * <p>
 *  Mapper 接口
 * </p>
 *
 * @author zwq
 * @since 2022-01-04
 */
@Mapper
public interface UserAuthMapper extends BaseMapper<UserAuth> {

    //插入并返回id
    int adduserAuth(UserAuth userAuth);
    //获取用户数量
    Integer countUser(@Param("condition") ConditionVO condition);

    /**
     * 查询后台用户列表
     *
     * @param current   页码
     * @param size      大小
     * @param condition 条件
     * @return {@link List<UserBackDTO>} 用户列表
     */
    List<UserBackDTO> listUsers(@Param("current") Long current, @Param("size") Long size, @Param("condition") ConditionVO condition);

}
