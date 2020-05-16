<template>
	<view class="content">
		<view class="row">
			<text class="tit">手机号</text>
			<input class="input" v-model="phoneNo" type="text" placeholder="请输入手机号码" placeholder-class="placeholder"/>
		</view>
		<view class="row">
			<text class="tit">验证码</text>
			<input class="input" type="text" v-model="verifyCode" placeholder="请输入验证码" placeholder-class="placeholder"/>
			<button class="btnvercode" @click="sendCode">获取验证码</button>
		</view>
		<u-button class="btnconfirm" @click="applyConfirm">确认授权</u-button>
	</view>
</template>

<script>
import { sendVerificationCode } from '@/api/user.js';
import { applyConfirm } from '@/api/function.js';
export default {
  data() {
    return {
      customStyle: {
        fontSize: '12px'
      },
	  phoneNo: '', //手机号码
	  verifyCode: ''
    };
  },
  methods: {
    async applyConfirm() {
		if(!this.phoneNo){
			uni.showToast({ title: '请输入手机号码', icon: 'none' });
			return;
		}
		if(!this.verifyCode){
			uni.showToast({ title: '请输入短信验证码', icon: 'none' });
			return;
		}
		const res = await applyConfirm('2d34d7b18cf62de6547adde3ea992ae2', this.phoneNo, this.verifyCode);
		if(0 == res.respcode){
			let url = 'confirm?phoneNo=' + this.phoneNo + '&verifyCode=' + this.verifyCode;
			uni.navigateTo({
			  url: url
			});
		}else{
			uni.showToast({ title: res.respinfo, icon: 'none' });
		}
    },
	async sendCode() {
		if(!this.phoneNo){
			uni.showToast({ title: '请输入手机号码', icon: 'none' });
			return;
		}
		const res = await sendVerificationCode('2d34d7b18cf62de6547adde3ea992ae2', this.phoneNo);
		if(0 == res.respcode){
			uni.showToast({ title: '发送成功', icon: 'none' });
		}else{
			uni.showToast({ title: res.respinfo, icon: 'none' });
		}
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