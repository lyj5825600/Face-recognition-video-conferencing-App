package com.jie.service.impl;

import com.alibaba.fastjson.JSON;
import com.alibaba.fastjson.JSONObject;
import com.baomidou.mybatisplus.core.conditions.query.LambdaQueryWrapper;
import com.baomidou.mybatisplus.extension.service.impl.ServiceImpl;
import com.jie.constant.CommonConst;
import com.jie.dto.ParticipantListDTO;
import com.jie.entity.ParticipantList;
import com.jie.entity.ParticipantsPerson;
import com.jie.mapper.ParticipantListMapper;
import com.jie.service.ParticipantListService;
import com.jie.strategy.context.UploadStrategyContext;
import com.jie.util.BASE64DecodedMultipartFile;
import com.jie.util.BeanCopyUtils;
import com.jie.util.HttpUtil;
import com.jie.util.UserUtils;
import com.jie.vo.FacenetVO;
import com.jie.vo.ParticipantListVO;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.boot.system.ApplicationHome;
import org.springframework.data.redis.core.HashOperations;
import org.springframework.data.redis.core.RedisTemplate;
import org.springframework.scheduling.annotation.Async;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;
import org.springframework.web.multipart.MultipartFile;

import java.io.File;
import java.io.IOException;
import java.security.Principal;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.concurrent.CompletableFuture;

/**
 * <p>
 *  服务实现类
 * </p>
 *
 * @author zwq
 * @since 2022-04-05
 */
@Service
@Slf4j
public class ParticipantListServiceImpl extends ServiceImpl<ParticipantListMapper, ParticipantList> implements ParticipantListService {
    @Autowired
    private UploadStrategyContext uploadStrategyContext;
    @Autowired
    private RestTemplate restTemplate;
    @Value("${faceRecognition.pytorch}")
    private String faceRecognition;
    /**
     * 根据当前用户返回已添加的参会人列表
     * @param username
     * @return
     */
    @Override
    public List<ParticipantListDTO> getParticipantsPersonList(String username) {
        List<ParticipantList> participantLists = this.baseMapper.selectList(new LambdaQueryWrapper<ParticipantList>()
                .eq(ParticipantList::getUsername, username));
        List<ParticipantListDTO> person = BeanCopyUtils.copyList(participantLists, ParticipantListDTO.class);
        return person;
    }

    /**
     * 添加参会人信息
     * @param participantListVO
     */
    @Override
    public void saveParticipantPerson(ParticipantListVO participantListVO) {
        //进行图片上传
        String username = UserUtils.getLoginUser().getUsername();
        String facePhotos = uploadStrategyContext.executeUploadStrategy(BASE64DecodedMultipartFile.base64ToMultipart(participantListVO.getFacePhotos()),username+"/"+participantListVO.getNickname());
        ParticipantList participant = ParticipantList.builder()
                .username(username)
                .nickname(participantListVO.getNickname())
                .facePhotos(facePhotos)
                .sex(participantListVO.getSex())
                .phone(participantListVO.getPhone())
                .build();
        //进行异步往深度学习进行图片填充
//        addFacenet(username,participantListVO.getFacePhotos(),participantListVO.getNickname());
        addFacenetImage(username,participantListVO.getFacePhotos(),participantListVO.getNickname());
        this.baseMapper.insert(participant);
        imagesFabric();
    }

    @Override
    public void removeParticipantsPersonList(List<Integer> id) {
        for (Integer integer : id) {
            ParticipantList participantList = this.getById(integer);
            com.alibaba.fastjson.JSONObject json = new com.alibaba.fastjson.JSONObject();
            json.put("username", UserUtils.getLoginUser().getUsername());
            json.put("nickname", participantList.getNickname());
            HttpUtil.sendPost(json, faceRecognition+CommonConst.DELETEFACENETIMAGE);
        }
    }

    //python进行异步往深度学习进行图片填充
    public void addFacenetImage(String username,String images,String nickname){
        //
        CompletableFuture.runAsync(() -> {
            com.alibaba.fastjson.JSONObject json = new com.alibaba.fastjson.JSONObject();
            json.put("imgbase64", images.substring(22, images.length()));
            json.put("username", username);
            json.put("nickname", nickname);
            String name = JSONObject.parseObject(HttpUtil.sendPost(json, faceRecognition+CommonConst.ADDFACENETIMAGE), FacenetVO.class).getName();
            log.info("图片" + name);
        });
    }
    /**
     * 远程RPC调用刷新接口
     */
    public void imagesFabric(){
        //你自己的逻辑代码，通过restTemplate.exchange调用外部接口;
        CompletableFuture.runAsync(() -> {
            restTemplate.getForObject(faceRecognition+CommonConst.FACEIMGAEREFRESH,String.class);
        });
    }
}
