package com.jie.constant;

/**
 * 会议公共常量
 * @package: com.jie.constant
 * @className: MeetingConst
 * @date: 2022/4/12 8:26
 * @version: 1.0
 */
public class MeetingConst {
    /**
     * redis的会议号文件夹目录
     */
    public static final String MEETING = "meeting:";
    /**
     * redis中用户管理文件夹
     */
    public static final String USER="user:";
    /**
     * redis会议信息文件夹
     */
    public static final String MEETINGID="meetingId:";
    /**
     * 用户频繁(会议只能一次)
     */
    public static final String FREQUENT="frequent:";
    /**
     * 会议创建判断
     */
    public static final String MEETINGCREATED="meetingcreated:";
    /**
     * 会议地址判断
     */
    public static final String MAPADDRESS="meetingMapAddress:";


}
