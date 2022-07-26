<template>
  <view style="width: 100%;height: 100%;">
    <view class="search-box" v-if="showBtn">
      <input type="text" :placeholder="curkey ? curkey : '请输入地址'" v-model="inputVal" @blur="blur" ref="suggestInput" class="search-input caret_color"
        confirm-type="search" @confirm="allmap.emitSearchPlace" />
      <text class="iconfont icon-sousuo search-icon"></text>
    </view>
    <view id="allmap" :class="allMap ? 'big-map' : ''" :checkInOptions="checkInOptions"
      :change:checkInOptions="allmap.updateFlag" class="map"></view>
    <view class="btn_box" v-if="showBtn">
      <button type="default" plain="true" @click="$emit('closeMapPopup')">取消</button>
      <button type="primary" plain="true" @click="allmap.emitData">确定</button>
    </view>
  </view>
</template>
<script>
  export default {
    data() {
      return {
        address: '',
        curkey: '',
        inputVal: ''
      }
    },
    props: {
      showBtn: {
        default: true,
        type: Boolean
      },
      checkInOptions: {
        default: () => ({
          flag: true
        }),
        type: Object
      },
      allMap: {
        default: false,
        type: Boolean
      }
    },
    created() {
      setTimeout(() => {
        this.address = '不详'
      }, 3000)
    },
    methods: {
      // 接收renderjs发回的数据
      receiveRenderData(options) {
        console.log('receiveRenderData-->', options);
        this.address = options.address
        this.$emit('getPosition', options)
        this.$emit('closeMapPopup')
      },
      // 点击renderjs绑定的容器是触发
      receiveRenderData1(options) { // options为renderjs层传来的数据
        this.$emit('openBigMap')
      },
      // 接受用户坐标
      getUserPosition(options) {
        this.$emit('getUserPosition', options)
      },
      // 接收搜索建议
      getCurKey(curkey) {
        this.curkey = curkey
      },
      blur() {
        this.inputVal = ''
      },
      searchPlace(val) {
        console.log(val);
      }
    }
  }
