package com.jie.service.impl;

import com.alibaba.fastjson.JSONArray;
import com.alibaba.fastjson.JSONObject;
import com.baomidou.mybatisplus.core.conditions.query.LambdaQueryWrapper;
import com.baomidou.mybatisplus.core.toolkit.StringUtils;
import com.baomidou.mybatisplus.extension.api.R;
import com.baomidou.mybatisplus.extension.plugins.pagination.Page;
import com.jie.dto.CalendarDTO;
import com.jie.dto.UserConferenceDTO;
import com.jie.entity.Calendar;
import com.jie.entity.Sign;
import com.jie.mapper.CalendarMapper;
import com.jie.service.CalendarService;
import com.baomidou.mybatisplus.extension.service.impl.ServiceImpl;
import com.jie.util.BeanCopyUtils;
import com.jie.util.RespBean;
import com.jie.vo.CalendarVO;
import com.jie.vo.ConditionVO;
import com.jie.vo.PageResult;
import org.springframework.stereotype.Service;

import java.security.Principal;
import java.time.LocalDateTime;
import java.util.ArrayList;
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
public class CalendarServiceImpl extends ServiceImpl<CalendarMapper, Calendar> implements CalendarService {

    /**
     * 新建日程
     * @param calendarVO
     * @return
     */
    @Override
    public RespBean addCalendar(CalendarVO calendarVO,String username) {
        Calendar calendar = BeanCopyUtils.copyObject(calendarVO, Calendar.class);
        calendar.setUsername(username);
        this.baseMapper.insert(calendar);
        return RespBean.success("添加成功");
    }

    /**
     * 查看用户预约会议信息
     * @param condition
     * @param username
     * @return
     */
    @Override
    public List<CalendarDTO> getCalendarList(ConditionVO condition, String username,String dataTime) {
        //年 月 日
        List<Calendar>list=this.baseMapper.DataTimeCalendarLists(condition.getCurrent(),condition.getSize(),username,dataTime);
        return BeanCopyUtils.copyList(list, CalendarDTO.class);
    }
}
