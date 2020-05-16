<template>
	<view class="content">
		<view class="row">
			<text class="tit">手机号</text>
			<input class="input" type="text" placeholder="请输入手机号码" placeholder-class="placeholder"/>
		</view>
		<view class="row">
			<text class="tit">验证码</text>
			<input class="input" type="text" placeholder="请输入验证码" placeholder-class="placeholder"/>
			<button class="btnvercode">获取验证码</button>
		</view>
		<u-button class="btnconfirm" @click="applyConfirm">确认授权</u-button>
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
    applyConfirm() {
      uni.navigateTo({
        url: `confirm`
      });
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
		padding:0 30upx;
		height: 110upx;
		background: #fff;
		
		.tit{
			flex-shrink: 0;
			width: 120upx;
			font-size: 30upx;
			color: #303133;
		}
		.input{
			flex: 1;
			font-size: 30upx;
			color: #303133;
		}
		.btnvercode{
			display: flex;
			align-items: center;
			justify-content: center;
			width: 220upx;
			height: 70upx;
			margin: 60upx auto;
			font-size: 30upx;
		}
	}
	.btnconfirm{
		display: flex;
		align-items: center;
		justify-content: center;
		width: 220upx;
		height: 80upx;
		margin: 60upx auto;
		font-size: 30upx;
		color: #fff;
	}
</style>