<template>
  <view>
	  <view v-if="hasManger">
		  <view class="row">
		  	<text class="left">专属客户经理</text>
		  	<text class="right">{{mangerName}}</text>
		  </view>
		  <view class="row">
		  	<text class="left">联系电话</text>
		  	<text class="right">{{mangerTel}}</text>
		  </view>
		  <button class="btntel" @click="telManger">联系客户经理</button>
	  </view>
	  <view v-else>
		  <view class="unapply">您未申请贷款产品，暂无专属客户经理</view>
		  <button class="btntel"  @click="applyNow">现在申请贷款</button>
	  </view>
  </view>
</template>

<script>
import { getSalesman } from '@/api/function.js';
import { getUserToken } from '@/utils/token.js';
export default {
  data() {
    return {
      customStyle: {
        fontSize: '12px'
      },
	  mangerName: '',
	  mangerTel: '',
	  hasManger: false
    };
  },
  methods: {
    telManger() {
	  uni.makePhoneCall({
	      phoneNumber: this.mangerTel
	  });
    },
	async getSalesman(){
		let sessionId = getUserToken();
		const res = await getSalesman(sessionId);
		if(0 == res.respcode){
			this.mangerName = res.data.name;
			this.mangerTel = res.data.phone;
			this.hasManger = true;
		}else{
			this.hasManger = false;
			// uni.showToast({ title: res.respinfo, icon: 'none' });
		}
	},
	applyNow() {
		uni.switchTab({
			url: '/pages/home/index'
		});
	},
  },
  onLoad(option) {
    this.getSalesman();
  }
};
</script>

<style scoped lang="less">
	@import "../../styles/index.less";
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
			color: @base5;
		}
	}
	.btntel{
		display:flex;
		justify-content: center;
		align-items: center;
		width: 250upx;
		height: 80upx;
		margin-top: 150upx;
		font-size: 32upx;
		background-color: @base5;
		color: #fff;
	}
	
	.unapply{
		display: flex;
		align-items: center;
		font-size: 35upx;
		margin-top: 150upx;
		justify-content: center;
	}
</style>
