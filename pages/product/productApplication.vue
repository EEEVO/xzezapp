<template>
  <view class="main">
    <view>
      <u-cell-group>
        <u-field v-model="companycode" label="统一社会信用代码" maxlength="18" @blur="getCompanyInfoByCode" :label-width="labelWidth"></u-field>
        <u-field v-model="companyname" label="公司名称" :label-width="labelWidth" :disabled="true"></u-field>
        <u-field v-model="legalname" label="法定代表人" :label-width="labelWidth" :disabled="true" disabled></u-field>
        <u-field v-model="legalsfzhm" label="法定身份证号码" maxlength="18" :label-width="labelWidth"></u-field>
        <u-field v-model="phone" label="手机号码" maxlength="11" :label-width="labelWidth"></u-field>
        <u-field v-model="code" label="验证码" placeholder="请填写验证码" :label-width="labelWidth">
          <u-button size="mini" slot="button" type="success" :custom-style="customStyle" @tap="getCode">{{ codeText }}</u-button>
        </u-field>
        <u-verification-code ref="uCode" @change="codeChange"></u-verification-code>
        <u-field v-model="loanamount" label="拟融资额度(万元)" :label-width="labelWidth"></u-field>
        <u-field
          @click="showAction('guarantee', 'DBFSList')"
          v-model="guarantee"
          :disabled="true"
          label="担保方式"
          placeholder="请选择担保方式"
          right-icon="arrow-down-fill"
          :label-width="labelWidth"
        ></u-field>
        <u-field
          @click="showAction('servicehall', 'YWWDList')"
          v-model="servicehall"
          :disabled="true"
          label="担保机构"
          placeholder="请选择担保机构"
          right-icon="arrow-down-fill"
          :label-width="labelWidth"
        ></u-field>
      </u-cell-group>
      <u-action-sheet @click="clickItem" :list="selectList" v-model="show"></u-action-sheet>
    </view>
    <view class="footer"><u-button @click="applyImmediate">提交</u-button></view>
  </view>
</template>

<script>
import { getUserToken } from '@/utils/token.js';
import { getBindCompanyInfo, requestProduct, getCompanyInfoByCode, checkCompany, getSelectorOption } from '@/api/home.js';

export default {
  data() {
    return {
      labelWidth: 230,
      customStyle: {
        fontSize: '12px',
        whiteSpace: 'nowrap'
      },
      productId: '',
      selectKey: '',
      selectList: [
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
      DBFSList: [], // 担保方式
      YWWDList: [], // 办理网点
      show: false,
      // 验证码
      codeText: '发送验证码',
      /**
       * 表单信息
       */
      companycode: '',
      companyname: '',
      legalname: '',
      legalsfzhm: '',
      phone: '',
      code: '',
      loanamount: '',
      guarantee: '',
      servicehall: ''
    };
  },
  mounted() {
    this.getBindCompanyInfo();
    this.getSelectorOption();
  },
  methods: {
    async getBindCompanyInfo() {
      const res = await getBindCompanyInfo(getUserToken());
      if (res.respcode === 0) {
        if (res.data.length > 0) {
          this.companycode = res.data[0].companycode;
          this.companyname = res.data[0].companyname;
          this.legalname = res.data[0].legalname;
          this.legalsfzhm = res.data[0].legalsfzhm;
          this.phone = res.data[0].phone;
        }
      } else {
        uni.showToast({
          title: res.respinfo
        });
      }
    },
    async getSelectorOption() {
      const res = await getSelectorOption('DBFS,YWWD');
      this.DBFSList = res.data.DBFS;
      this.YWWDList = res.data.YWWD;
    },
    codeChange(text) {
      this.codeText = text;
    },
    async applyImmediate() {
      const res = await requestProduct(
        getUserToken(),
        this.productId,
        this.companycode,
        this.companyname,
        this.legalname,
        this.legalsfzhm,
        this.phone,
        this.code,
        this.loanamount,
        this.guarantee,
        this.servicehall
      );
      if (res.respcode === 0) {
        uni.showToast({
          title: '您的申请已提交，客户经理会与您取得联系'
        });
        setTimeout(() => uni.navigateBack(), 2000);
      } else {
        uni.showToast({
          icon: 'error',
          title: res.respinfo
        });
      }
    },
    async getCompanyInfoByCode() {
      const res = await getCompanyInfoByCode(getUserToken(), this.companycode);
      this.companyname = res.data.companyname;
      this.legalname = res.data.legalname;
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
    showAction(parma, arrName) {
      this.show = true;
      this.selectKey = parma;
      this.selectList = this[arrName];
    },
    clickItem(index) {
      this[this.selectKey] = this.selectList[index].text;
    }
  },
  onLoad(option) {
    this.productId = option.productId;
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
    /deep/ .u-flex-1 {
      flex: 1;
    }
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
