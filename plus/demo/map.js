	
	mui.init()
	
// 	mui.openWindow({
//     url:'//uri.amap.com/marker?position=121.287689,31.234527&name=park&src=mypage&coordinate=gaode&callnative=0',
//     id:'ih',
//     styles:{
//       top:45,//新页面顶部位置
//       bottom:0,//新页面底部位置
//       // ......
//     },
//     extras:{
//       // .....//自定义扩展参数，可以用来处理页面间传值
//     },
//     createNew:false,//是否重复创建同样id的webview，默认为false:不重复创建，直接显示
//     show:{
//       autoShow:true,//页面loaded事件发生后自动显示，默认为true
//       // aniShow:animationType,//页面显示动画，默认为”slide-in-right“；
//       // duration:animationTime//页面动画持续时间，Android平台默认100毫秒，iOS平台默认200毫秒；
//     },
//     waiting:{
//       autoShow:true,//自动显示等待框，默认为true
//       title:'正在加载...',//等待对话框上显示的提示内容
//       options:{
//         // width:waiting-dialog-widht,//等待框背景区域宽度，默认根据内容自动计算合适宽度
//         // height:waiting-dialog-height,//等待框背景区域高度，默认根据内容自动计算合适高度
//         // ......
//       }
//     }
// })
    var map, route, marker,point;
    //基本地图加载
    map = new AMap.Map("container", {
        resizeEnable: true,
		zoom:14
    });
    //绘制初始路径
    var path = [];
    // path.push([116.303843, 39.983412]);
    // path.push([116.321354, 39.896436]);
    // path.push([116.407012, 39.992093]);
    // map.plugin("AMap.DragRoute", function() {
    //     route = new AMap.DragRoute(map, path, AMap.DrivingPolicy.LEAST_FEE); //构造拖拽导航类
    //     route.search(); //查询导航路径并开启拖拽导航
    // });
	map.plugin('AMap.Geolocation', function() {
		geolocation = new AMap.Geolocation({
			enableHighAccuracy: true, //是否使用高精度定位，默认:true  
			timeout: 10000, //超过10秒后停止定位，默认：无穷大  
			buttonOffset: new AMap.Pixel(10, 20), //定位按钮与设置的停靠位置的偏移量，默认：Pixel(10, 20)  
			zoomToAccuracy: true, //定位成功后调整地图视野范围使定位位置及精度范围视野内可见，默认：false  
			buttonPosition: 'RB'
		});
		map.addControl(geolocation);
		geolocation.getCurrentPosition();
		AMap.event.addListener(geolocation, 'complete', onComplete); //返回定位信息  
		AMap.event.addListener(geolocation, 'error', onError); //返回定位出错信息  
	});
	//解析定位结果  
	function onComplete(data) {
		var str = ['定位成功'];
		str.push('经度：' + data.position.getLng());
		str.push('纬度：' + data.position.getLat());
		if (data.accuracy) {
			str.push('精度：' + data.accuracy + ' 米');
		} //如为IP精确定位结果则没有精度信息  
		str.push('是否经过偏移：' + (data.isConverted ? '是' : '否'));
				
		point = [data.position.getLng(),data.position.getLat()];
		poiToaddress(point);
				
		// document.getElementById('tip').innerHTML = str.join('<br>');
		map.setCenter(point)
	}
	//解析定位错误信息  
	function onError(data) {
		// document.getElementById('tip').innerHTML = '定位失败';
	}
		//坐标点转地址  
	function poiToaddress(poi) {
		AMap.plugin(["AMap.Geocoder"], function() {
			var geocoder = new AMap.Geocoder({
				city: "0315", //城市，默认：“全国”  
				radius: 500 //范围，默认：500,以已知坐标为中心点，radius为半径，返回范围内兴趣点和道路信息   
			});
			geocoder.getAddress(poi, function(status, result) {
				console.log(status,result)
				if (status === 'complete' && result.info === 'OK') {
					var address = result.regeocode.formattedAddress; //返回地址描述  
					// address2point(address);
					var province = result['regeocode']['addressComponent'].province +result['regeocode']['addressComponent'].city + result['regeocode']['addressComponent'].district;
					address = address.replace(province,'')
					console.log("地址：" + address);
					mui('#pickerInput1')[0].value=  address;
					// alert("当前地址:" + address);
				}
			});
		})
		
	};
	var resultStr,start;
	//地址转坐标  
	function addresspoint(address) {
		
		AMap.plugin(["AMap.Geocoder"], function() {
			var geocoder = new AMap.Geocoder({
				city: "全国", //城市，默认：“全国” 
				// radius: 500 //范围，默认：500,以已知坐标为中心点，radius为半径，返回范围内兴趣点和道路信息   
			});
			console.log(56546);
			geocoder.getLocation(address, function(status, result) {
				console.log(status,result)
				if (status === 'complete' && result.info === 'OK') {
					var geocode = result.geocodes[0];
					resultStr = [geocode.location.lng,geocode.location.lat];
					alert('result' + resultStr);
					
				}
			});
		})
		
	};
	// AMapUI.setDomLibrary($);

