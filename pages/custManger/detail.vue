<template>
  <view>
    <view v-if="hasManger">
      <u-cell-group>
        <u-cell-item title="专属客户经理" :value="mangerName" :arrow="false"></u-cell-item>
        <u-cell-item title="联系电话" :value="mangerTel" :arrow="false"></u-cell-item>
      </u-cell-group>
      <view class="footer"><u-button @click="telManger">联系客户经理</u-button></view>
    </view>
    <view v-else>
      <view class="unapply">您未申请贷款产品，暂无专属客户经理</view>
      <button class="btntel" @click="applyNow">现在申请贷款</button>
    </view>
  </view>
</template>

<script>
import { getSalesman } from '@/api/function.js';
import { getUserToken } from '@/utils/token.js';
export default {
  data() {
    return {
      customStyle: {
        fontSize: '12px'
      },
      mangerName: '',
      mangerTel: '',
      hasManger: false
    };
  },
  methods: {
    telManger() {
      uni.makePhoneCall({
        phoneNumber: this.mangerTel
      });
    },
    async getSalesman() {
      let sessionId = getUserToken();
      const res = await getSalesman(sessionId);
      if (0 == res.respcode) {
        this.mangerName = res.data.name;
        this.mangerTel = res.data.phone;
        this.hasManger = true;
      } else {
        this.hasManger = false;
        // uni.showToast({ title: res.respinfo, icon: 'none' });
      }
    },
    applyNow() {
      uni.switchTab({
        url: '/pages/home/index'
      });
    }
  },
  onLoad(option) {
    this.getSalesman();
  }
};
</script>

<style scoped lang="less">
@import '../../styles/index.less';

.btntel {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 250upx;
  height: 80upx;
  margin-top: 150upx;
  font-size: 32upx;
  background-color: @base5;
  color: #fff;
}

.unapply {
  display: flex;
  align-items: center;
  font-size: 35upx;
  margin-top: 150upx;
  justify-content: center;
}

.footer {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 40px 0;
}
</style>
