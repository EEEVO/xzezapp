<template>
  <view class="content">
    <u-swiper :list="list"></u-swiper>
    <product></product>
  </view>
</template>

<script>
import product from './product';
export default {
  components: {
    product
  },
  data() {
    return {
      customStyle: {
        fontSize: '12px'
      },
      list: [
        {
          image: '/static/uView/1.jpeg',
          title: '蒹葭苍苍，白露为霜。所谓伊人，在水一方'
        },
        {
          image: '/static/uView/2.jpeg',
          title: '溯洄从之，道阻且长。溯游从之，宛在水中央'
        },
        {
          image: '/static/uView/3.jpeg',
          title: '蒹葭萋萋，白露未晞。所谓伊人，在水之湄'
        }
      ]
    };
  },

  methods: {
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
