<template>
  <view>
    <u-cell-group><u-field v-model="legalsfzhm" label="企业法人身份证号码" maxlength="18" placeholder="请输入企业法人身份证号码" :label-width="labelWidth"></u-field></u-cell-group>
    <u-button class="btntel" @click="applyImmediate">确认</u-button>
  </view>
</template>

<script>
import { checkCompany } from '@/api/user.js';
import { getUserToken } from '@/utils/token.js';
export default {
  data() {
    return {
      labelWidth: 270,
      companycode: '',
      companyname: '',
      legalname: '',
      legalsfzhm: '',
      disable: false
    };
  },
  methods: {
    async applyImmediate() {
      if (!this.legalsfzhm) {
        uni.showToast({ title: '请输入企业法人身份证号码', icon: 'none' });
        return;
      }
      let sessionId = getUserToken();
      const res = await checkCompany(sessionId, this.companycode, this.companyname, this.legalname, this.legalsfzhm);
      if (0 == res.respcode) {
        uni.showToast({ title: '核验成功', icon: 'none' });
        setTimeout(
          () =>
            uni.switchTab({
              url: '../my/index'
            }),
          1000
        );
      } else {
        uni.showToast({ title: res.respinfo, icon: 'none' });
      }
    }
  },
  onLoad(option) {
    this.companycode = option.companycode;
    this.companyname = option.companyname;
    this.legalname = option.legalname;
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
