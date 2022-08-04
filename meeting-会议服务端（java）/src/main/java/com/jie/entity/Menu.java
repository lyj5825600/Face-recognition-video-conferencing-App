package com.jie.entity;

import com.baomidou.mybatisplus.annotation.IdType;
import com.baomidou.mybatisplus.annotation.TableField;
import com.baomidou.mybatisplus.annotation.TableId;
import lombok.Data;
import lombok.EqualsAndHashCode;

import java.io.Serializable;
import java.util.Date;
import java.util.List;

/**
 * <p>
 *
 * </p>
 *
 * @author zwq
 * @since 2022-01-04
 */
@Data
@EqualsAndHashCode(callSuper = false)
public class Menu implements Serializable {

    private static final long serialVersionUID = 1L;

    /**
     * 主键
     */
    @TableId(value = "id", type = IdType.AUTO)
    private Integer id;

    /**
     * 菜单名
     */
    private String name;

    /**
     * 菜单路径
     */
    private String path;

    /**
     * 组件
     */
    private String component;

    /**
     * 菜单icon
     */
    private String icon;

    /**
     * 创建时间
     */
    private Date createTime;

    /**
     * 更新时间
     */
    private Date updateTime;

    /**
     * 排序
     */
    private Boolean orderNum;
    /**
     * 是否需要权限
     */
    private int requireAuth;

    /**
     * 父id
     */
    private Integer parentId;

    /**
     * 是否隐藏  0否1是
     */
    private Boolean isHidden;

    /**
     * 子菜单
     */
    @TableField(exist = false)
    private List<Menu> children;
    /**
     * 角色列表
     */
    @TableField(exist = false)
    private List<Role> roles;


}
