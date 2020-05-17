import {
  dataStroage
} from './common.js'
import {
  wxCode2Session
} from '@/api/user.js'

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


/**
 * 自动登录
 */
export const login = () => wx.login({
  async success(res) {
    if (res.code) {
      const tem = await wxCode2Session(res.code);
      if (tem.respcode === 0) {
        setUserToken(tem.data.sessionid);
      } else {
        uni.showToast({
          title: tem.respinfo
        });
      }
    } else {
      console.log('登录失败！' + res.errMsg);
    }
  }
});