// 加载PoiPicker，loadUI的路径参数为模块名中 'ui/' 之后的部分
AMapUI.loadUI(['misc/PoiPicker'], function(PoiPicker) {
  var poiPicker1 = new PoiPicker({
	  
      input: 'pickerInput1' //输入框id
  });
  var poiPicker2 = new PoiPicker({
  	  
      input: 'pickerInput2' //输入框id
  });
  console.log(80980890)
   poiPickerReady(poiPicker1,'start');
   poiPickerReady(poiPicker2,'end');
   
});
function poiPickerReady(poiPicker,type) {
  window.poiPicker = poiPicker;

        var marker = new AMap.Marker();

        var infoWindow = new AMap.InfoWindow({
            offset: new AMap.Pixel(0, -20)
        }); 
  // 监听poi选中信息
  poiPicker.on('poiPicked', function(poiResult) {
	     var source = poiResult.source,
                poi = poiResult.item,
                info = {
                    source: source,
                    id: poi.id,
                    name: poi.name,
                    location: poi.location.toString(),
                    address: poi.address
                };

            marker.setMap(map);
            // infoWindow.setMap(map);
					if ('start' == type) {
						startPoint = {
							lnglat: [poi.location.lng, poi.location.lat]
						}
						var address = poi.name;
						taransfer(address);
						function taransfer(address) {
							
							AMap.plugin(["AMap.Geocoder"], function() {
								var geocoder = new AMap.Geocoder({
									city: "全国", //城市，默认：“全国”  
									// radius: 500 //范围，默认：500,以已知坐标为中心点，radius为半径，返回范围内兴趣点和道路信息   
								});
								geocoder.getLocation(address, function(status, result) {
									console.log(status,result)
									if (status === 'complete' && result.info === 'OK') {
										var geocode = result.geocodes[0];
										point = [geocode.location.lng,geocode.location.lat];
											
									}
								});
							})
							
						};
						// poiToaddress()
						
					} else {
						endPoint = {
							lnglat: [poi.location.lng, poi.location.lat]
						};
						mui('#pickerInput2')[0].value = poi.name;
					}
					console.log(poi,'poi')
            marker.setPosition(poi.location);
//             infoWindow.setPosition(poi.location);
// 
//             infoWindow.setContent('POI信息: <pre>' + JSON.stringify(info, null, 2) + '</pre>');
//             infoWindow.open(map, marker.getPosition());
map.setCenter(marker.getPosition());
    //用户选中的poi点信息
  })
  }
	var lines = [];
	//规划路线
	function showLine(){
		lines = [];
		var end = mui('#pickerInput2')[0].value;
		addresspoint(end);
		setTimeout(function(){
			 //绘制初始路径
			var path = [];
			// console.log('point' + point)
			path.push(point);
			path.push([109.837936,40.607269])
			path.push(resultStr);
				var route;
			 map.plugin("AMap.DragRoute", function() {
				 // lines = [];
				 console.log(path,'lll');
			    route = new AMap.DragRoute(map, path, AMap.DrivingPolicy.LEAST_FEE); //构造拖拽导航类
			    route.search(); //查询导航路径并开启拖拽导航
				route.on('complete',function (type,target,data) {
					alert('tuozhuai')
						lines = route.getRoute();
						console.log(type,464646546)
						point = type.target.$q[0];
						resultStr = type.target.$q[1]
						//////////////////////////////////////////////
						// console.log(lines)
						
							var p0 = [109.828739,40.637957];//包头乐园
							var p2 = [109.832975,40.620558];//包头市昆都仑区内蒙古科技大学   终点
							var dis = AMap.GeometryUtil.distanceToSegment(p0, lines);   // 判断点到路线的最短距离
							var routeDis = AMap.GeometryUtil.distanceOfLine(lines); //判断两个点的实际距离
							alert('这条路线的实际距离为' + routeDis + '米');
							alert('我在包头乐园，我距离当前线路的最短距离为' + dis + '米');
							var takePoint = AMap.GeometryUtil.closestOnLine(p0,lines);//上车点
							var endPoint =  AMap.GeometryUtil.closestOnLine(p2, lines);//下车点
							alert(endPoint);
						
							AMap.plugin(["AMap.Geocoder"], function() {
								var geocoder = new AMap.Geocoder({
									city: "全国", //城市，默认：“全国”  
									// radius: 300 //范围，默认：500,以已知坐标为中心点，radius为半径，返回范围内兴趣点和道路信息   
								});
								
							
								console.log(takePoint,11111);
								geocoder.getAddress(takePoint, function(status, result) {
									console.log(status,result)
									
									if (status === 'complete' && result.info === 'OK') {
										console.log(JSON.stringify(result));
										var address = result.regeocode.formattedAddress; //返回地址描述  
										// address2point(address);
										alert('推荐上车点为:' + address);
										// alert("当前地址:" + address);
									}
								});
							})
							
								AMap.plugin(["AMap.Geocoder"], function() {
								var geocod= new AMap.Geocoder({
									city: "全国", //城市，默认：“全国”  
									// radius: 300 //范围，默认：500,以已知坐标为中心点，radius为半径，返回范围内兴趣点和道路信息   
								});
						
								geocod.getAddress(endPoint, function(status, result) {
								
									
									if (status === 'complete' && result.info === 'OK') {
										console.log(JSON.stringify(result));
										var address = result.regeocode.formattedAddress; //返回地址描述  
									
										var disEnd =  AMap.GeometryUtil.distanceOfLine([endPoint,p2]);
										alert('推荐下车点为:' + address+'需步行'+ disEnd+'米');
									
									}
								});
							})
							})
							})
							// var finishPoint = AMap.GeometryUtil.closestOnLine(p0, [point,resultStr]);
						},1000)	
						
				// }) ;
			};
