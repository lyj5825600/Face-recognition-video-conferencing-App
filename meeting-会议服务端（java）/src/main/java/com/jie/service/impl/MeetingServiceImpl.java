package com.jie.service.impl;

import com.alibaba.fastjson.JSONObject;
import com.baomidou.mybatisplus.core.conditions.query.LambdaQueryWrapper;
import com.baomidou.mybatisplus.extension.api.R;
import com.baomidou.mybatisplus.extension.plugins.pagination.Page;
import com.jie.baiduai.BaiDuAiCheck;
import com.jie.baiduai.BaiDuAiCheckService;
import com.jie.config.DelayLetterRabbitmqConfig;
import com.jie.constant.MeetingConst;
import com.jie.dto.*;
import com.jie.entity.*;
import com.jie.mapper.MeetingMapper;
import com.jie.mapper.ParticipantListMapper;
import com.jie.mapper.ParticipantsPersonMapper;
import com.jie.service.MeetingService;
import com.baomidou.mybatisplus.extension.service.impl.ServiceImpl;
import com.jie.service.SignService;
import com.jie.util.BeanCopyUtils;
import com.jie.util.RespBean;
import com.jie.util.UserUtils;
import com.jie.vo.ConditionVO;
import com.jie.vo.MettingVO;
import com.jie.vo.PageResult;
import com.jie.vo.ParticipantVO;
import lombok.extern.slf4j.Slf4j;
import org.springframework.amqp.AmqpException;
import org.springframework.amqp.core.Message;
import org.springframework.amqp.core.MessagePostProcessor;
import org.springframework.amqp.rabbit.core.RabbitTemplate;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.data.geo.Point;
import org.springframework.data.redis.connection.RedisGeoCommands;
import org.springframework.data.redis.core.RedisTemplate;
import org.springframework.data.redis.core.SetOperations;
import org.springframework.data.redis.core.ValueOperations;
import org.springframework.scheduling.annotation.Async;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.awt.*;
import java.time.Duration;
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
 * ???????????????
 * </p>
 *
 * @author zwq
 * @since 2022-04-04
 */
@Service
@Slf4j
public class MeetingServiceImpl extends ServiceImpl<MeetingMapper, Meeting> implements MeetingService {
    @Value("${anyRTC.trtc.appId}")
    private String appId;
    @Autowired
    private SignService signService;
    @Autowired
    private ParticipantsPersonMapper participantsPersonDao;
    @Autowired
    private ParticipantListMapper participantListMapper;
    @Autowired
    private BaiDuAiCheckService checkService;
    @Autowired
    private RedisTemplate<String, String> redisTemplate;
    @Autowired
    private RabbitTemplate rabbitTemplate;

    /**
     * ??????id??????????????????
     *
     * @param id
     * @return
     */
    @Override
    public Meeting mettingInformation(int id) {
        //??????meeting??????
        Meeting meeting = this.baseMapper.selectOne(new LambdaQueryWrapper<Meeting>().eq(Meeting::getId, id));
        //??????????????????????????????
        List<SignDTO> successfullyPerson = BeanCopyUtils.copyList(signService.list(new LambdaQueryWrapper<Sign>()
                .eq(Sign::getMeetingNumber, meeting.getMeetingNumber())
                .eq(Sign::getMeetingId, meeting.getId())
                .eq(Sign::getSuccessful, 0)), SignDTO.class);
        //????????????????????????????????????
        List<ParticipantsPersonDTO> failedPerson = BeanCopyUtils.copyList(participantsPersonDao.failedPersonList(meeting.getId()), ParticipantsPersonDTO.class);
        meeting.setSuccessfullyPerson(successfullyPerson);
        meeting.setFailedPerson(failedPerson);
        return meeting;
    }

