package com.jie.service;

import com.jie.dto.MeetingDTO;
import com.jie.dto.UserDetailDTO;
import com.jie.entity.Meeting;
import com.baomidou.mybatisplus.extension.service.IService;
import com.jie.util.RespBean;
import com.jie.vo.ConditionVO;
import com.jie.vo.MettingVO;
import com.jie.vo.PageResult;

import java.util.List;
import java.util.Map;


/**
 * <p>
 *  服务类
 * </p>
 *
 * @author zwq
 * @since 2022-04-04
 */
public interface MeetingService extends IService<Meeting> {

    /**
     * 根据id查看会议信息
     * @param id
     * @return
     */
    Meeting mettingInformation(int id);

    /**
     * 删除redis
     * @param meetingNumber
     * @return
     */
    RespBean shutDownMetting(UserDetailDTO meetingNumber);

    /**
     * 用户创建会议
     * @param mettingVO
     * @return
     */
    RespBean saveMeeting(MettingVO mettingVO);

    /**
     * 根据会议号查看会议状态
     * @param meetingNumber
     * @return
     */
    RespBean getMeetingStatus(int meetingNumber);

    /**
     * 用户查看自己创建的会议记录
     * @param name
     * @return
     */
    PageResult<MeetingDTO> getOneSelfMeeting(ConditionVO condition, String name);

    /**
     * 返回会议视频需要的数据
     * @param meetingNumber
     */
    Map<String,Object> joinConference(Integer meetingNumber);

    /**
     * 管理员查看全部会议信息
     * @param condition
     * @return
     */
    PageResult<MeetingDTO> viewAllConferenceInformation(ConditionVO condition);

    /**
     * 管理员根据meetingNumber关闭会议
     * @param meetingNumber
     */
    void adminShutDownMetting(Integer meetingNumber);
}
