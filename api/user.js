import http from '@/utils/request.js'

/**
 * 发送短信验证码
 * @param {Object} phone
 */
export const sendVerificationCode = (sessionid, phone) => {
  return http.get('sendVerificationCode.do', {
    params: {
      sessionid,
      phone
    }
  })
}

export const wxCode2Session = (code) => {
  return http.post('wxCode2Session.do', {
    code
  })
}
