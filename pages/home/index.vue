<template>
  <view class="content">
    <u-swiper :list="list"></u-swiper>
    <product v-for="(item, index) of productList" :key="index" :item="item"></product>
  </view>
</template>

<script>
import product from './product';
import { getProductPicList, getProductList } from '@/api/home.js';
export default {
  components: {
    product
  },
  data() {
    return {
      lunboPic: 'https://www.haimadata.cn/abcxzez/api/getPicture.do?pictureid=',
      customStyle: {
        fontSize: '12px'
      },
      list: [
        {
          image: '/static/uView/1.jpeg'
        },
        {
          image: '/static/uView/2.jpeg'
        },
        {
          image: '/static/uView/3.jpeg'
        }
      ],
      productList: []
    };
  },
  onShow() {
    this.getProductPicList();
    this.getProductList();
  },
  methods: {
    async getProductPicList() {
      const res = await getProductPicList();
      this.list = res.data.map(item => {
        return {
          image: `${this.lunboPic}${item}`
        };
      });
    },
    async getProductList() {
      const res = await getProductList();
      this.productList = res.data;
    },
    goProductDetails() {
      console.log('详情');
    }
  }
};
</script>

<style scoped lang="less">
.content {
  min-height: 100vh;
  background-color: #f0f0f0;
}
</style>
