<template>
  <view class="new-member">
    <NavTop bgCr="rgba(255, 255, 255, .8)" :fixed="true">
    	<view class="top-bar" :style="{height: $store.getters.topBarHeight + 'px'}">
        <text class="iconfont icon-zuojiantou" @click="handleBack"></text>
        <view class="title">选择成员</view>
    	</view>
    </NavTop>
    <view style="padding-bottom: 120rpx;">
      <checkbox-group @change="change">
        <uni-list :border="true">
        	<!-- 显示圆形头像 -->
        	<uni-list-chat v-for="(item, index) in memberList" :key="item.id" :avatar-circle="true" :title="item.nickname" :avatar="item.facePhotos" :note="`性别: ${item.sex === 0 ? '男' : '女'}  联系方式: ${item.phone}`" badge-positon="left" :badge-text="item.isSel ? 'dot' : ''">
            <view class="checkbox-box">
              <checkbox color="#FFFFFF" :checked="item.isSel" :value="JSON.stringify(index)" />
            </view>
          </uni-list-chat>
        </uni-list>
      </checkbox-group>
    </view>
    <view class="manage-box">
      <label @click="handleAllChecked">
        <checkbox color="#FFFFFF" :checked="isAllChecked" /><text>全选</text>
      </label>
      <navigator url="/pages/edit-info/edit-info" class="add-other-member">添加其他成员</navigator>
    </view>
  </view>
</template>

<script>
  import { mapState } from 'vuex'
  import NavTop from '../../components/NavTop/NavTop.vue'
  import { getParticipantsPersonList } from '../../api/index.js'
  let flag = ''
  export default {
    data() {
      return {
        clickAllCheckBtn: false
      }
    },
    components: { NavTop },
    onLoad() {
      const curPage = getCurrentPages()
      // 获取参数
      flag = curPage[curPage.length - 1].options.flag
      if(flag == 1) {
          if (this.memberList.length > 0) return
          this.getParticipantsPersonListFun()
      }
    },
    onShow() {
      // if (flag != 1) {
      //   console.log(flag)
      //   // 注: 这里应该是 vuex 中 actions发异步请求,mutations中 改变 state状态[未写....]
      //   // this.$store.commit('SETMEMBERLIST', memberList)
      //   // flag != 1,说明再添加成员
      //   this.getParticipantsPersonListFun()
      // } else {
      //   // 成员列表大于0,说明该用户已请求过,不必再请求
      //   if (this.memberList.length > 0) return
      //   this.getParticipantsPersonListFun()
      // }
    },
    computed: {
      ...mapState(['memberList', 'selMemberList', 'curSelIndexs', 'isAllChecked', 'showImgList'])
    },
    watch: {
      curSelIndexs: {
        deep: true,
        handler(newList, oldList) {
          // 全部的成员列表, 选中的成员列表
          let selMemberList = this.selMemberList
          let showImgList = this.showImgList
          let memberList = this.memberList
          if (newList.length <= oldList.length) { //  && newList.length > 0
            // 说明选中项减1[减的且是旧数据中的最后一项]
            /** 
             * 0.取差集得到要删除的索引值数组
             * 1.得到要删除那项的索引值
             * 2.根据该值得到源数据中的项id
             * 3.过滤掉选中列表中的该项
             * 4.把源数据列表中该项改为未选中
             * */
            const arr = oldList.filter(item => !new Set(newList).has(item))
            const delValue = arr[0]
            const delItemId = memberList[delValue].id
            memberList[delValue].isSel = false
            // showImgList[`showImg${delValue}`] = true
            this.$set(showImgList, `showImg${delValue}`, true)
            selMemberList = selMemberList.filter((item, index) => item.id != delItemId)
            if (newList.length === 0) this.$store.commit('SETALLCHECKED', false)
          } else {
            // 取差集
            const arr = newList.filter(item => !new Set(oldList).has(item))
            // arr.length !== 1 说明是全选或反选
            if (arr.length !== 1 || this.clickAllCheckBtn) return
            // 追加
            selMemberList.push(memberList[arr[0]])
            memberList[arr[0]].isSel = true
            this.$set(showImgList, `showImg${selMemberList.length - 1}`, false)
            if ((selMemberList.length === memberList.length) && !this.isAllChecked) {
              // 1.取反
              this.$store.commit('SETALLCHECKED', !this.isAllChecked)
            }
          }
          // 更新数据
          this.$store.commit('SETSELMEMBERLIST', selMemberList)
          this.$store.commit('SETMEMBERLIST', memberList)
          this.$store.commit('SETSHOWIMGLIST', showImgList)
        }
      }
    },
    methods: {
      // 获取当前用户人员列表方法
      async getParticipantsPersonListFun() {
        const { obj: res } = await getParticipantsPersonList()
        if (this.memberList.length > 0) {
          if (this.memberList.length < res.length) {
            /**
             * 逻辑:
             * 大于0且小于新数据的长度,说明不是第一次请求时添加成员
             * 1.得到数据向每一项中追加判断是否选中的字段
             * 2.得到新添加的人员,追加至人员列表中
             * 3.更新vuex中的人员列表
              * */
            const newMember = res[res.length - 1]
            newMember.isSel = false
            this.memberList.push(newMember)
            this.$store.commit('SETMEMBERLIST', this.memberList)
          }
        } else {
          /**
           * 逻辑:
           * 等于0,第一次请求
           * 1.得到数据向每一项中追加判断是否选中的字段
           * 2.更新vuex中的人员列表
            * */
          const arr = res
          arr.forEach((v, i) => {
            return v.isSel = false
          })
          this.$store.commit('SETMEMBERLIST', arr)
        }
      },
      // checkbox项改变时触发
      change(e) {
        this.clickAllCheckBtn = false
        const { value } = e.detail
        // 当前选中项改变时, 更新下 vuex 中当前选中项索引值列表
        this.$store.commit('SETCURSELINDEXS', value)
      },
      // 处理是否全选事件
      handleAllChecked() {
        // 全部的成员列表, 选中的成员列表
        const { memberList, isAllChecked } = this
        if ((this.selMemberList.length === memberList.length) && !isAllChecked) {
          console.log('大萨克')
          // 剔除用户在已经全选的情况仍然点击全选按钮
          // 1.取反
          this.$store.commit('SETALLCHECKED', !isAllChecked)
        } else {
          /**
           * 用户在未已经全选的条件下 逻辑：
           * 1. 把判断用户是否点击的全选的变量改为true
           * 2. 初始化 选中的成员列表和选中成员的索引值列表
           * 3. 循环 => 实现全选或全不选
           * 4.判断是否已经全选
           * 5. 已经全选，则重置选中成员列表和选中成员的索引值列表
           * 6. 未全选，则把选中成员列表等于源数据列表，选中成员的索引值列表则遍历得到源数据每一项的索引值
           * 7. 最后更新vuex中的数据
            * */
          this.clickAllCheckBtn = true
          // 选中的成员列表
          let selMemberList = []
          // 选中项的索引值列表
          let curSelIndexs = []
          // 全选或全不选
          memberList.forEach(item => item.isSel = !isAllChecked)
          if (isAllChecked) {
            selMemberList = []
            curSelIndexs = []
          } else {
            const arr = memberList.filter(item => !new Set(this.selMemberList).has(item))
            for(let i = 0; i < this.selMemberList.length; i++) {
              this.$set(this.showImgList, `showImg${i}`, true)
            }
            this.$store.commit('SETSHOWIMGLIST', this.showImgList)
            selMemberList = [...this.selMemberList, ...arr]
            curSelIndexs = [...new Set([...this.curSelIndexs, ...memberList.map((v, index) => index.toString())])]
          }
          // 更新数据
          // 1.取反
          this.$store.commit('SETALLCHECKED', !isAllChecked)
          this.$store.commit('SETSELMEMBERLIST', selMemberList)
          this.$store.commit('SETMEMBERLIST', memberList)
          this.$store.commit('SETCURSELINDEXS', curSelIndexs)
        }
      },
      // 返回上一个页面
      handleBack() {
        uni.navigateBack({
          delta: 1
        })
      },
      // 前往编辑资料页面
      toEditInfo() {
        // 重置
        flag = ''
        uni.navigateTo({
          url: '/pages/edit-info/edit-info'
        })
      }
    }
  }
