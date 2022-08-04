package com.jie.service;

import com.baomidou.mybatisplus.extension.service.IService;
import com.jie.dto.ParticipantListDTO;
import com.jie.entity.ParticipantList;
import com.jie.vo.ParticipantListVO;


import java.security.Principal;
import java.util.List;

/**
 * <p>
 *  服务类
 * </p>
 *
 * @author zwq
 * @since 2022-04-05
 */
public interface ParticipantListService extends IService<ParticipantList> {

    /**
     * 根据当前用户返回已添加的参会人列表
     * @param username
     * @return
     */
    List<ParticipantListDTO> getParticipantsPersonList(String username);

    /**
     * 添加参会人信息
     * @param participantListVO
     */
    void saveParticipantPerson( ParticipantListVO participantListVO);

    /**
     * 删照片文件
     * @param id
     */
    void removeParticipantsPersonList(List<Integer> id);
}
