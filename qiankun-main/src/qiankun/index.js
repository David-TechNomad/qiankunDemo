import NProgress from 'nprogress'
import 'nprogress/nprogress.css'
import {
  registerMicroApps,
  start,
  addGlobalUncaughtErrorHandler,
} from 'qiankun'

function registerQiankun(childApps) {
  registerMicroApps(childApps, {
    // qiankun 生命周期钩子 - 加载前
    beforeLoad: () => {
      NProgress.start()
      return Promise.resolve()
    },
    // qiankun 生命周期钩子 - 挂载后
    afterMount: () => {
      NProgress.done()
      return Promise.resolve()
    },
  })
}

addGlobalUncaughtErrorHandler((event) => {
  console.log('异常处理', event)

  const { message } = event
  // 加载失败时提示
  if (message && message.includes('died in status LOADING_SOURCE_CODE')) {
    console.error('子应用加载失败，请检查应用是否可运行')
  }
})

export { start, registerQiankun }
