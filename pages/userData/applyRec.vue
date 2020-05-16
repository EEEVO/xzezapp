<template>
  <view class="recontent">
	<view class="row" v-for="(li, li_i) in severList">
		<view class="signrow">
			<text class="left">产品名称</text>
			<text class="right">{{ li.productname }}</text>
		</view>
		<view class="signrow">
			<text class="left">申请日期</text>
			<text class="right">{{ li.applydate }}</text>
		</view>
		<view class="signrow">
			<text class="left">当前状态</text>
			<text class="right">{{ li.status }}</text>
		</view>
		<view class="signrow">
			<text class="left">需求描述</text>
			<text class="right">{{ li.descr }}</text>
		</view>
	</view>
  </view>
</template>

<script>
import { getApplyHis } from '@/api/user.js';
export default {
  data() {
    return {
      current: 0,
	  severList: []
    };
  },
  methods: {
	  async getApplyHis() {
		  const res = await getApplyHis('2d34d7b18cf62de6547adde3ea992ae2');
		  console.log(res);
		  if(0 == res.respcode){
			 this.severList = res.data;
		  }else{
			uni.showToast({ title: res.respinfo, icon: 'none' });
		  }
	  }
  },
  onLoad(option){
	  this.getApplyHis();
  }
};
</script>

<style scoped lang="less">
	.recontent{
		display: flex;
		flex-wrap:wrap;
		justify-content:center;
		align-items: center;
		background: #f1f1f1;
		font-size: 30upx;
		
		.row{
			width: 98%;
			margin-top: 20upx;
			background: #fff;
			padding: 20upx;
			
			.signrow{
				display: flex;
				padding:0 30upx;
				height: 60upx;
				
				.left{
					text-align: right;
				}
				.right{
					padding-left: 50upx;
					display: flex;
				}
			}
		}
	}
</style>
