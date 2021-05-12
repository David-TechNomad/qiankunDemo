import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import routes from './router'
import store from './store'
import {
  Table,
  TableColumn,
  Button,
  Form,
  FormItem,
  Input,
  Select,
  Option,
} from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

import './public-path'

Vue.use(Table)
Vue.use(TableColumn)
Vue.use(Button)
Vue.use(Form)
Vue.use(FormItem)
Vue.use(Input)
Vue.use(Select)
Vue.use(Option)

Vue.config.productionTip = false

Vue.use(VueRouter)

let instance, router

// 执行渲染
// 两种情况 1.在qiankun中执行  2.单独运行
function render(props) {
  router = new VueRouter({
    mode: props && props.path ? 'abstract' : 'history',
    // 运行在主应用中时，添加路由命名空间 /vue
    base: window.__POWERED_BY_QIANKUN__ ? '/vue' : '/',
    routes,
  })

  const container = props && props.container

  instance = new Vue({
    router,
    store,
    render: (h) => h(App),
  }).$mount(container ? container.querySelector('#app') : '#app')

  if (props && props.path) {
    router.push(props.path)
  }
}

if (!window.__POWERED_BY_QIANKUN__) {
  render()
}

/**
 * bootstrap 只会在微应用初始化的时候调用一次，下次微应用重新进入时会直接调用 mount 钩子，不会再重复触发 bootstrap。
 * 通常我们可以在这里做一些全局变量的初始化，比如不会在 unmount 阶段被销毁的应用级别的缓存等。
 */
export async function bootstrap() {
  console.log('VueMicroApp bootstraped')
}

/**
 * 应用每次进入都会调用mount方法
 */
export async function mount(props) {
  props.onGlobalStateChange((state) => {
    // state: 变更后的状态; prev 变更前的状态
    console.log('vue子应用', state)
  })

  console.log('vueMount props', props)

  Vue.prototype.$parentProps = props

  render(props)
}

/**
 * 应用每次 切出/卸载会调用 通常在这里卸载微应用的应用实例
 */
export async function unmount() {
  console.log('VueApp unmount')
  instance.$destroy()
  instance = null
  router = null
}

// 增加 update 钩子以便主应用手动更新微应用
export function update(props) {
  console.log('update props', props)
}