    /**
     * ?????????????????????????????????
     *
     * @param user
     * @return
     */
    @Override
    public RespBean shutDownMetting(UserDetailDTO user) {
        //??????????????????
        if (!redisTemplate.hasKey(MeetingConst.MEETING + user.getMeetingNumber())) {
            return RespBean.error("??????????????????");
        }
        //?????????????????????????????????
        Meeting meeting = JSONObject.parseObject(redisTemplate.opsForValue().get(MeetingConst.MEETING + user.getMeetingNumber()), Meeting.class);
        meeting.setMeetingDelete(1);
        this.baseMapper.updateById(meeting);
        //??????redis
        redisTemplate.delete(MeetingConst.MEETING + user.getMeetingNumber());
        //??????redis??????set??????
        redisTemplate.delete(MeetingConst.FREQUENT + meeting.getMeetingNumber());
        //??????redis?????????????????????
        redisTemplate.delete(MeetingConst.MAPADDRESS + meeting.getMeetingNumber());
        return RespBean.success("??????????????????");
    }

    /**
     * ??????????????????
     *
     * @param mettingVO
     * @return
     */
    @Override
    @Transactional
    public RespBean saveMeeting(MettingVO mettingVO) {
        //Ai??????????????????????????????????????????
        BaiDuAiCheck baiDuAiCheck = checkService.checkText(mettingVO.getMeetingAddress() + mettingVO.getMeetingDescribed());
        if (baiDuAiCheck.getConclusion().equals("?????????")) {
            return RespBean.error("??????????????????????????????");
        }
        //??????????????????
        UserDetailDTO loginUser = UserUtils.getLoginUser();
        ValueOperations<String, String> valueOperations = redisTemplate.opsForValue();
        String redisKey = MeetingConst.MEETING + loginUser.getMeetingNumber();
        Integer userInfoId = UserUtils.getLoginUser().getUserInfoId();
        //???????????????????????????????????????????????? ??????????????????????????? ??????????????????
        if (Boolean.TRUE.equals(redisTemplate.hasKey(redisKey))) {
            return RespBean.error("?????????????????????");
        }
        //??????????????????
        CompletableFuture.supplyAsync(() -> {
            //?????????meeting
            Meeting meeting = Meeting.builder().meetingName(mettingVO.getMeetingName()).meetingStartTime(mettingVO.getMeetingStartTime()).meetingEndTime(mettingVO.getMeetingEndTime()).meetingNumber(loginUser.getMeetingNumber()).meetingType(mettingVO.getMeetingType()).meetingAddress(mettingVO.getMeetingAddress()).meetingLongitude(mettingVO.getMeetingLongitude()).meetingLatitude(mettingVO.getMeetingLatitude()).username(loginUser.getUsername()).nickname(loginUser.getNickname()).meetingDescribed(mettingVO.getMeetingDescribed()).createTime(LocalDateTime.now(ZoneId.of(SHANGHAI.getZone()))).meetingPerson(mettingVO.getPerson().size() + 1).meetingDelete(0).userInfoId(userInfoId).build();
            //????????????
            this.baseMapper.saveMeeting(meeting);
            //reids????????????????????????
            long time = meeting.getMeetingEndTime().toEpochSecond(ZoneOffset.of("+8")) - LocalDateTime.now().toEpochSecond(ZoneOffset.of("+8"));
            valueOperations.set(MeetingConst.MEETING + loginUser.getMeetingNumber(), JSONObject.toJSONString(meeting), time, TimeUnit.SECONDS);
            return meeting;
        }).thenApply(meeting -> {
            //????????????????????????
            Sign sign = Sign.builder().meetingId(meeting.getId()).meetingName(meeting.getMeetingName()).signTime(LocalDateTime.now(ZoneId.of(SHANGHAI.getZone()))).username(loginUser.getUsername()).nickname(loginUser.getNickname()).signUsername(loginUser.getUsername()).signNickname(loginUser.getNickname()).meetingNumber(loginUser.getMeetingNumber()).signWay(3).build();
            addSign(sign);
            return meeting;
        }).thenAccept(meeting -> {
            //mq??????????????????
            meetingWillOver(meeting);
            //redis???????????????????????????????????????
            frequentRedisSet(meeting, meeting.getMeetingEndTime().toEpochSecond(ZoneOffset.of("+8")) - LocalDateTime.now().toEpochSecond(ZoneOffset.of("+8")));
            //????????????????????????????????????redis???
            addPartipanPerson(mettingVO.getPerson(), meeting, loginUser, mettingVO);
        }).exceptionally(e -> {
            e.printStackTrace();
            return null;
        });
        return RespBean.success("????????????");
    }

