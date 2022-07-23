package com.jie.service.impl;

import com.alibaba.fastjson.JSON;
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
import com.jie.util.UserUtils;
import com.jie.vo.ParticipantListVO;
import org.json.JSONObject;
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
        addFacenet(username,participantListVO.getFacePhotos(),participantListVO.getNickname());
        //异步进行加载
        imagesFabric();
        this.baseMapper.insert(participant);
    }

    @Override
    public void removeParticipantsPersonList(List<Integer> id) {
        for (Integer integer : id) {
            ParticipantList participantList = this.getById(integer);
            File file = new File(faceRecognition+"\\"+UserUtils.getLoginUser().getUsername()+"\\"+participantList.getNickname()+".jpeg");
            file.delete();
        }
    }

    //进行异步往深度学习进行图片填充
    public void addFacenet(String username,String images,String nickname){
        //base64转格式
        CompletableFuture.runAsync(() -> {
        MultipartFile file = BASE64DecodedMultipartFile.base64ToMultipart(images);
        try {
            // 获取文件名
            String fileName = file.getOriginalFilename();
            // 获取文件的后缀名
            String suffixName = fileName.substring(fileName.lastIndexOf("."));
            //文件绝对路径,项目中一般使用相对类路径,即使文件变更路径也会跟着变
            String filePath =faceRecognition+"\\"+username+"\\";
            //构造一个路径
            String path = filePath+nickname+suffixName;
            File dest = new File(path);
            // 检测是否存在目录
            if (!dest.getParentFile().exists()) {
                dest.getParentFile().mkdirs();// 新建文件夹
            }
            file.transferTo(dest);// 文件写入
        } catch (IllegalStateException e) {
            e.printStackTrace();
        } catch (IOException e) {
            e.printStackTrace();
        }
        });
    }

    /**
     * 远程RPC调用刷新接口
     */
    public void imagesFabric(){
            //你自己的逻辑代码，通过restTemplate.exchange调用外部接口;
            restTemplate.getForObject(CommonConst.FACEIMGAEREFRESH,String.class);
    }
}
