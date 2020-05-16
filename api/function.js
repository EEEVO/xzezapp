import http from '@/utils/request.js'

/**
 * 确认授权
 */
export const applyConfirm = (sessionid, phone, verifycode) => {
  return http.get('confimBizAuthorization.do', {
    params: {
      sessionid,
	  phone,
	  verifycode
    }
  })
}

/**
 * 获取征信授权书
 */
export const getCreditAuthorization = () => {
  return http.get('getCreditAuthorization.do', {
    params: {}
  })
}

/**
 * 征信授权确认
 */
export const confimCreditAuthorization = (sessionid, phone, verifycode) => {
  return http.get('confimCreditAuthorization.do', {
    params: {
      sessionid,
	  phone,
	  verifycode
    }
  })
}