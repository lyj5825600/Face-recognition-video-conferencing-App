package com.jie.mapper;

import com.baomidou.mybatisplus.core.mapper.BaseMapper;
import com.jie.entity.ParticipantsPerson;
import org.apache.ibatis.annotations.Mapper;

import java.util.List;

/**
 * <p>
 *  Mapper 接口
 * </p>
 *
 * @author zwq
 * @since 2022-04-04
 */
@Mapper
public interface ParticipantsPersonMapper extends BaseMapper<ParticipantsPerson> {

    //
    ParticipantsPerson isNickname(int meetingNumber, String nickname);
    //获取未签到人员
    List<ParticipantsPerson> failedPersonList(Integer meetingId);
}
