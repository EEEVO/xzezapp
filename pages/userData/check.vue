<template>
  <view>
    <u-cell-group>
      <u-field v-model="companycode" label="统一社会信用代码" maxlength="18" @blur="getCompanyInfoByCode" placeholder="请输入统一社会信用代码" :label-width="labelWidth"></u-field>
      <u-field v-model="companyname" label="企业名称" :label-width="labelWidth" :disabled="true"></u-field>
      <u-field v-model="legalname" label="法定代表人" :label-width="labelWidth" :disabled="true"></u-field>
    </u-cell-group>
    <u-button class="btntel" :disabled="disable" @click="applyImmediate">确认，下一步</u-button>
  </view>
</template>

<script>
import { getCompanyInfoByCode } from '@/api/user.js';
import { getUserToken } from '@/utils/token.js';
export default {
  data() {
    return {
      labelWidth: 230,
      companycode: '',
      companyname: '',
      legalname: '',
      disable: false
    };
  },
  methods: {
    applyImmediate() {
      if (!this.companycode) {
        uni.showToast({ title: '请输入统一社会信用代码', icon: 'none' });
        return;
      }
      uni.navigateTo({
        url: `./checktwo?companycode=${this.companycode}&companyname=${this.companyname}&legalname=${this.legalname}`
      });
    },
    async getCompanyInfoByCode() {
      let sessionId = getUserToken();
      const res = await getCompanyInfoByCode(sessionId, this.companycode);

      if (0 == res.respcode) {
        this.companyname = res.data.companyname;
        this.legalname = res.data.legalname;
        this.disable = false;
      } else {
        uni.showToast({ title: res.respinfo, icon: 'none' });
        this.disable = true;
      }
    }
  },
  onLoad(option) {
    console.log(option);
  }
};
</script>

<style scoped lang="less">
.btntel {
  display: flex;
  width: 250upx;
  height: 70upx;
  margin: 160upx auto;
  font-size: 30upx;
}
</style>
