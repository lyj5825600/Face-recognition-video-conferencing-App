package com.jie.controller;


import com.jie.annotation.OptLog;
import com.jie.entity.Role;
import com.jie.service.RoleService;
import com.jie.util.RespBean;
import com.jie.vo.RoleVO;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;
import java.util.concurrent.locks.ReentrantLock;

import static com.jie.constant.OptTypeConst.*;

/**
 * <p>
 *  前端控制器
 * </p>
 *
 * @author zwq
 * @since 2022-01-04
 */
@RestController
@RequestMapping("/role")
@Api(tags = "角色模块")
public class RoleController {
    @Autowired
    private RoleService roleService;

    @ApiOperation(value = "获取全部角色")
    @GetMapping("/roles/list")
    public List<Role> getAllRoles(){
        return roleService.list();
    }

    /**
     * 删除角色
     * @param roleIdList 角色id列表
     * @return
     */
    @OptLog(optType = REMOVE)
    @ApiOperation(value = "删除角色")
    @DeleteMapping("/admin/roles")
    public RespBean<?> deleteRoles(@RequestBody List<Integer> roleIdList) {
        roleService.deleteRoles(roleIdList);
        return RespBean.success();
    }

    @OptLog(optType = UPDATE)
    @ApiOperation(value = "更新角色信息")
    @PostMapping("/updateRole")
    public RespBean updateRole(@RequestBody Role role){
        boolean flag=roleService.updateById(role);
        return flag?RespBean.success("更新成功"):RespBean.error("更新失败");
    }
    /**
     * 保存或更新角色
     *
     * @param roleVO 角色信息
     * @return
     */
    @OptLog(optType = SAVE_OR_UPDATE)
    @ApiOperation(value = "保存或更新角色")
    @PostMapping("/admin/role")
    public RespBean saveOrUpdateRole(@RequestBody @Valid RoleVO roleVO) {
        roleService.saveOrUpdateRole(roleVO);
        return RespBean.success();
    }

}

