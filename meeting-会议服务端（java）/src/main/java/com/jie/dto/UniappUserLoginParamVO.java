package com.jie.dto;

import com.jhlabs.math.SCNoise;
import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.experimental.Accessors;

/**
 * @package: com.jie.dto
 * @className: UniappUserLoginParam
 * @date: 2022/4/4 14:05
 * @version: 1.0
 */
@Data
@ApiModel(value = "UniappUserLoginParamVO对象",description = "")
public class UniappUserLoginParamVO {
    //姓名
    @ApiModelProperty(value = "用户名",required = true)
    private String username;
    //图片地址
    @ApiModelProperty(value = "头像地址",required = true)
    private String image;
    //code码
    @ApiModelProperty(value = "code码",required = true)
    private String code;
}