</script>
<script module="allmap" lang="renderjs">
  import {
    mymap,
    currentPosition,
    mapClick,
    handleScopeCheckIn
  } from "@/utils/map.js";
  let bmap = null;
  let address = ''
  let latitude = ''
  let longitude = ''
  let userPoint = ''
  let curkey = ''
  let suggestBox
  export default {
    name: 'Map',
    data() {
      return {
        ak: 'ksGXOp0q7PWuHaSSD3tVBVoGNVapmOCK'
      }
    },
    mounted() {
      const _this = this
      console.log(this.flag, 'kkk');
      // ================百度地图==================
      mymap(this.ak).then((mymap) => {
        // 创建百度地图实例				
        bmap = new BMapGL.Map("allmap");
        console.log(bmap, 'this.map ')
        var point = new BMapGL.Point(120.52679016380534, 31.304840401001357);
        bmap.centerAndZoom(point, 19); //设置缩放级别	
        // // 处理百度地图未放在标准文档流中，会出现放大或缩小后,中心点偏移(中心点不是在放大前的点)
        // // 临时存储地图中心点经度和纬度
        // let center_lng = 0;
        // let center_lat = 0;
        // // 监听地图缩放开始事件 lng表示经度，lat表示纬度
        // bmap.addEventListener("zoomstart", function (e) {
        //   center_lng = bmap.getCenter().lng;
        //   center_lat = bmap.getCenter().lat;
        // });
        // // 监听地图缩放结束事件 lng表示经度，lat表示纬度
        // bmap.addEventListener("zoomend", function (e) {
        //   bmap.centerAndZoom(
        //     new BMapGL.Point(center_lng, center_lat),
        //     bmap.getZoom()
        //   );
        // });  

        // 定义一个控件类,即function
        function ZoomControl() {
          this.defaultAnchor = BMAP_ANCHOR_TOP_LEFT
          this.defaultOffset = new BMapGL.Size(10, 10)
        }

        // 通过JavaScript的prototype属性继承于BMap.Control
        ZoomControl.prototype = new BMapGL.Control()

        // 自定义控件必须实现自己的initialize方法,并且将控件的DOM元素返回
        // 在本方法中创建个div元素作为控件的容器,并将其添加到地图容器中
        ZoomControl.prototype.initialize = function(bmap) {
          // 创建一个DOM元素
          var div = document.createElement('div')
          div.innerHTML = `<div class="suggest-box" id="searchResultPanel" style="box-sizing: border-box;position: absolute;width: 95vw; top: 90rpx;left: 30rpx; border: 1px solid #8594a9;display: none"></div>`
            
          // {{item.province + item.city + item.district + item.street + item.business}}
          // 添加DOM元素到地图中
          bmap.getContainer().appendChild(div)
          // 将DOM元素返回
          return div
        }
        // 创建控件
        var myZoomCtrl = new ZoomControl()
        // 添加到地图当中
        bmap.addControl(myZoomCtrl)
        mapClick(bmap, (data) => {
          address = data.address + data.info
          latitude = data.latitude
          longitude = data.longitude
          console.log(data, '444');
        }, _this.checkInOptions.flag, _this.emitData1)
        if (_this.checkInOptions.flag) {
          currentPosition(bmap, (data) => {
            address = data.address + data.info
            latitude = data.latitude
            longitude = data.longitude
            console.log(latitude, '5555');
          })
          this.$nextTick(() => {
            var ac = new BMapGL.Autocomplete({
              //建立一个自动完成的对象
              input: _this.$refs.suggestInput.$el.querySelector('input'),
              location: bmap,
              onSearchComplete: (e) => {
                var elm = Array.prototype.slice.call(document.getElementsByClassName('tangram-suggestion-main'));
                elm.forEach(function (v, i) {
                    v.style.zIndex = 99999;
                    // v.style.visibility = 'hidden';
                    v.style.position = 'absolute'
                    v.style.left = '50%',
                    v.style.transform = 'translate(-50%, 3px)'
                });
                // 自定义的
                /* let suggestList = e['_pois']
                // if (suggestList.length <= 0) return
                // suggestBox = document.getElementsByClassName('suggest-box')[0]
                // suggestBox.style.display = 'block'
                // suggestList = suggestList.map(item => (`<div class="suggest-item" style="color: black;border-bottom: 1px solid #ccc;padding: 5px">${item.province + item.city + item.district + item.street + item.business}</div>`)).join('')
                // suggestBox.innerHTML = suggestList
                // let suggestItem = document.getElementsByClassName('suggest-item')
                // console.log(suggestItem.length, '999');
                // for(let i = 0; i < suggestItem.length; i++) {
                //   suggestItem[i].onclick = function() {
                //     curkey = this.innerHTML
                //     _this.emitCurKey()
                //     console.log(curkey, '777');
                //     _this.setPlace(bmap, this.innerHTML)
                //     suggestBox.style.display = 'none'
                //   }
                  } */ 
              }
            })
            ac.addEventListener('onconfirm', function (e) {
              //鼠标点击下拉列表后的事件
              var _value = e.item.value
              let myValue = _value.province + _value.city + _value.district + _value.street + _value.business
              document.getElementById('searchResultPanel').innerHTML = 'onconfirm<br />index = ' + e.item.index + '<br />myValue = ' + myValue
              curkey = myValue
              _this.emitCurKey()
              _this.setPlace(bmap, myValue)
              document.activeElement.blur(); // 输入框去除光标/屏蔽移动端默认键盘弹出；
            })
          })
        } else {
          console.log(JSON.stringify(_this.checkInOptions), '$$');
          console.log(_this.checkInOptions.latitude, _this.checkInOptions.longitude, 'lll');
          handleScopeCheckIn(bmap, _this.checkInOptions.latitude, _this.checkInOptions.longitude, (obj => {
            // 用户的位置经纬度
            userPoint = obj
            _this.emitUserPosition()
          }))
        }
        // bmap.setTilt(43);//设置倾斜角度
        // bmap.setHeading(24.5);   //设置地图旋转角度		
        // bmap.enableScrollWheelZoom();
        // bmap.setMapStyleV2({
        //   styleId: '自定义样式的id' //百度开放平台搜搜个性化地图
        // });											
      });
    },
    methods: {
      updateFlag(newValue, oldValue, ownerInstance, instance) {
        // 监听 service 层数据变更

        // app端监听数据变化调用方法
      },
      onClick(event, ownerInstance) {
        // 调用 service 层的方法		
      },
      emitSearchPlace(e, ownerVm) {
        curkey = e.detail.value
        if (curkey === '') return
        // 发送值给srvice层
        this.emitCurKey()
        // 直接调用地点锁定搜索
        this.setPlace(bmap, e.detail.value)
      },
      // 发送数据到逻辑层
      emitData(e, ownerVm) {
        // this.$ownerInstance.callMethod('receiveRenderData1')
        // 写法一: 只能在view层调用
        ownerVm.callMethod('receiveRenderData', {
          address,
          latitude,
          longitude
        })
        /* 
        // 这种两种都可以
        this.$ownerInstance.callMethod('receiveRenderData', {
          address,
          latitude,
          longitude
        })*/
      },
      emitData1(e, ownerVm) {
        this.$ownerInstance.callMethod('receiveRenderData1')
      },
      // 向service层发送用户坐标
      emitUserPosition(e, ownerVm) {
        this.$ownerInstance.callMethod('getUserPosition', userPoint)
      },
      // 向service层发送用户输入的key
      emitCurKey(e, ownerVm) {
        this.$ownerInstance.callMethod('getCurKey', curkey)
      },
      setPlace(bmap, myValue) {
        const _this = this
        bmap.clearOverlays() //清除地图上所有覆盖物
        function myFun() {
          var pp = local.getResults().getPoi(0).point //获取第一个智能搜索的结果
          latitude = pp.lat
          longitude = pp.lng
          address= myValue
          console.log(latitude, longitude, address, '哦哦哦');
          bmap.centerAndZoom(pp, 19)
          bmap.addOverlay(new BMapGL.Marker(pp)) //添加标注
        }
        var local = new BMapGL.LocalSearch(bmap, {
          //智能搜索
          onSearchComplete: myFun
        })
        local.search(myValue)
      }
    }
  }
