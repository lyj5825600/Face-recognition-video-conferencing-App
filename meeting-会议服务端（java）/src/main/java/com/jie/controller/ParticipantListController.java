package com.jie.controller;


import com.jie.entity.ParticipantList;
import com.jie.service.ParticipantListService;
import com.jie.service.ParticipantsPersonService;
import com.jie.util.RespBean;
import com.jie.util.UserUtils;
import com.jie.vo.ParticipantListVO;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.awt.*;
import java.io.File;
import java.security.Principal;
import java.util.List;

/**
 * <p>
 *  前端控制器
 * </p>
 *
 * @author zwq
 * @since 2022-04-05
 */
@RestController
@RequestMapping("/participant-list")
@Api(tags = "参会人列表")
public class ParticipantListController {
    @Autowired
    private ParticipantListService participantListService;
    /**
     * 根据当前用户返回已添加的参会人列表
     * @param
     * @return
     */
    @ApiOperation(value = "根据当前用户返回已添加的参会人列表")
    @GetMapping("/getParticipantsPersonList")
    public RespBean<?> getParticipantsPersonList(){
        return RespBean.success("personList", participantListService.getParticipantsPersonList(UserUtils.getLoginUser().getUsername()));
    }

    @ApiOperation("添加参会人信息")
    @PostMapping("/addOrUpdateParticipantPerson")
    public RespBean<?> addOrUpdateParticipantPerson(@Valid @RequestBody ParticipantListVO participantPersonVO){
        //添加参会人信息
        participantListService.saveParticipantPerson(participantPersonVO);
        return RespBean.success("添加成功");
    }
    @ApiOperation("刪除参会人")
    @PostMapping("/deleteParticipantsPersonList")
    public RespBean<?> deleteParticipantsPersonList(@RequestBody List<Integer> id){
        participantListService.removeParticipantsPersonList(id);
        participantListService.removeByIds(id);
        return RespBean.success("删除成功");
    }
}

