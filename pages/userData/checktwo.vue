<template>
  <view>
	  <view class="row">
	  	<text class="left">企业法人身份证号码</text>
	  	<input class="right" type="text" placeholder="请输入企业法人身份证号码" placeholder-class="placeholder"/>
	  </view>
	  <u-button class="btntel" @click="applyImmediate">确认</u-button>
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
		margin-top: 50upx;
		padding:0 20upx;
		height: 100upx;
		background: #fff;
		font-size: 30upx;
		
		.left{
			width: 270upx;
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
