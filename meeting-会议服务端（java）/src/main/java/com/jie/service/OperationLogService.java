package com.jie.service;

import com.baomidou.mybatisplus.extension.service.IService;
import com.jie.dto.OperationLogDTO;
import com.jie.entity.OperationLog;
import com.jie.vo.ConditionVO;
import com.jie.vo.PageResult;

/**
 * <p>
 *  服务类
 * </p>
 *
 * @author zwq
 * @since 2022-01-04
 */
public interface OperationLogService extends IService<OperationLog> {
    /**
     * 查询日志列表
     *
     * @param conditionVO 条件
     * @return 日志列表
     */
    PageResult<OperationLogDTO> listOperationLogs(ConditionVO conditionVO);
}
