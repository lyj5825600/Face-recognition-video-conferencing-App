package com.jie.mapper;

import com.baomidou.mybatisplus.core.mapper.BaseMapper;
import com.jie.entity.Menu;
import org.apache.ibatis.annotations.Mapper;

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
public interface MenuMapper extends BaseMapper<Menu> {

    /**
     * 根据用户id来查菜单
     * @param adminId
     * @return
     */
    List<Menu> getMenusByAdminId(Integer adminId);
    /**
     * 根据用户角色获取菜单
     */
    List<Menu> getMenusWithRole();


    List<Menu> listMenusByUserInfoId(Integer userInfoId);
}
