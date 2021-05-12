import { post } from './request'

// 获取子应用注册表
export function getAppConfig(data) {
  return post('/api/getAppConfigs', data)
}
