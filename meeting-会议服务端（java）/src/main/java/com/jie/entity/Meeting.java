package com.jie.entity;

import com.baomidou.mybatisplus.annotation.IdType;
import com.baomidou.mybatisplus.annotation.TableField;
import com.baomidou.mybatisplus.annotation.TableId;
import com.jie.dto.ParticipantsPersonDTO;
import com.jie.dto.SignDTO;
import io.swagger.annotations.ApiModelProperty;
import lombok.*;
import org.w3c.dom.stylesheets.LinkStyle;

import java.io.Serializable;
import java.time.LocalDateTime;
import java.util.Date;
import java.util.List;

/**
 * <p>
 * 会议参与表
 * </p>
 *
 * @author zwq
 * @since 2022-04-04
 */
@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
@EqualsAndHashCode(callSuper = false)
public class Meeting implements Serializable {

    private static final long serialVersionUID = 1L;

    /**
     * id
     */
    @TableId(value = "id", type = IdType.AUTO)
    private Integer id;

    /**
     * 会议名
     */
    private String meetingName;

    /**
     * 会议开始时间
     */
    private LocalDateTime meetingStartTime;
    /**
     * 会议结束时间
     */
    private LocalDateTime meetingEndTime;

    /**
     * 会议发布人名称
     */
    private String nickname;

    /**
     * 会议号
     */
    private Integer meetingNumber;

    /**
     * 会议类型 0是线上会议 1是线下会议
     */
    private Integer meetingType;
    /**
     * 会议地址
     */
    private String meetingAddress;
    /**
     会议地址经度
     */
    private Double meetingLongitude;
    /*
    *会议地址纬度
    */
    private Double meetingLatitude;
    /**
     * 会议发布人账户
     */
    private String username;
    /**
     * 会议人数
     */
    private int meetingPerson;
    /**
     * 会议描述信息
     */
    private String meetingDescribed;
    /**
     * 创建时间
     */
    private LocalDateTime createTime;
    /**
     * 更新时间
     */
    private LocalDateTime updateTime;
    /**
     * 是否关闭
     */
    private Integer meetingDelete;
    //会议签到成功人员
    @TableField(exist = false)
    private List<SignDTO> successfullyPerson;
    //会议未签到人员
    @TableField(exist = false)
    private List<ParticipantsPersonDTO> failedPerson;
    //会议发起人infoId
    @TableField(exist = false)
    private Integer userInfoId;
}
