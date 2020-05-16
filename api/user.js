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

/**
 * 申请历史查询
 */
export const getApplyHis = (sessionid, phone) => {
  return http.get('getApplyHis.do', {
	params: {
		sessionid
	}
  })
}

/**
 * 根据社信码查询企业工商登记信息
 */
export const getCompanyInfoByCode = (sessionid, companycode) => {
  return http.post('getCompanyInfoByCode.do', {
	sessionid,
	companycode
  })
}

/**
 * 根据社信码和法人信息核验企业身份
 */
export const checkCompany = (sessionid, companycode, companyname, legalname, legalsfzhm) => {
  return http.post('checkCompany.do', {
	sessionid,
	companycode,
	companyname,
	legalname,
	legalsfzhm
  })
}