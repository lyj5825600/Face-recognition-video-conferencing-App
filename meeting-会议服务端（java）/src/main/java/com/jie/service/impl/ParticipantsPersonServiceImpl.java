package com.jie.service.impl;

import com.baomidou.mybatisplus.core.conditions.query.LambdaQueryWrapper;
import com.baomidou.mybatisplus.core.conditions.query.QueryWrapper;
import com.jie.dto.UserConferenceDTO;
import com.jie.entity.ParticipantsPerson;
import com.jie.mapper.ParticipantsPersonMapper;
import com.jie.service.ParticipantsPersonService;
import com.baomidou.mybatisplus.extension.service.impl.ServiceImpl;
import com.jie.util.BeanCopyUtils;

import org.springframework.stereotype.Service;

import java.util.List;

/**
 * <p>
 *  服务实现类
 * </p>
 *
 * @author zwq
 * @since 2022-04-04
 */
@Service
public class ParticipantsPersonServiceImpl extends ServiceImpl<ParticipantsPersonMapper, ParticipantsPerson> implements ParticipantsPersonService {


}
