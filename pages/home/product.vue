<template>
  <view class="product">
    <view class="product-header">
      <view class="product-header-title">{{ item.productname }}</view>
      <view class="product-header-btn" @click="goProductDetails">
        详 情
        <view class="icon"><image src="../../static/personalCenter/to.png" mode=""></image></view>
      </view>
    </view>
    <view class="product-main">
      <view class="product-main-interestRate">
        <view class="product-main-interestRate-num">{{ item.minrate }}~{{ item.maxrate }}</view>
        <view class="product-main-interestRate-subTitle">贷款利率</view>
      </view>
      <view class="product-main-introduction">
        <view class="product-main-introduction-money">
          企业最高贷款
          <span>{{ item.maxloan }}</span>
        </view>
        <view class="product-main-introduction-time">
          最高贷款期限
          <span>{{ item.maxterm }}</span>
        </view>
      </view>
      <view><u-button :custom-style="customStyle" size="mini" @click="applyImmediate">立即申请</u-button></view>
    </view>
  </view>
</template>

<script>
export default {
  props: {
    item: {
      type: Object,
      default() {
        // TODO:此处id预留，根据后端接口来
        return { id: '0', productname: '阳光e微贷', minrate: '4%', maxrate: '8%', maxloan: '200万元', maxterm: '1年' };
      }
    }
  },
  data() {
    return {
      customStyle: {
        fontSize: '12px'
      }
    };
  },
  methods: {
    goProductDetails() {
      uni.navigateTo({
        url: `../product/productDetail?productId=${this.item.id}`
      });
      console.log('详情');
    },
    applyImmediate() {
      uni.navigateTo({
        url: `../product/productApplication?productId=${this.item.id}`
      });
      console.log('立即申请');
    }
  }
};
</script>

<style scoped lang="less">
.product {
  width: 100%;
  background-color: #ffffff;
  height: 140px;
  margin-bottom: 30px;

  &-header {
    height: 40px;
    border-bottom: 0.5px solid #00d3c4;
    display: flex;
    justify-content: space-between;
    align-items: center;
    box-sizing: border-box;
    padding: 0 20px;
    &-title {
      font-size: 14px;
      font-weight: 700;
    }
    &-btn {
      display: flex;
      align-items: center;
      font-size: 14px;
      color: #00d3c4;
      .icon {
        flex-shrink: 0;
        width: 14px;
        height: 14px;
        image {
          width: 14px;
          height: 14px;
        }
      }
    }
  }
  &-main {
    height: 100px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    box-sizing: border-box;
    padding: 0 20px;
    &-interestRate {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: space-evenly;
      &-num {
        color: red;
        font-size: 24px;
      }
      &-subTitle {
        font-size: 13px;
        color: #00d3c4;
      }
    }
    &-introduction {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: space-evenly;
      view {
        font-size: 14px;
        color: #00d3c4;
        span {
          color: #333333;
        }
      }
    }
  }
}
</style>
