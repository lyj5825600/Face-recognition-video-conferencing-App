package com.jie;

import com.baomidou.mybatisplus.core.conditions.query.LambdaQueryWrapper;
import com.jie.constant.CommonConst;
import com.jie.constant.MeetingConst;
import com.jie.dto.MeetingStatisticalDTO;
import com.jie.entity.*;
import com.jie.entity.Calendar;
import com.jie.mapper.*;
import com.jie.service.MeetingStatisticalService;
import com.jie.util.RespBean;
import com.jie.util.UserUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.data.geo.Metrics;
import org.springframework.data.geo.Point;
import org.springframework.data.redis.connection.RedisGeoCommands;
import org.springframework.data.redis.core.GeoOperations;
import org.springframework.data.redis.core.RedisTemplate;
import org.springframework.data.redis.core.SetOperations;
import org.springframework.scheduling.annotation.Async;

import java.io.File;
import java.time.Duration;
import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
import java.util.*;
import java.util.concurrent.CompletableFuture;
import java.util.concurrent.TimeUnit;

/**
 * @package: com.jie
 * @className: Test
 * @date: 2022/4/12 21:35
 * @version: 1.0
 */
@SpringBootTest
public class BackApplicationTests {
    @Autowired
    private RoleResourceMapper roleResourceMapper;
    @Autowired
    private ResourceMapper resourceMapper;
    @org.junit.jupiter.api.Test
    public void test(){
//        for (Resource resource : resourceMapper.selectList(null)) {
//            roleResourceMapper.insert(RoleResource.builder().roleId(2).resourceId(resource.getId()).build());
//        }

    }
    public void arrayMaxCount(int[]arr){
        int maxCount=0;
        int maxNumber=0;
        Map<Integer,Integer> map=new HashMap<>();
        //枚举
        for (int i = 0; i < arr.length; i++) {
            map.put(arr[i],map.getOrDefault(arr[i],0)+1);
        }
        int[] arrList=new int[map.size()];
        //统计最多遇到的元素
        for (int i = 0; i < arr.length; i++) {
            if (maxCount<map.get(arr[i])){
                maxNumber=arr[i];
            }
        }
        //去重数组
        int index=0;
        for (Integer num : map.keySet()) {
            arrList[index++]=num;
        }
        System.out.println(Arrays.toString(arrList));
        System.out.println(maxNumber);
    }

    public void tree(Tree node){
        if (node==null){
            return;
        }
        System.out.println(node.no);
        tree(node.left);
        tree(node.right);
    }


}
class Tree{
    public int no;
    public Tree left;
    public Tree right;
}
