import request, { request1 } from "./request.js"

// 1.登录
export const login = (data) => request1({url: '/app/login', data, method: 'post'})
// 2.注册
export const register = (data) => request1({url: '/registered', data, method: 'post'})
// 退出登录
export const logout = () => request1({url: '/logout', method: 'post'})

// 历史会议记录
// 1.用户查看会议记录
export const userHistoryConference = (data) => request({url: '/sign/userHistoryConference', data})
export const userHistoryConferencePull = (data) => request1({url: '/sign/userHistoryConference', data})
// 2.用户查看自己创建的会议信息
export const oneselfMeeting = (data) => request1({url: '/meeting/oneselfMeeting', data})
// 2.删除用户指定的历史会议记录
export const removeHistoryConference = data => request1({url: '/sign/removeHistoryConference', data, method: 'post'})
// 3.查看会议信息{id}
export const viewConferenceInformationBasedTheId = id => request({url: '/meeting/viewConferenceInformationBasedTheId/' + id})

/* 创建与关闭会议 */
// 1.创建会议
export const saveMeeting = data => request({url: '/meeting/saveMeeting', data, method: 'post', tip: '创建中...'})
// 2.关闭会议
export const closeMeeting = () => request1({url: '/meeting/shutDownMettingByUserName', method: 'post'})

/** 个人 */
// 1.获取个人信息
export const adminInfo = () => request1({url: '/admin/info'})

// 2.修改昵称
export const updateNickname = data => request1({url: '/user-info/updateNickname', data, header: {'content-type': 'application/x-www-form-urlencoded'}, method: 'post', tip: '修改中...'})
// 3.修改用户头像
export const updateUserInfoImages = data => request1({url: '/user-info/updateUserInfoImages', data, header: {'content-type': 'application/x-www-form-urlencoded'}, method: 'post', tip: '修改中...'})

// 添加参会人
// 1.参会人列表
export const getParticipantsPersonList = () => request({url: '/participant-list/getParticipantsPersonList'})
// 2.删除参会人
export const deleteParticipantsPersonList = data => request({url: '/participant-list/deleteParticipantsPersonList', data, method: 'post'})
// 3. 添加参会人信息
export const addOrUpdateParticipantPerson = data => request({url: '/participant-list/addOrUpdateParticipantPerson', data, method: 'post', tip: '添加中...'})

// 1.会议号识别会议是否合法流程
export const conferenceIdViewTheConferenceStatus = data => request1({url: '/meeting/conferenceIdViewTheConferenceStatus', data, header: {'content-type': 'application/x-www-form-urlencoded'}, method: 'post'})
// 2.会议签到
export const faceRecognitionCheck = data => request1({url: '/sign/faceRecognitionCheck', data, header: {'content-type': 'application/x-www-form-urlencoded'}, method: 'post', tip: '签到中...'})

// 3.视频会议
export const joinConference = data => request1({url: '/meeting/joinConference', data})

export const getUserInfoById = data => request1({url: '/user-info/getUserInfoById', data})

// 1.新建日程
export const addCalendar = data => request({url: '/calendar/addCalendar', data, method: 'post', tip: '新建中...'})
// 1.查看本用户的日程
export const getCalendar = data => request({url: '/calendar/getCalendar', data})
// 2.日程详情
export const getCalendarId = id => request({url: '/calendar/getCalendarId', data: {id}})