    //?????????(?????????)
    public void addSign(Sign sign) {
        CompletableFuture.runAsync(() -> {
            signService.save(sign);
        });
    }

    //mq??????????????????
    public void meetingWillOver(Meeting meeting) {
        rabbitTemplate.convertAndSend(DelayLetterRabbitmqConfig.EXCHANGE_NAME, DelayLetterRabbitmqConfig.ROUTE_KEY, meeting, (t) -> {
            //?????????????????? ??????
            //??????????????????-????????????
            Duration duration = Duration.between(LocalDateTime.now(), meeting.getMeetingEndTime());
            //????????????????????????
            t.getMessageProperties().setDelay((int) duration.toMillis());
            log.info(meeting.getMeetingName() + "????????????" + "???????????????" + duration.toMillis() / 1000 + "???");
            return t;
        });
    }

    /**
     * redis???set??????????????????????????????????????????????????????
     */
    public void frequentRedisSet(Meeting meeting, Long time) {
        CompletableFuture.runAsync(() -> {
            redisTemplate.opsForSet().add(MeetingConst.FREQUENT + meeting.getMeetingNumber(), meeting.getNickname());
            //??????redis???geo???????????????
            if (meeting.getMeetingType() == 1) {
                redisTemplate.opsForGeo().add(MeetingConst.MAPADDRESS + meeting.getMeetingNumber(), new RedisGeoCommands.GeoLocation(meeting.getMeetingAddress(), new Point(meeting.getMeetingLongitude(), meeting.getMeetingLatitude())));
                redisTemplate.expire(MeetingConst.MAPADDRESS + meeting.getMeetingNumber(), time, TimeUnit.SECONDS);
            }
            redisTemplate.expire(MeetingConst.FREQUENT + meeting.getMeetingNumber(), time, TimeUnit.SECONDS);

        });
    }

    /**
     * ??????????????????????????????????????????
     *
     * @param meetingNumber
     * @return
     */
    @Override
    public RespBean getMeetingStatus(int meetingNumber) {
        //???????????????????????????????????????
        Meeting meeting = JSONObject.parseObject(redisTemplate.opsForValue().get(MeetingConst.MEETING + meetingNumber), Meeting.class);
        if (Objects.isNull(meeting)) {
            return RespBean.error("???????????????");
        }
        //???????????????????????????????????????????????????
        LocalDateTime dt = LocalDateTime.now();// ?????????????????????
        if (dt.isBefore(meeting.getMeetingStartTime())) {
            return RespBean.error("???????????????");
        }
        if (meeting.getMeetingDelete() == 1) {
            return RespBean.error("???????????????");
        }
        //???????????????????????????redis ?????????????????????
        if (redisTemplate.hasKey(MeetingConst.MEETING + meeting.getMeetingNumber())) {
            return RespBean.success("???????????????", meeting);
        }
        return RespBean.error("????????????");
    }

    /**
     * ???????????????????????????????????????
     *
     * @param username
     * @return
     */
    @Override
    public PageResult<MeetingDTO> getOneSelfMeeting(ConditionVO condition, String username) {
        //??????
        Page<Meeting> page = new Page<>(condition.getCurrent(), condition.getSize());
        Page<Meeting> meetingPage = this.baseMapper.selectPage(page, new LambdaQueryWrapper<Meeting>()
                .eq(Meeting::getUsername, username)
                .eq(Meeting::getMeetingNumber, UserUtils.getLoginUser().getMeetingNumber())
                .orderByDesc(Meeting::getCreateTime)
        );
        List<MeetingDTO> photoList = BeanCopyUtils.copyList(meetingPage.getRecords(), MeetingDTO.class);
        return new PageResult<>(photoList, (int) meetingPage.getTotal());
    }

