// 状态位valid来表示当前函数是否处于工作状态 let valid = true
let valid = true // true不处于,false反之
// 节流函数
export default function throttle(fn, delay, key) {
  // 运用了节流技术
  if (!valid) {
    // 休息时间,不触发
    return false
  }
  // 工作时间,把状态设置为无效,并执行回调
  valid = false
  setTimeout(() => {
    fn(key)
    valid = true
  }, delay)
}