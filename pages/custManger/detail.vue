<template>
  <view>
	  <view class="row">
	  	<text class="left">专属客户经理</text>
	  	<text class="right">张经理</text>
	  </view>
	  <view class="row">
	  	<text class="left">联系电话</text>
	  	<text class="right">18615539629</text>
	  </view>
	  <u-button class="btntel" @click="applyImmediate">联系客户经理</u-button>
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
	
	.row{
		display: flex;
		align-items: center;
		position: relative;
		margin-top: 30upx;
		padding:0 30upx;
		height: 100upx;
		background: #fff;
		font-size: 35upx;
		
		.left{
			width: 200upx;
			text-align: right;
		}
		.right{
			margin-left: 10upx;
			color: #00d3c4;
		}
	}
	.btntel{
		display: flex;
		width: 250upx;
		height: 70upx;
		margin: 160upx auto;
		font-size: 30upx;
	}
</style>
