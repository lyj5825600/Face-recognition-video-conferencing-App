package com.jie.vo;

import com.fasterxml.jackson.annotation.JsonFormat;
import com.jie.entity.ParticipantList;
import com.jie.entity.ParticipantsPerson;
import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.format.annotation.DateTimeFormat;

import java.time.LocalDateTime;
import java.util.List;

/**
 * @package: com.jie.vo
 * @className: MettingVO
 * @date: 2022/4/6 9:20
 * @version: 1.0
 */
@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
@ApiModel(description = "创建会议需要的信息")
public class MettingVO {
     //会议标题
     @ApiModelProperty(name = "meetingName", value = "会议标题", dataType = "String",required = true)
     private String meetingName;
    //开始时间
    @ApiModelProperty(name = "meetingStartTime", value = "会议开始时间", dataType = "LocalDateTime",required = true)
    @JsonFormat(shape=JsonFormat.Shape.STRING, pattern = "yyyy-MM-dd HH:mm:ss")
    private LocalDateTime meetingStartTime;
    //开始时间
    @ApiModelProperty(name = "meetingEndTime", value = "会议结束时间", dataType = "LocalDateTime",required = true)
    @JsonFormat(shape=JsonFormat.Shape.STRING, pattern = "yyyy-MM-dd HH:mm:ss")
    private LocalDateTime meetingEndTime ;
    //会议类型 0是线上会议 1是线下会议
    @ApiModelProperty(name = "meetingType", value = "会议类型(0是线上 1是线下)", dataType = "Integer",required = true)
    private Integer meetingType;
    //会议内容
    @ApiModelProperty(name = "meetingDescribed", value = "会议内容", dataType = "String",required = true)
    private String meetingDescribed;
    //会议地址
    @ApiModelProperty(name = "meetingAddress", value = "会议地址", dataType = "String",required = true)
    private String meetingAddress;
    //会议地址经度
    @ApiModelProperty(name = "meetingLongitude", value = "会议地址经度", dataType = "Double",required = true)
    private Double meetingLongitude;
    //会议地址纬度
    @ApiModelProperty(name = "meetingLatitude", value = "会议地址纬度", dataType = "Double",required = true)
    private Double meetingLatitude;
    //参会人员
    @ApiModelProperty(name = "person", value = "参会人员列表", dataType = "List<ParticipantList>",required = true)
    private List<ParticipantVO> person;
}
