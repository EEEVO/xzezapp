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

export const getApplyHis = (sessionid, phone) => {
  return http.get('getApplyHis.do', {
	params: {
		sessionid
	}
  })
}