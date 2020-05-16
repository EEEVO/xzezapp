<template>
  <view>
	  <view class="row">
	  	<text class="left">统一社会信用代码</text>
	  	<input class="right" type="text" @blur="getCompanyInfoByCode" v-model="companycode" placeholder="请输入统一社会信用代码" placeholder-class="placeholder"/>
	  </view>
	  <view class="row">
	  	<text class="left">企业名称</text>
	  	<text class="right">{{companyname}}</text>
	  </view>
	  <view class="row">
	  	<text class="left">法定代表人</text>
	  	<text class="right">{{legalname}}</text>
	  </view>
	  <u-button class="btntel" :disabled="disable" @click="applyImmediate">确认，下一步</u-button>
  </view>
</template>

<script>
import { getCompanyInfoByCode } from '@/api/user.js';
export default {
  data() {
    return {
      customStyle: {
        fontSize: '12px'
      },
	  companycode: '',
	  companyname:'',
	  legalname:'',
	  disable:false
    };
  },
  methods: {
    applyImmediate() {
		if(!this.companycode){
			uni.showToast({ title: '请输入统一社会信用代码', icon: 'none' });
			return;
		}
		uni.navigateTo({
		    url: `./checktwo?companycode=${this.companycode}&companyname=${this.companyname}&legalname=${this.legalname}`
	    });
    },
	async getCompanyInfoByCode() {
		const res = await getCompanyInfoByCode('2d34d7b18cf62de6547adde3ea992ae2', this.companycode);
		
		if(0 == res.respcode){
			this.companyname = res.data.companyname;
			this.legalname = res.data.legalname;
			this.disable = false;
		}else{
			uni.showToast({ title: res.respinfo, icon: 'none' });
			this.disable = true;
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
		margin-top: 50upx;
		padding:0 20upx;
		height: 100upx;
		background: #fff;
		font-size: 30upx;
		
		.left{
			width: 250upx;
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
