import http from '@/utils/request.js'

/**
 * 获取业务授权书内容
 */
export const getBizAuthorization = () => {
  return http.get('getBizAuthorization.do', {
    params: {}
  })
}

/**
 * 业务授权确认
 */
export const confimBizAuthorization = (sessionid, phone, verifycode) => {
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


/**
 * 查询专属客户经理信息
 */
export const getSalesman = (sessionid) => {
  return http.post('getSalesman.do', {
    sessionid
  })
}
