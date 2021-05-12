import { initGlobalState } from 'qiankun'

export const initialState = {
  name: '主应用数据',
}
const actions = initGlobalState(initialState)

export default actions
