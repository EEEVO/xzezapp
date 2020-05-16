<template>
  <view class="recontent">
	  <view class="list" v-for="(list, list_i) in severList" :key="list_i">
	    <view class="li" v-for="(li, li_i) in list" @tap="toPage(list_i, li_i)" :class="{ noborder: li_i == list.length - 1 }" hover-class="hover" :key="li.name">
	      <view class="icon"><image :src="'../../static/personalCenter/sever/' + li.icon"></image></view>
	      <view class="text">{{ li.name }}</view>
	      <image class="to" src="../../static/personalCenter/to.png"></image>
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
	  severList: [[{ name: '申请记录', icon: 'applyRec.png', link: '../userData/applyRec' },
	  				   { name: '企业身份核验', icon: 'check.png', link: '../userData/check' }]]
    };
  },
  methods: {}
};
</script>

<style scoped lang="less">
	.recontent{
		display: flex;
		align-items: center;
		position: relative;
		background: #fff;
		font-size: 30upx;
	}
</style>
