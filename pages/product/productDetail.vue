<template>
  <view class="main">
    <view v-html="producthtml"></view>
    <view class="footer"><u-button @click="applyImmediate">立即申请</u-button></view>
  </view>
</template>

<script>
import { getProductContent } from '@/api/home.js';
export default {
  data() {
    return {
      customStyle: {
        fontSize: '12px'
      },
      productId: '',
      producthtml: ''
    };
  },
  methods: {
    async getProductContent() {
      const res = await getProductContent(this.productId);
      this.producthtml = res.data.producthtml;
    },
    applyImmediate() {
      uni.navigateTo({
        url: `./productApplication?productId=${this.productId}`
      });
    }
  },
  onLoad(option) {
    console.log(option);
    this.productId = option.productId;
    this.getProductContent();
  }
};
</script>

<style scoped lang="less">
.main {
  min-height: 100vh;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  align-items: center;
  .footer {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 40px;
  }
}
</style>
