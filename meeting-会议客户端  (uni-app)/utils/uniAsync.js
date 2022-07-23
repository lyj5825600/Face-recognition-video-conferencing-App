// 显示消息提示框
export const showToast = (params) => {
	return new Promise((resolve, reject) => {
		uni.showToast({
			...params,
			mask: true,
			success(res) {
				resolve(res)
			},
			fail(err) {
				reject(err)
			}
		})
	})
}
// 显示 loading 提示框
export const showLoading = (params) => {
	return new Promise((resolve, reject) => {
		uni.showLoading({
			...params,
			success(res) {
				resolve(res)
			},
			fail(err) {
				reject(err)
			}
		})
	})
}
// 显示 loading 提示框
export const showModal = (params) => {
	return new Promise((resolve, reject) => {
		uni.showModal({
			...params,
			success(res) {
				resolve(res)
			},
			fail(err) {
				reject(err)
			}
		})
	})
}