package com.jie.controller;


import com.baidu.aip.face.AipFace;

import com.jie.dto.LabelOptionDTO;
import com.jie.service.ResourceService;
import com.jie.util.RespBean;
import com.jie.vo.ConditionVO;
import com.jie.vo.ResourceVO;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import org.json.JSONObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.HashMap;
import java.util.List;

/**
 * <p>
 *  前端控制器
 * </p>
 *
 * @author zwq
 * @since 2022-01-04
 */
@RestController
@Api(tags = "资源模块")
@RequestMapping("/resource")
public class ResourceController {
    @Autowired
    private ResourceService resourceService;
    /**
     * 查看资源列表
     * @return  资源列表
     */
    @ApiOperation(value = "查看接口资源列表")
    @GetMapping("/admin/resources")
    public RespBean<?> listResources(ConditionVO conditionVO) {
        return RespBean.success("resources",resourceService.listResources(conditionVO));
    }


    /**
     * 查看角色资源选项
     *
     * @return  角色资源选项
     */
    @ApiOperation(value = "查看角色资源选项")
    @GetMapping("/admin/role/resources")
    public RespBean<List<LabelOptionDTO>> listResourceOption() {
        return RespBean.success("resources",resourceService.listResourceOption());
    }
    /**
     * 删除资源
     * @param resourceId 资源id
     */
    @ApiOperation(value = "删除资源")
    @DeleteMapping("/admin/deleteResource/{resourceId}")
    public RespBean<?> deleteResource(@PathVariable("resourceId") Integer resourceId) {
        resourceService.deleteResource(resourceId);
        return RespBean.success();
    }

    /**
     * 新增或修改资源
     * @param resourceVO 资源信息
     */
    @ApiOperation(value = "新增或修改资源")
    @PostMapping("/admin/saveOrUpdateResource")
    public RespBean<?> saveOrUpdateResource(@RequestBody @Valid ResourceVO resourceVO) {
        resourceService.saveOrUpdateResource(resourceVO);
        return RespBean.success();
    }
}

