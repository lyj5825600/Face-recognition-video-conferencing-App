package com.jie.service.impl;

import com.alibaba.fastjson.JSON;
import com.jie.util.*;
import com.jie.vo.*;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.data.redis.connection.RedisGeoCommands.GeoLocation;
import com.alibaba.fastjson.JSONObject;
import com.baomidou.mybatisplus.core.conditions.query.LambdaQueryWrapper;
import com.baomidou.mybatisplus.core.toolkit.StringUtils;
import com.baomidou.mybatisplus.extension.plugins.pagination.Page;
import com.jie.constant.CommonConst;
import com.jie.constant.MeetingConst;
import com.jie.dto.MeetingDTO;
import com.jie.dto.UserConferenceDTO;
import com.jie.entity.Meeting;
import com.jie.entity.ParticipantsPerson;
import com.jie.entity.Sign;
import com.jie.mapper.MeetingMapper;
import com.jie.mapper.ParticipantsPersonMapper;
import com.jie.mapper.SignMapper;
import com.jie.service.MeetingService;
import com.jie.service.SignService;
import com.baomidou.mybatisplus.extension.service.impl.ServiceImpl;
import io.swagger.annotations.ApiOperation;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.geo.Distance;
import org.springframework.data.geo.Metrics;
import org.springframework.data.geo.Point;
import org.springframework.data.redis.connection.RedisGeoCommands;
import org.springframework.data.redis.core.RedisTemplate;
import org.springframework.data.redis.core.ValueOperations;
import org.springframework.scheduling.annotation.Async;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.client.RestTemplate;

import java.security.Principal;
import java.time.LocalDateTime;
import java.time.ZoneId;
import java.time.ZoneOffset;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Objects;
import java.util.concurrent.CompletableFuture;
import java.util.concurrent.TimeUnit;

import static com.jie.enums.ZoneEnum.SHANGHAI;

/**
 * <p>
 * 服务实现类
 * </p>
 *
 * @author zwq
 * @since 2022-04-04
 */
@Service
@Slf4j
public class SignServiceImpl extends ServiceImpl<SignMapper, Sign> implements SignService {

    @Autowired
    private RedisTemplate<String, String> redisTemplate;
    @Autowired
    private ParticipantsPersonMapper participantsPersonMapper;
    @Value("${faceRecognition.pytorch}")
    private String faceRecognition;
    /**
     * 会议号 会议名 会议发起人 会议开始时间
     * 根据账号获取分页用户历史会议信息
     *
     * @param username
     * @return
     */
    @Override
    public PageResult<UserConferenceDTO> getUserConference(ConditionVO condition, String username) {
        Page<Sign> page = new Page<>(condition.getCurrent(), condition.getSize());
        //会议号 会议名 会议开始时间 会议发起人
        Page<Sign> signPage = this.baseMapper.selectPage(page, new LambdaQueryWrapper<Sign>()
                .eq(Sign::getSignUsername, username)
                .eq(Sign::getIsDelete, 0)
                .like(Sign::getMeetingName, condition.getKeywords())
                .orderByDesc(Sign::getSignTime)
        );
        List<UserConferenceDTO> photoList = BeanCopyUtils.copyList(signPage.getRecords(), UserConferenceDTO.class);
        return new PageResult<>(photoList, (int) signPage.getTotal());
    }

    /**
     *
     * 签到接口对接
     *
     * @param signVO
     * @return
     */
    @Override
    public RespBean faceRecognition(SignVO signVO, String username) {
        //人脸签到并返回nickname
        String nickname = "";
        int signWay = 0;
        if (signVO.getNickname().equals("")) {
            //脸签到功能(如果相似度达到80%)则返回nickname 通过rpc调用远程人脸识别接口
            nickname = faceSign(signVO);
        } else {
            nickname = manualSign(signVO);
            signWay = 1;
        }
        if (Objects.isNull(nickname)) {
            log.info("签到失败");
            return RespBean.error("签到失败 用户不存在");
        }

        if (isUserIsNextToTheMeetingPlace(signVO, username)) {
            return RespBean.error("签到失败，用户不在线下会议地点附近");
        }
        //进行判断用户可用性
        if (!isSign(nickname, signVO.getMeetingNumber(), signWay, username)) {
            return RespBean.success("已签到,请不要重复签到", nickname);
        }
        return RespBean.success("签到成功", nickname);
    }

    /**
     * 调用远程RPC深度学习模型进行活体检测接口
     * @return
     */
    @Override
    public boolean livingTests() {
        //远程调用调用远程RPC深度学习模型进行活体检测接口
        JSONObject json = new JSONObject();
        json.put("username", UserUtils.getLoginUser().getUsername());
        if (JSONObject.parseObject(HttpUtil.sendPost(json, faceRecognition+CommonConst.LIVINGFACETEST), LivingVO.class).getCode().equals("签到成功")){
            return true;
        }
        return false;
    }

