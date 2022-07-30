package com.jie.service;

import com.jie.dto.UserConferenceDTO;
import com.jie.entity.Meeting;
import com.jie.entity.Sign;
import com.baomidou.mybatisplus.extension.service.IService;
import com.jie.util.RespBean;
import com.jie.vo.ConditionVO;
import com.jie.vo.PageResult;
import com.jie.vo.SignVO;

import java.security.Principal;
import java.util.List;

/**
 * <p>
 *  服务类
 * </p>
 *
 * @author zwq
 * @since 2022-04-04
 */
public interface SignService extends IService<Sign> {
    /**
     * 获取历史会议
     * @param username
     * @return
     */
    PageResult<UserConferenceDTO> getUserConference(ConditionVO condition,String username);


    /**
     * 人脸签到
     * @param signVO
     * @return
     */
    RespBean faceRecognition(SignVO signVO, String username);

    /**
     * 调用远程RPC深度学习模型进行活体检测接口
     * @return
     */
    boolean livingTests();

    void addlivingFaceImage(String ImgBase64,String username);
}
