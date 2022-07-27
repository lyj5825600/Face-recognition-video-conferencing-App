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
 * 服务实现类
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
     * 根据id查看会议信息
     *
     * @param id
     * @return
     */
    @Override
    public Meeting mettingInformation(int id) {
        //获取meeting信息
        Meeting meeting = this.baseMapper.selectOne(new LambdaQueryWrapper<Meeting>().eq(Meeting::getId, id));
        //获取当前会议签到用户
        List<SignDTO> successfullyPerson = BeanCopyUtils.copyList(signService.list(new LambdaQueryWrapper<Sign>()
                .eq(Sign::getMeetingNumber, meeting.getMeetingNumber())
                .eq(Sign::getMeetingId, meeting.getId())
                .eq(Sign::getSuccessful, 0)), SignDTO.class);
        //获取当前会议的未签到用户
        List<ParticipantsPersonDTO> failedPerson = BeanCopyUtils.copyList(participantsPersonDao.failedPersonList(meeting.getId()), ParticipantsPersonDTO.class);
        meeting.setSuccessfullyPerson(successfullyPerson);
        meeting.setFailedPerson(failedPerson);
        return meeting;
    }

    /**
     * 最新的会议信息手动关闭
     *
     * @param user
     * @return
     */
    @Override
    public RespBean shutDownMetting(UserDetailDTO user) {
        //获取最新会议
        if (!redisTemplate.hasKey(MeetingConst.MEETING + user.getMeetingNumber())) {
            return RespBean.error("会议早已关闭");
        }
        //修改当前最新会议的状态
        Meeting meeting = JSONObject.parseObject(redisTemplate.opsForValue().get(MeetingConst.MEETING + user.getMeetingNumber()), Meeting.class);
        meeting.setMeetingDelete(1);
        this.baseMapper.updateById(meeting);
        //删除redis
        redisTemplate.delete(MeetingConst.MEETING + user.getMeetingNumber());
        //删除redis签到set信息
        redisTemplate.delete(MeetingConst.FREQUENT + meeting.getMeetingNumber());
        //删除redis的签到位置信息
        redisTemplate.delete(MeetingConst.MAPADDRESS + meeting.getMeetingNumber());
        return RespBean.success("会议关闭成功");
    }

    /**
     * 用户创建会议
     *
     * @param mettingVO
     * @return
     */
    @Override
    @Transactional
    public RespBean saveMeeting(MettingVO mettingVO) {
        //ai进行审核会议信息是否通过
        BaiDuAiCheck baiDuAiCheck = checkService.checkText(mettingVO.getMeetingAddress() + mettingVO.getMeetingDescribed());
        if (baiDuAiCheck.getConclusion().equals("不合规")) {
            return RespBean.error("内容不合规审核不通过");
        }
        //获取当前用户
        UserDetailDTO loginUser = UserUtils.getLoginUser();
        ValueOperations<String, String> valueOperations = redisTemplate.opsForValue();
        String redisKey = MeetingConst.MEETING + loginUser.getMeetingNumber();
        Integer userInfoId = UserUtils.getLoginUser().getUserInfoId();
        //判断这个时间段会议是否已经开启了 开启就不能在开始了 除非关闭会议
        if (Boolean.TRUE.equals(redisTemplate.hasKey(redisKey))) {
            return RespBean.error("请关闭上个会议");
        }
        //创建到会议表
        CompletableFuture.supplyAsync(() -> {
            //初始化meeting
            Meeting meeting = Meeting.builder().meetingName(mettingVO.getMeetingName()).meetingStartTime(mettingVO.getMeetingStartTime()).meetingEndTime(mettingVO.getMeetingEndTime()).meetingNumber(loginUser.getMeetingNumber()).meetingType(mettingVO.getMeetingType()).meetingAddress(mettingVO.getMeetingAddress()).meetingLongitude(mettingVO.getMeetingLongitude()).meetingLatitude(mettingVO.getMeetingLatitude()).username(loginUser.getUsername()).nickname(loginUser.getNickname()).meetingDescribed(mettingVO.getMeetingDescribed()).createTime(LocalDateTime.now(ZoneId.of(SHANGHAI.getZone()))).meetingPerson(mettingVO.getPerson().size() + 1).meetingDelete(0).userInfoId(userInfoId).build();
            //会议主键
            this.baseMapper.saveMeeting(meeting);
            //reids进行缓存会议信息
            long time = meeting.getMeetingEndTime().toEpochSecond(ZoneOffset.of("+8")) - LocalDateTime.now().toEpochSecond(ZoneOffset.of("+8"));
            valueOperations.set(MeetingConst.MEETING + loginUser.getMeetingNumber(), JSONObject.toJSONString(meeting), time, TimeUnit.SECONDS);
            return meeting;
        }).thenApply(meeting -> {
            //初始化签到表信息
            Sign sign = Sign.builder().meetingId(meeting.getId()).meetingName(meeting.getMeetingName()).signTime(LocalDateTime.now(ZoneId.of(SHANGHAI.getZone()))).username(loginUser.getUsername()).nickname(loginUser.getNickname()).signUsername(loginUser.getUsername()).signNickname(loginUser.getNickname()).meetingNumber(loginUser.getMeetingNumber()).signWay(3).build();
            addSign(sign);
            return meeting;
        }).thenAccept(meeting -> {
            //mq创建延时队列
            meetingWillOver(meeting);
            //redis创建会议签到信息来进行判断
            frequentRedisSet(meeting, meeting.getMeetingEndTime().toEpochSecond(ZoneOffset.of("+8")) - LocalDateTime.now().toEpochSecond(ZoneOffset.of("+8")));
            //异步添加会议参与人并加入redis中
            addPartipanPerson(mettingVO.getPerson(), meeting, loginUser, mettingVO);
        }).exceptionally(e -> {
            e.printStackTrace();
            return null;
        });
        return RespBean.success("创建成功");
    }

    //签到表(发起人)
    public void addSign(Sign sign) {
        CompletableFuture.runAsync(() -> {
            signService.save(sign);
        });
    }

    //mq实现延迟队列
    public void meetingWillOver(Meeting meeting) {
        rabbitTemplate.convertAndSend(DelayLetterRabbitmqConfig.EXCHANGE_NAME, DelayLetterRabbitmqConfig.ROUTE_KEY, meeting, (t) -> {
            //设置延迟时间 毫秒
            //会议结束时间-当前时间
            Duration duration = Duration.between(LocalDateTime.now(), meeting.getMeetingEndTime());
            //设置消息过期时间
            t.getMessageProperties().setDelay((int) duration.toMillis());
            log.info(meeting.getMeetingName() + "成功投递" + "到期时间为" + duration.toMillis() / 1000 + "秒");
            return t;
        });
    }

    /**
     * redis用set来实现会议签到功能与地址识别签到功能
     */
    public void frequentRedisSet(Meeting meeting, Long time) {
        CompletableFuture.runAsync(() -> {
            redisTemplate.opsForSet().add(MeetingConst.FREQUENT + meeting.getMeetingNumber(), meeting.getNickname());
            //进行redis的geo类型的填充
            if (meeting.getMeetingType() == 1) {
                redisTemplate.opsForGeo().add(MeetingConst.MAPADDRESS + meeting.getMeetingNumber(), new RedisGeoCommands.GeoLocation(meeting.getMeetingAddress(), new Point(meeting.getMeetingLongitude(), meeting.getMeetingLatitude())));
                redisTemplate.expire(MeetingConst.MAPADDRESS + meeting.getMeetingNumber(), time, TimeUnit.SECONDS);
            }
            redisTemplate.expire(MeetingConst.FREQUENT + meeting.getMeetingNumber(), time, TimeUnit.SECONDS);

        });
    }

    /**
     * 根据会议号查看最新的会议状态
     *
     * @param meetingNumber
     * @return
     */
    @Override
    public RespBean getMeetingStatus(int meetingNumber) {
        //根据会议号获取最新会议信息
        Meeting meeting = JSONObject.parseObject(redisTemplate.opsForValue().get(MeetingConst.MEETING + meetingNumber), Meeting.class);
        if (Objects.isNull(meeting)) {
            return RespBean.error("会议不存在");
        }
        //获取当前时间比较是否在结束时间之后
        LocalDateTime dt = LocalDateTime.now();// 当前日期和时间
        if (dt.isBefore(meeting.getMeetingStartTime())) {
            return RespBean.error("会议未开启");
        }
        if (meeting.getMeetingDelete() == 1) {
            return RespBean.error("会议已结束");
        }
        //将当前会议信息存入redis 方便下个人访问
        if (redisTemplate.hasKey(MeetingConst.MEETING + meeting.getMeetingNumber())) {
            return RespBean.success("会议已开启", meeting);
        }
        return RespBean.error("会议异常");
    }

    /**
     * 用户查看自己创建的会议记录
     *
     * @param username
     * @return
     */
    @Override
    public PageResult<MeetingDTO> getOneSelfMeeting(ConditionVO condition, String username) {
        //获取
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
     * 返回会议视频需要的数据
     *
     * @param meetingNumber
     */
    @Override
    public Map<String, Object> joinConference(Integer meetingNumber) {
        Meeting meeting = JSONObject.parseObject(redisTemplate.opsForValue().get(MeetingConst.MEETING + meetingNumber), Meeting.class);
        Map<String, Object> map = new HashMap<>();
        if (meeting != null) {
            map.put("appId", appId);
            //会议发起人id
            map.put("originatorUserInfoId", meeting.getUserInfoId());
            //会议参与人id
            map.put("participantUserId", UserUtils.getLoginUser().getUserInfoId());
        }
        return map;
    }

    /**
     * 管理员查看全部会议信息
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
     * 管理员根据id关闭会议
     *
     * @param meetingNumber
     */
    @Override
    public void adminShutDownMetting(Integer meetingNumber) {
        //获取最新会议
        if (!redisTemplate.hasKey(MeetingConst.MEETING + meetingNumber)) {
            return;
        }
        //修改当前最新会议的状态
        Meeting meeting = JSONObject.parseObject(redisTemplate.opsForValue().get(MeetingConst.MEETING + meetingNumber), Meeting.class);
        meeting.setMeetingDelete(1);
        this.baseMapper.updateById(meeting);
        //删除redis
        redisTemplate.delete(MeetingConst.MEETING + meetingNumber);
        //删除redis签到set信息
        redisTemplate.delete(MeetingConst.FREQUENT + meeting.getMeetingNumber());
        //删除线下会议位置
        if (meeting.getMeetingType() == 1) {
            redisTemplate.delete(MeetingConst.MAPADDRESS + meeting.getMeetingNumber());
        }
    }

    //异步添加会议参与人
    @Transactional
    public void addPartipanPerson(List<ParticipantVO> participantVO, Meeting meeting, UserDetailDTO loginUser, MettingVO mettingVO) {
        //添加到参会人员表
        CompletableFuture.runAsync(() -> {
            for (ParticipantVO person : participantVO) {
                //根据获取的id来
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
            log.info(meeting.getNickname() + "异步添加会议参与人");
        });
    }
}