    /**
     * 活体识别图片添加
     * @param
     */
    @Override
    public void addlivingFaceImage(String imgBase64,String username) {
        // 人脸识别返回用户nickname
        CompletableFuture.runAsync(() -> {
            com.alibaba.fastjson.JSONObject json = new com.alibaba.fastjson.JSONObject();
            json.put("imgbase64", imgBase64.substring(22, imgBase64.length()));
            json.put("username", username);
            String name = JSONObject.parseObject(HttpUtil.sendPost(json, faceRecognition+CommonConst.ADDLIVINGFACEIMAGE), FacenetVO.class).getName();
            log.info("图片" + name);
        });

    }

    //判断线下会议的用户是否在会议地址附近，若在则可进行签到
    private boolean isUserIsNextToTheMeetingPlace(SignVO signVO, String username) {
        //先判断是线上会议还是线下
        if (!signVO.isIsSign()) {
            return false;
        }
        //将当前用户地点加入geo中
        redisTemplate.opsForGeo().add(MeetingConst.MAPADDRESS + signVO.getMeetingNumber(), new GeoLocation(username, new Point(signVO.getUserLongitude(), signVO.getUserLatitude())));
        //判断用户是否在内会议地点1000米内
        Distance userAddress = redisTemplate.opsForGeo().distance(MeetingConst.MAPADDRESS + signVO.getMeetingNumber(), signVO.getMeetingAddress(), username, Metrics.NEUTRAL);
//        log.info("当前用户是：" + username + "距离会议地点" + Objects.requireNonNull(userAddress).getValue() + "米" + userAddress.getMetric());
        if (userAddress.getValue() > 1000) {
            return true;
        }
        return false;
    }

    public boolean isSign(String nickname,Integer meetingNumber,Integer signWay,String username){
        //根据当前用户的会议号从redis中查找最新会议信息
        Meeting meeting = JSONObject.parseObject(redisTemplate.opsForValue().get(MeetingConst.MEETING + meetingNumber), Meeting.class);
        //参会人签到key
        String redisKey=MeetingConst.FREQUENT +meeting.getMeetingNumber();
        //判断是否签到
        if (redisTemplate.opsForSet().isMember(redisKey,nickname)){
            return false;
        }
        redisTemplate.opsForSet().add(redisKey,nickname);
        addSign(meeting,nickname,signWay,username);
        return true;
    }

    /**
     * 人脸签到功能(如果相似度达到80%)则返回nickname 通过rpc调用远程本地深度学习人脸识别接口
     *
     * @param sign
     * @return
     */
    private String faceSign(SignVO sign) {
        // 人脸识别返回用户nickname
        JSONObject json = new JSONObject();
        json.put("img_addres", sign.getFaceImage().substring(22, sign.getFaceImage().length()));
        sign.setNickname(JSONObject.parseObject(HttpUtil.sendPost(json, faceRecognition+CommonConst.FACENETURL), FacenetVO.class).getName());
        //根据会议号获取最新会议信息然后判断是否有此号人物
        if (isNickname(sign)) {
            return sign.getNickname();
        }
        return null;
    }

    //异步添加数据
    @Transactional
    public void addSign(Meeting meeting, String signNickname, int signWay, String username) {
        CompletableFuture.runAsync(() -> {
            Sign sign = Sign.builder().meetingId(meeting.getId())
                    .meetingName(meeting.getMeetingName())
                    .meetingNumber(meeting.getMeetingNumber())
                    .nickname(meeting.getNickname())
                    .signTime(LocalDateTime.now(ZoneId.of(SHANGHAI.getZone())))
                    .username(meeting.getUsername())
                    .signUsername(username)
                    .signNickname(signNickname)
                    .signWay(signWay)
                    .build();
            this.baseMapper.insert(sign);
        });
    }

    /**
     * 手动输入姓名进行签到
     *
     * @param sign
     * @return
     */
    private String manualSign(SignVO sign) {
        //根据会议号获取最新会议信息然后判断是否有此号人物
        if (isNickname(sign)) {
            return sign.getNickname();
        }
        //失败
        return null;
    }

    //根据会议号判断是否有这号人
    public boolean isNickname(SignVO sign) {
        ParticipantsPerson participantsPerson = participantsPersonMapper.isNickname(sign.getMeetingNumber(), sign.getNickname());
        if (participantsPerson != null && !participantsPerson.equals("")) {
            return true;
        }
        return false;

    }

}
