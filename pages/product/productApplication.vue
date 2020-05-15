<template>
  <view class="main">
    <view>
      <u-cell-group>
        <u-field v-model="mobile" label="统一社会信用代码" :label-width="labelWidth"></u-field>
        <u-field v-model="code" label="公司名称" :label-width="labelWidth"></u-field>
        <u-field v-model="code" label="法定代表人" :label-width="labelWidth"></u-field>
        <u-field v-model="code" label="法定身份证号码" :label-width="labelWidth"></u-field>
        <u-field v-model="code" label="手机号码" :label-width="labelWidth"></u-field>
        <u-field v-model="code" label="验证码" placeholder="请填写验证码" :label-width="labelWidth">
          <u-button size="mini" slot="button" type="success" :custom-style="customStyle" @tap="getCode">{{ codeText }}</u-button>
        </u-field>
        <u-verification-code ref="uCode" @change="codeChange"></u-verification-code>
        <u-field v-model="code" label="拟融资额度(万元)" :label-width="labelWidth"></u-field>
        <u-field @click="showAction" v-model="sex" :disabled="true" label="担保方式" placeholder="请选择担保方式" right-icon="arrow-down-fill" :label-width="labelWidth"></u-field>
        <u-field v-model="code" label="选择办理机构" :label-width="labelWidth"></u-field>
      </u-cell-group>
      <u-action-sheet @click="clickItem" :list="sexList" v-model="show"></u-action-sheet>
    </view>
    <view class="footer"><u-button @click="applyImmediate">提交</u-button></view>
  </view>
</template>

<script>
import { getUserToken } from '@/utils/token.js';

export default {
  data() {
    return {
      labelWidth: 230,

      isLogin: false, // 当前是否登录
      customStyle: {
        fontSize: '12px',
        whiteSpace: 'nowrap'
      },
      // 担保方式
      sex: '',
      sexList: [
        {
          text: '担保方式1'
        },
        {
          text: '担保方式2'
        },
        {
          text: '担保方式3'
        }
      ],
      show: false,
      // 验证码
      code: '',
      codeText: '发送验证码'
    };
  },
  mounted() {
    this.isLogin = getUserToken() ? true : false;
  },
  methods: {
    codeChange(text) {
      this.codeText = text;
    },
    applyImmediate() {
      console.log('立即申请');
    },
    getCode() {
      if (this.$refs.uCode.canGetCode) {
        // 模拟向后端请求验证码
        uni.showLoading({
          title: '正在获取验证码'
        });
        setTimeout(() => {
          uni.hideLoading();
          // 通知验证码组件内部开始倒计时
          this.$refs.uCode.start();
        }, 1000);
      } else {
        this.$u.toast('倒计时结束后再发送');
      }
    },
    showAction() {
      this.show = true;
    },
    clickItem(index) {
      this.sex = this.sexList[index].text;
    }
  },
  onLoad(option) {
    console.log(option);
  }
};
</script>

<style scoped lang="less">
.main {
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  /deep/ .fild-body {
    justify-content: space-between;
  }
  .footer {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 40px 0;
  }
}
</style>
