package com.jie.service;

import com.jie.dto.CalendarDTO;
import com.jie.dto.UserConferenceDTO;
import com.jie.entity.Calendar;
import com.baomidou.mybatisplus.extension.service.IService;
import com.jie.util.RespBean;
import com.jie.vo.CalendarVO;
import com.jie.vo.ConditionVO;
import com.jie.vo.PageResult;

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
public interface CalendarService extends IService<Calendar> {

    /**
     * 新建日程
     * @param calendarVO
     * @return
     */
    RespBean addCalendar(CalendarVO calendarVO, String username);

    /**
     * 查看用户预约会议信息
     * @param condition
     * @param username
     * @return
     */
    List<CalendarDTO> getCalendarList(ConditionVO condition, String username, String dataTime);
}
