import http from '@/utils/request.js'

/**
 * 查看设备 人员详情
 * @param {string} device_id 设备ID
 */
export const deviceDetail = (device_id) => {
  return http.get('v1/mine/deviceDetail', {
    params: {
      device_id
    }
  })
}