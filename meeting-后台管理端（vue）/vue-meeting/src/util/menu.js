import { getRequest } from './api'
export const initMenu = (router, store) => {
  if (store.state.routes.length > 0) {
    return
  }
  getRequest('/api/system/cfg/user/menus').then(data => {
    if (data) {
      //格式化router
      let fmtRoutes = formatRoutes(data)
      //添加到router
      router.addRoutes(fmtRoutes)
      //将数据存入vuex
      store.commit('initRoutes', fmtRoutes)
    }
  })
}

export const formatRoutes = routes => {
  let fmRoutes = []
  routes.forEach(router => {
    let { path, component, name, meta, icon, children } = router
    if (children && children instanceof Array) {
      //递归
      children = formatRoutes(children)
    }
    let fmRouter = {
      path: path,
      name: name,
      meta: meta,
      icon: icon,
      children: children,
      component(resolve) {
        console.log(component)
        if (component.startsWith('Home')) {
          require(['../view/' + component + '.vue'], resolve)
        } else if (component.startsWith('Per')) {
          require(['../view/per/' + component + '.vue'], resolve)
        } else if (component.startsWith('Sys')) {
          require(['../view/sys/' + component + '.vue'], resolve)
        } else if (component.startsWith('Users')) {
          require(['../view/user/' + component + '.vue'], resolve)
        } else if (component.startsWith('Index')) {
          require(['../view/index/' + component + '.vue'], resolve)
        } else if (component.startsWith('Conference')) {
          require(['../view/meeting/' + component + '.vue'], resolve)
        } else if (component.startsWith('Personal')) {
          require(['../view/personal/' + component + '.vue'], resolve)
        }
      }
    }
    fmRoutes.push(fmRouter)
  })
  return fmRoutes
}
