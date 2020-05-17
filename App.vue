<script>
import { wxCode2Session } from '@/api/user.js';
import { setUserToken } from '@/utils/token.js';

export default {
  onLaunch() {
    console.log('App Launch');
  },
  onShow() {
    wx.login({
      success: async res => {
        if (res.code) {
          const tem = await wxCode2Session(res.code);
          // 判断当前是否绑定了手机号,如果未绑定,则需要去绑定
          console.log(tem, tem.data.phone);
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
  },
  onHide() {
    console.log('App Hide');
  }
};
</script>

<style>
/* 解决头条小程序组件内引入字体不生效的问题 */
/* #ifdef MP-TOUTIAO */
@font-face {
  font-family: uniicons;
  src: url('/static/uni.ttf');
}

/* #endif */
</style>
