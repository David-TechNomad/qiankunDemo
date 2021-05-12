import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'assets/css/normalize.css'
import 'assets/css/common.css'
import {
  Container,
  Header,
  Aside,
  Main,
  Menu,
  Submenu,
  MenuItem,
  MenuItemGroup,
  Button,
  Message,
  Dialog,
  Loading,
} from 'element-ui'
import { registerQiankun } from './qiankun'
import { start, runAfterFirstMounted, setDefaultMountApp } from 'qiankun'
import { mockXHR } from '@/mock'
import { getAppConfig } from '@/api/menu'
import actions from '@/qiankun/share'
const { name } = require('../package.json')

const repoInfo = JSON.parse(process.env.VUE_APP_REPO_INFO)

localStorage.setItem('ACTIVATED_UI_THEME', 1)

console.groupCollapsed(name)
console.log('%c commitMessage: ' + repoInfo.commitMessage, 'color: blue')
console.groupEnd()

mockXHR()

Vue.config.productionTip = false

Vue.prototype.$actions = actions

// 异步加载子应用

// startQiankun()

Vue.use(Container)
Vue.use(Header)
Vue.use(Aside)
Vue.use(Main)
Vue.use(Menu)
Vue.use(Submenu)
Vue.use(MenuItem)
Vue.use(MenuItemGroup)
Vue.use(Button)
Vue.use(Dialog)
Vue.use(Loading)

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#main-app')

getAppConfig()
  .then(({ data }) => {
    store.commit('setMenu', data)
    if (data.length === 0) {
      return Message({
        type: 'error',
        message: '没有可以注册的子应用数据',
      })
    }

    const isDev = process.env.NODE_ENV === 'development'
    let defaultApp

    const childApps = []

    data.forEach((item) => {
      childApps.push({
        name: item.id,
        entry: isDev ? item.devEntry : item.depEntry,
        container: item.container,
        activeRule: item.routerBase,
        props: {
          age: 'SMegalo',
          routes: item.children,
          baseParams: item.baseParams,
          systemParams: item.systemParams,
        },
      })

      if (item.isDefault) {
        defaultApp = item.routerBase
      }

      if (!defaultApp) defaultApp = data[0].routerBase
    })

    registerQiankun(childApps)

    // setDefaultMountApp(defaultApp)

    runAfterFirstMounted((app) => {
      console.log('第一个子应用加载完毕', app)
    })

    start({
      getTemplate(tpl) {
        return tpl
          .replace(
            /<script src=https:\/\/hm\.baidu\.com\/hm\.js(.*)><\/script>/,
            ''
          )
          .replace(
            '<script src="https://api.map.baidu.com/api?v=3.0&ak=MjiM72HyPvFibsfX3gMeIBqwNDxh57YK"></script>',
            ''
          )
      },
    })
  })
  .catch()