</script>

<style lang="scss" scoped>
  .new-member {
    position: relative;
    width: 100%;
    height: 100%;
    // padding: 0 30rpx;
    .top-bar {
      position: fixed;
      width: 100%;
      z-index: 999;
      padding: 0 30rpx;
      display: flex;
      align-items: center;
      margin-left: -10rpx;
      .icon-zuojiantou {
        font-weight: bold;
        font-size: 50rpx;
        margin-right: 10rpx;
      }
      .title {
        flex: 1;
        text-align: center;
      }
      // .right-features {
      //   flex: 1;
      //   margin-right: 20rpx;
      //   text-align: right;
      //   .all-checked {
      //     margin-left: 30rpx;
      //   }
      // }
    }
    // .member-item {
    //   padding: 0 20rpx;
    //   display: flex;
    //   height: 100rpx;
    //   justify-content: space-between;
    //   align-items: center;
    //   border-bottom: 2rpx solid $uni-bg-color-grey;
    // }
    .manage-box {
      position: fixed;
      padding: 0 30rpx;
      display: flex;
      justify-content: space-between;
      align-items: center;
      bottom: 0;
      left: 0;
      background-color: #fff;
      width: 100%;
      height: 120rpx;
      box-shadow: 0 0 8rpx #c7c7c7;
      border-top: 1rpx solid #c9c9c9;
      .add-other-member {
        border: 1px solid #c7c7c7;
        padding: 8rpx;
        border-radius: 8rpx;
      }
    }
    .checkbox-box {
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
    }
    /deep/ uni-checkbox .uni-checkbox-input {
      border-radius: 50%;
      border: 1rpx solid red;
    }
    /deep/ uni-checkbox .uni-checkbox-input:hover {
      border: 1rpx solid red;
    }
    /deep/ uni-checkbox .uni-checkbox-input.uni-checkbox-input-checked {
        border: 1rpx solid red;
        background-color: red;
    }
    /deep/ uni-checkbox .uni-checkbox-input.uni-checkbox-input-checked:before {
      color: white;
    }
  }
</style>
