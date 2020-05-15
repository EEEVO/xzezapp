import {
  dataStroage
} from './common.js'

const TOKEN = 'TOKEN'
const ACCOUNT_ID = 'ACCOUNT_ID'

export const setUserToken = (data) => dataStroage.setStroage(TOKEN, data)

// 获取UserToken
export const getUserToken = () => dataStroage.getStroage(TOKEN)

/**
 * 用户账户模块
 */
export const setAccountId = (data) => dataStroage.setStroage(ACCOUNT_ID, data)

export const getAccountId = () => dataStroage.getStroage(ACCOUNT_ID)
