<template>
	<view class="global">
		<view class="header">											
			<view id="allmap" class="map" style="height: 100vh;width: 100vw;"></view>
		</view>		
	</view>
</template>
 
<script module="allmap" lang="renderjs">
	import { mymap } from "@/utils/map.js";	
	var bmap = null;
	export default {
		data() {
			return {
				ak: 'ksGXOp0q7PWuHaSSD3tVBVoGNVapmOCK'
			}
		},
		mounted() {				
      // ================百度地图==================
      mymap(this.ak).then((mymap) => {
        // 创建百度地图实例				
        bmap = new BMapGL.Map("allmap");
        console.log(bmap, 'this.map ')
        var point = new BMapGL.Point(120.52679016380534, 31.304840401001357);
        bmap.centerAndZoom(point, 15); //设置缩放级别	
        var geoc = new BMapGL.Geocoder()
        bmap.addEventListener("click", function(e){//地图单击事件
            console.log('点击了',e.point);
            bmap.clearOverlays()
            var lng = e.latlng.lng
            var lat = e.latlng.lat
            var pt = new BMapGL.Point(lng, lat)
            // var myIcon = new BMapGL.Icon(require('../../static/1111.png'), new BMapGL.Size(100, 100))
            // console.log(myIcon);
            var marker2 = new BMapGL.Marker(pt)
            var circle = new BMapGL.Circle(pt,500,{fillColor: "blue",strokeColor:"blue", strokeWeight: 1,fillOpacity: 0.2,strokeOpacity: 0.2}); //创建圆
            bmap.addOverlay(marker2)
            bmap.addOverlay(circle)
            geoc.getLocation(pt, function(rs) {
              var addComp = rs.addComp
              console.log(rs);
            })
        });
        
        var geolocation = new BMapGL.Geolocation();
        // 开启SDK辅助定位
        geolocation.enableSDKLocation();
        geolocation.getCurrentPosition(function(r){
          if(this.getStatus() == BMAP_STATUS_SUCCESS){
            var mk = new BMapGL.Marker(r.point, {
              enableDragging: true
            });
            var circle = new BMapGL.Circle(r.point,500,{fillColor: "blue",strokeColor:"blue", strokeWeight: 1,fillOpacity: 0.2,strokeOpacity: 0.2}); //创建圆
            var point = new BMapGL.Point(r.point.lng, r.point.lat)
            var gc = new BMapGL.Geocoder()
            gc.getLocation(point, function(rs) {
              var addComp = rs.addressComponents
              console.log(rs.address) // 地址信息
            })
            bmap.addOverlay(mk);
            bmap.addOverlay(circle);
            bmap.panTo(r.point);
            mk.enableDragging(); //标注可拖拽
            // alert('您的位置：'+r.point.lng+','+r.point.lat, r);
          }
          else {
            alert('failed'+this.getStatus());
          }        
        });
        bmap.setTilt(43);//设置倾斜角度
        bmap.setHeading(24.5);   //设置地图旋转角度		
        bmap.enableScrollWheelZoom();
        bmap.setMapStyleV2({
          styleId: '自定义样式的id' //百度开放平台搜搜个性化地图
        });											
        });
    },
		methods: {			
			updateEcharts(newValue, oldValue, ownerInstance, instance) {
				// 监听 service 层数据变更
				
				// app端监听数据变化调用方法								
			},			
			onClick(event, ownerInstance) {
				// 调用 service 层的方法					
			},			
		}
	}
</script>
<style lang="scss" scoped>
	#allmap {
		width: 100vw;
		height: 100vh;
	}
	
</style>