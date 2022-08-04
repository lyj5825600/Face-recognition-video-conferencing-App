export function mymap(ak) {
  return new Promise(function(resolve, reject) {
    window.init = function() {
      resolve(mymap)
    }
    var script = document.createElement('script')
    script.type = 'text/javascript'
    script.src = `http://api.map.baidu.com/api?v=3.0&type=webgl&ak=${ak}&callback=init`
    script.onerror = reject
    document.head.appendChild(script)
  })
}

export function currentPosition(bmap, cb) {
  var geolocation = new BMapGL.Geolocation({
    enableHighAccuracy: true
  });
  // 开启SDK辅助定位
  geolocation.enableSDKLocation();
  geolocation.getCurrentPosition(function(r) {
    if (this.getStatus() == BMAP_STATUS_SUCCESS) {
      var mk = new BMapGL.Marker(r.point);
      var lat = r.point.lat
      var lng = r.point.lng
      // var circle = new BMapGL.Circle(r.point,100,{fillColor: "blue",strokeColor:"blue", strokeWeight: 1,fillOpacity: 0.2,strokeOpacity: 0.2}); //创建圆
      var point = new BMapGL.Point(lng, lat)
      var gc = new BMapGL.Geocoder()
      bmap.addOverlay(mk);
      // bmap.addOverlay(circle);
      bmap.panTo(r.point);
      // alert('您的位置：'+r.point.lng+','+r.point.lat, r);
      gc.getLocation(point, function(rs) {
        // const addComp = rs.addressComponents
        console.log(rs.address);
        cb({
          address: rs.address,
          info: rs.surroundingPois.length > 0 ? rs.surroundingPois[0].title : '',
          latitude: lat,
          longitude: lng
        })
        // console.log(rs.address, addComp.district, addComp.province, addComp.city, rs.surroundingPois.title) // 地址信息
      })
    } else {
      alert('failed' + this.getStatus());
    }
  }, {
    enableHighAccuracy: true
  });
}
export function mapClick(bmap, cb, flag, cb1) {
  bmap.addEventListener("click", function(e) { //地图单击事件
    console.log(flag);
    if (flag) {
      var geoc = new BMapGL.Geocoder()
      console.log('点击了', e.point);
      bmap.clearOverlays()
      var lng = e.latlng.lng
      var lat = e.latlng.lat
      var pt = new BMapGL.Point(lng, lat)
      // var myIcon = new BMapGL.Icon(require('../../static/1111.png'), new BMapGL.Size(100, 100))
      // console.log(myIcon);
      var marker2 = new BMapGL.Marker(pt)
      // var circle = new BMapGL.Circle(pt,100,{fillColor: "blue",strokeColor:"blue", strokeWeight: 1,fillOpacity: 0.2,strokeOpacity: 0.2}); //创建圆
      bmap.addOverlay(marker2)
      // bmap.addOverlay(circle)
      geoc.getLocation(pt, function(rs) {
        var addComp = rs.addressComponents
        console.log(rs, addComp.street);
        cb({
          address: rs.address,
          info: rs.surroundingPois.length > 0 ? rs.surroundingPois[0].title : '',
          latitude: lat,
          longitude: lng
        })
      })
    } else {
      cb1()
    }
  });
}

export function handleScopeCheckIn(bmap, latitude, longitude, cb) {
  var point
  var pointAttendance
  var geolocation = new BMapGL.Geolocation();
  geolocation.getCurrentPosition(function(r) {
    if (this.getStatus() == BMAP_STATUS_SUCCESS) {
      var mk = new BMapGL.Marker(r.point);
      bmap.addOverlay(mk); // 标出自己的当前所在地
      bmap.panTo(r.point); // 地图中心移动到自己的当前位置
      point = new BMapGL.Point(r.point.lng, r.point.lat); // 获取自己当前位置经纬度
      cb({lng: r.point.lng, lat: r.point.lat})
      // var coordinate = "111.71516609596871, 26.9831975879481112"; // 设置考勤点经纬度 
      // var arr = coordinate.split(","); // 切割经纬度
      // var lon = arr[0];
      // var lat = arr[1];
      var lon = longitude;
      var lat = latitude;
      pointAttendance = new BMapGL.Point(lon, lat);
      var circle = new BMapGL.Circle(pointAttendance, 500, { // 考勤地点范围
        fillColor: "blue", // 圆形颜色
        strokeWeight: 1,
        fillOpacity: 0.2,
        strokeOpacity: 0.2
      });
      bmap.addOverlay(circle);
      var r = new BMapGL.Marker(pointAttendance);
      bmap.addOverlay(r); // 标出考勤点的位置
    } else {
      alert('failed' + this.getStatus());
    }
  }, {
    enableHighAccuracy: true
  })
}
