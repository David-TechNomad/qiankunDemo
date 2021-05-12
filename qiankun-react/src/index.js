import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import './public-path'
import * as serviceWorker from './serviceWorker'

function render(props) {
  const { container } = props
  ReactDOM.render(
    <App />,
    container
      ? container.querySelector('#root')
      : document.querySelector('#root')
  )
}

function storeTest(props) {
  props.onGlobalStateChange(
    (value, prev) =>
      console.log(`[onGlobalStateChange - ${props.name}]:`, value, prev),
    true
  )
  props.setGlobalState({
    ignore: props.name,
    user: {
      name: props.name,
    },
  })
}

if (!window.__POWERED_BY_QIANKUN__) {
  render({})
}

export async function bootstrap() {
  console.log('[react16] react app bootstraped')
}

export async function mount(props) {
  console.log('[react16] mount', props)
  storeTest(props)
  render(props)
}

export async function unmount(props) {
  const { container } = props
  ReactDOM.unmountComponentAtNode(
    container
      ? container.querySelector('#root')
      : document.querySelector('#root')
  )
}

/**
 * 可选生命周期钩子，仅使用 loadMicroApp 方式加载微应用时生效
 */
export async function update(props) {
  console.log('update props', props)
}

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
