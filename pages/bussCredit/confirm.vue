<template>
  <view class="main">
    业务授权书
	业务授权书业务授权书业务授权书业务授权书业务授权书业务授权书
    <view class="footer"><u-button @click="applyImmediate">确认</u-button></view>
  </view>
</template>

<script>
export default {
  data() {
    return {
      customStyle: {
        fontSize: '12px'
      }
    };
  },
  methods: {
    applyImmediate() {
      console.log('立即申请');
    }
  },
  onLoad(option) {
    console.log(option);
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
