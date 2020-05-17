<template>
  <view class="content">
    <!-- 头部logo -->
    <view class="header"></view>
    <!-- 主体表单 -->
    <view class="main">
      <wInput v-model="phoneData" type="text" maxlength="11" placeholder="手机号"></wInput>
      <wInput v-model="verCode" type="number" maxlength="6" placeholder="验证码" isShowCode codeText="获取验证码" setTime="30" ref="runCode" @setCode="getVerCode"></wInput>
    </view>
    <wButton type="default" text="绑定手机" :rotate="isRotate" @click.native="startLogin" class="wbutton"></wButton>
  </view>
</template>

<script>
import wInput from '@/components/watch-login/watch-input.vue'; //input
import wButton from '@/components/watch-login/watch-button.vue'; //button
import { regExpObj } from '@/utils/common.js';
import { getUserToken, setUserToken, setAccountId } from '@/utils/token.js';
import { sendVerificationCode, bindPhone } from '@/api/user.js';

export default {
  components: {
    wInput,
    wButton
  },
  data() {
    return {
      //logo图片 base64
      logoImage: '',
      phoneData: '', //用户/电话
      verCode: '', //验证码
      isRotate: false //是否加载旋转
    };
  },

  methods: {
    //自定义事件
    async getVerCode() {
      if (!regExpObj.regExpPhone(this.phoneData)) {
        uni.showToast({
          icon: 'none',
          position: 'bottom',
          title: '手机号格式不正确'
        });
        return;
      }
      //获取验证码
      this.$refs.runCode.$emit('runCode');
      const res = await sendVerificationCode(this.phoneData);
      // 终止倒计时（用于突然需要终止倒计时的场景）
      // this.$refs.runCode.$emit('runCode', 0);
    },
    async startLogin() {
      //登录
      if (this.isRotate) {
        //判断是否加载中，避免重复点击请求
        return false;
      }
      if (!regExpObj.regExpPhone(this.phoneData)) {
        uni.showToast({
          icon: 'none',
          position: 'bottom',
          title: '手机号格式不正确'
        });
        return;
      }
      if (this.verCode.length !== 6) {
        uni.showToast({
          icon: 'none',
          position: 'bottom',
          title: '验证码未输入'
        });
        return;
      }
      this.isRotate = true;
      const res = await bindPhone(getUserToken(), this.phoneData, this.verCode);
      if (res.respcode === 0) {
        this.isRotate = false;
        uni.showToast({
          position: 'bottom',
          title: '绑定成功'
        });
        uni.navigateBack();
      }
    }
    // login_weixin() {
    //   //微信登录
    //   uni.showToast({
    //     icon: 'none',
    //     position: 'bottom',
    //     title: '...'
    //   });
    // }
  }
};
</script>

<style scoped lang="less">
@import url('@/styles/index.less');

.content {
  display: flex;
  flex-direction: column;
  justify-content: center;

  /* 头部 logo */
  .header {
    width: 161upx;
    height: 120upx;
    margin-top: 128upx;
    margin-bottom: 72upx;
    margin-left: auto;
    margin-right: auto;
  }

  /* 主体 */
  .main {
    display: flex;
    flex-direction: column;
    padding-left: 70upx;
    padding-right: 70upx;
  }

  /* 其他登录方式 */
  .other_login {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    margin-top: 256upx;
    text-align: center;
    .login_icon {
      border: none;
      font-size: 64upx;
      margin: 0 64upx 0 64upx;
      color: rgba(@mainBgColor, 0.9);
    }
  }

  /* 登录按钮 */
  .wbutton {
    margin-top: 96upx;
  }
}
</style>
