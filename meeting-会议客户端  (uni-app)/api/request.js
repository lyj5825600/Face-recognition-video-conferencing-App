const BaseUrl = 'https://5r2275o669.goho.co' // http://101.43.253.100:8082
let ajaxTimes = 0
export default function request(params) {
	// 每触发一次请求就加1
	ajaxTimes++
	// 发送请求前先显示加载加载中提示语
	uni.showLoading({
	  title: params.tip || "加载中...",
	  // 显示遮罩
	  mask: true
	});
	return new Promise((resolve, reject) => {
		uni.request({
			url: BaseUrl + params.url,
			method: params.method || 'GET',
			data: params.data || {},
      header: {
        Authorization: uni.getStorageSync('token') ? uni.getStorageSync('token') : '',
        ...params.header
      },
			success(res) {
				if (res.data.code !== 200) {
					return uni.showToast({title: res.data.message, icon: 'none'})
				}
				resolve(res.data)
			},
			fail(err) {
				uni.showToast({title: '请求接口失败', icon: 'none'})
				reject(err)
			},
			complete(res) {
				ajaxTimes--
				if (ajaxTimes === 0) {
					setTimeout(() => {
						uni.hideLoading()
					}, 300)
				}
			}
		})
	})
}

export function request1(params) {
	return new Promise((resolve, reject) => {
		uni.request({
			url: BaseUrl + params.url,
			method: params.method || 'GET',
			data: params.data || {},
      header: {
        Authorization: uni.getStorageSync('token') ? uni.getStorageSync('token') : '',
        ...params.header
      },
			success(res) {
				resolve(res.data)
			},
			fail(err) {
				uni.showToast({title: '请求接口失败', icon: 'none'})
				reject(err)
			}
		})
	})
}