    /**
     * ?????????????????????????????????
     *
     * @param meetingNumber
     */
    @Override
    public Map<String, Object> joinConference(Integer meetingNumber) {
        Meeting meeting = JSONObject.parseObject(redisTemplate.opsForValue().get(MeetingConst.MEETING + meetingNumber), Meeting.class);
        Map<String, Object> map = new HashMap<>();
        if (meeting != null) {
            map.put("appId", appId);
            //???????????????id
            map.put("originatorUserInfoId", meeting.getUserInfoId());
            //???????????????id
            map.put("participantUserId", UserUtils.getLoginUser().getUserInfoId());
        }
        return map;
    }

    /**
     * ?????????????????????????????????
     *
     * @param condition
     * @return
     */
    @Override
    public PageResult<MeetingDTO> viewAllConferenceInformation(ConditionVO condition) {
        Page<Meeting> page = new Page<>(condition.getCurrent(), condition.getSize());
        Page<Meeting> meetingPage = this.baseMapper.selectPage(page, new LambdaQueryWrapper<Meeting>()
                .like(Meeting::getMeetingNumber, condition.getKeywords())
                .orderByDesc(Meeting::getCreateTime)
        );
        List<MeetingDTO> photoList = BeanCopyUtils.copyList(meetingPage.getRecords(), MeetingDTO.class);
        return new PageResult<>(photoList, (int) meetingPage.getTotal());
    }

    /**
     * ???????????????id????????????
     *
     * @param meetingNumber
     */
    @Override
    public void adminShutDownMetting(Integer meetingNumber) {
        //??????????????????
        if (!redisTemplate.hasKey(MeetingConst.MEETING + meetingNumber)) {
            return;
        }
        //?????????????????????????????????
        Meeting meeting = JSONObject.parseObject(redisTemplate.opsForValue().get(MeetingConst.MEETING + meetingNumber), Meeting.class);
        meeting.setMeetingDelete(1);
        this.baseMapper.updateById(meeting);
        //??????redis
        redisTemplate.delete(MeetingConst.MEETING + meetingNumber);
        //??????redis??????set??????
        redisTemplate.delete(MeetingConst.FREQUENT + meeting.getMeetingNumber());
        //????????????????????????
        if (meeting.getMeetingType() == 1) {
            redisTemplate.delete(MeetingConst.MAPADDRESS + meeting.getMeetingNumber());
        }
    }

    //???????????????????????????
    @Transactional
    public void addPartipanPerson(List<ParticipantVO> participantVO, Meeting meeting, UserDetailDTO loginUser, MettingVO mettingVO) {
        //????????????????????????
        CompletableFuture.runAsync(() -> {
            for (ParticipantVO person : participantVO) {
                //???????????????id???
                ParticipantList participantList = participantListMapper.selectOne(new LambdaQueryWrapper<ParticipantList>().eq(ParticipantList::getId, person.getId()));
                participantsPersonDao.insert(ParticipantsPerson.builder()
                        .meetingId(meeting.getId())
                        .meetingNumber(loginUser.getMeetingNumber())
                        .username(loginUser.getUsername())
                        .nickname(loginUser.getNickname())
                        .meetingNickname(participantList.getNickname())
                        .facePhotos(participantList.getFacePhotos())
                        .meetingStartTime(mettingVO.getMeetingStartTime())
                        .createTime(LocalDateTime.now(ZoneId.of(SHANGHAI.getZone())))
                        .meetingDelete(0)
                        .build());
            }
            log.info(meeting.getNickname() + "???????????????????????????");
        });
    }
}
