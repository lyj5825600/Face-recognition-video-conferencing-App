package com.jie.service;

import com.baomidou.mybatisplus.extension.service.IService;
import com.jie.entity.Role;
import com.jie.vo.RoleVO;

import java.util.List;

/**
 * <p>
 *  服务类
 * </p>
 *
 * @author zwq
 * @since 2022-01-04
 */
public interface RoleService extends IService<Role> {
    //添加和更新用户权限
    void saveOrUpdateRole(RoleVO roleVO);
    //删除用户权限
    void deleteRoles(List<Integer> roleIdList);
}
