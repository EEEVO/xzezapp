import http from '@/utils/request.js'

/**
 * 获取轮播图
 */
export const getProductPicList = () => {
  return http.get('getProductPicList.do')
}

/**
 * 获取一张图片数据
 */
export const getPrcture = () => {
  return http.get('getPrcture.do')
}

/**
 * 获取产品页产品列表
 */
export const getProductList = () => {
  return http.get('getProductList.do')
}

/**
 * 获取产品详情内容
 */
export const getProductContent = (productid) => {
  return http.get('getProductContent.do', {
    params: {
      productid
    }
  })
}

/**
 * 产品申请
 */
export const requestProduct = (sessionid,
  productid,
  companycode,
  companyname,
  legalname,
  legalsfzhm,
  phone,
  verifycode,
  loanamount,
  guarantee,
  servicehall, ) => {
  return http.get('requestProduct.do', {
    params: {
      sessionid,
      productid,
      companycode,
      companyname,
      legalname,
      legalsfzhm,
      phone,
      verifycode,
      loanamount,
      guarantee,
      servicehall,
    }
  })
}

/**
 * 查询关联的已核验企业信息
 */
export const getBindCompanyInfo = (sessionid) => {
  return http.get('getBindCompanyInfo.do', {
    params: {
      sessionid
    }
  })
}

/**
 * 根据社信码查询企业工商登记信息
 */
export const getCompanyInfoByCode = (sessionid, companycode) => {
  return http.get('getCompanyInfoByCode.do', {
    params: {
      sessionid,
      companycode
    }
  })
}

/**
 * 根据社信码查询企业工商登记信息
 * @param {type}  sessionid 
 * @param {type}  companycode 企业统一社会信用代码
 * @param {type}  companyname 企业名称
 * @param {type}  legalname 法人姓名
 * @param {type}  legalsfzhm 法人身份证号
 */
export const checkCompany = (sessionid, companycode, companyname, legalname, legalsfzhm) => {
  return http.get('checkCompany.do', {
    params: {
      sessionid,
      companycode,
      companyname,
      legalname,
      legalsfzhm
    }
  })
}

/**
 * 查询下拉列表备选项
 */
export const getSelectorOption = (dmbh) => {
  return http.get('getSelectorOption.do', {
    params: {
      dmbh
    }
  })
}
