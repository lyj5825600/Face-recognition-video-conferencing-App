package com.jie.mapper;

import com.baomidou.mybatisplus.core.mapper.BaseMapper;
import com.jie.entity.Calendar;
import org.apache.ibatis.annotations.Mapper;

import java.util.List;

/**
 * <p>
 *  Mapper 接口
 * </p>
 *
 * @author zwq
 * @since 2022-04-04
 */
@Mapper
public interface CalendarMapper extends BaseMapper<Calendar> {

    /**
     * 根据日期查询用户本日的信息
     * @param current 分页
     * @param size 条数
     * @param username 用户username
     * @return
     */
    List<Calendar> DataTimeCalendarLists(Long current, Long size, String username, String date);
}
