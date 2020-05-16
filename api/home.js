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
export const requestProduct = () => {
  return http.get('requestProduct.do')
}
