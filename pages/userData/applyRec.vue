<template>
  <view class="recontent">
	<view class="row" v-for="(li, li_i) in severList">
		<view class="signrow">
			<text class="left">产品名称</text>
			<text class="right">{{ li.name }}</text>
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
			<text class="right">{{ li.remark }}</text>
		</view>
	</view>
  </view>
</template>

<script>
export default {
  data() {
    return {
      items: ['全部设备', '个人设备'],
      current: 0,
	  severList: [{ name: '税e贷', applydate: '2020-05-08', status: '待审核', remark: '需求描述需求描述' },
	  				   { name: '商超e贷', applydate: '2020-05-08', status: '审核通过', remark: '需求描述需求描述' }]
    };
  },
  methods: {}
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