</script>

<style lang="scss" scoped>
  #allmap {
    height: 80%;
    width: 100%;

    &.big-map {
      height: 100%;
    }
  }

  .btn_box {
    display: flex;
    justify-content: space-around;
    align-items: center;
    height: 150rpx;

    &>button {
      width: 200rpx;
    }
  }

  .search-box {
    position: relative;
    z-index: 99999;
    background-color: #FFFFFF;
    padding-top: 10rpx;
    margin: 0 30rpx;
    margin-bottom: 10rpx;

    // 搜索框
    .search-input {
      height: 70rpx;
      padding-left: 70rpx;
      border-radius: 10rpx;
      border: 1rpx solid #eeeeee;
    }

    // 搜索小图标
    .search-icon {
      position: absolute;
      left: 10rpx;
      top: 50%;
      transform: translateY(-50%);
      font-size: 50rpx;
      color: #8594a9;
    }
  }

  .suggest-box {
    box-sizing: border-box;
    position: absolute;
    width: calc(100vw - 60rpx);
    top: 90rpx;
    left: 30rpx;
    border: 1px solid #8594a9;

    .suggest-item {
      padding: 10rpx;
      border-bottom: 1rpx solid #ccc;

      &:last-child {
        border-bottom: none;
      }
    }
  }
</style>
