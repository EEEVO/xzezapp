<template>
  <view>
	  <view class="row">
	  	<text class="left">企业法人身份证号码</text>
	  	<input class="right" type="text" v-model="legalsfzhm" placeholder="请输入企业法人身份证号码" placeholder-class="placeholder"/>
	  </view>
	  <u-button class="btntel" @click="applyImmediate">确认</u-button>
  </view>
</template>

<script>
import { checkCompany } from '@/api/user.js';
export default {
  data() {
    return {
      customStyle: {
        fontSize: '12px'
      },
	  companycode: '',
	  companyname:'',
	  legalname:'',
	  legalsfzhm: '',
	  disable: false
    };
  },
  methods: {
    async applyImmediate() {
		if(!this.legalsfzhm){
			uni.showToast({ title: '请输入企业法人身份证号码', icon: 'none' });
			return;
		}
		const res = await checkCompany('2d34d7b18cf62de6547adde3ea992ae2', this.companycode, this.companyname, this.legalname, this.legalsfzhm);
		if(0 == res.respcode){
			uni.showToast({ title: '核验成功', icon: 'none' });
		}else{
			uni.showToast({ title: res.respinfo, icon: 'none' });
		}
    }
  },
  onLoad(option) {
	  this.companycode = option.companycode;
	  this.companyname = option.companyname;
	  this.legalname = option.legalname;
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
