<template>
  <view>
	  <view class="list" v-for="(list, list_i) in severList" :key="list_i">
	    <view class="li" v-for="(li, li_i) in list" @tap="toPage(list_i, li_i)" :class="{ noborder: li_i == list.length - 1 }" hover-class="hover" :key="li.name">
	      <view class="icon"><image :src="'../../static/functionCenter/server/' + li.icon"></image></view>
	      <view class="text">{{ li.name }}</view>
	      <image class="to" src="../../static/personalCenter/to.png"></image>
	    </view>
	  </view>
  </view>
</template>

<script>
import { getUserToken, getAccountId } from '@/utils/token.js';
	
export default {
  components: {},
  data() {
    return {
		severList: [[{ name: '房产评估', icon: 'house.png', link: '../userData/index' }, 
					 { name: '业务授权', icon: 'grant.png', link: '../bussCredit/bizApply' },
					 { name: '征信授权', icon: 'credit.png', link: '../bussCredit/creditApply' },
					 { name: '客户经理', icon: 'manger.png', link: '../custManger/detail' }]]
	};
  },
  onLoad() {},
  methods: {
	  //用户点击列表项
	  toPage(list_i, li_i) {
	    if (getUserToken()) {
	      uni.navigateTo({
	        url: this.severList[list_i][li_i].link
	      });
	    } else {
	      uni.showToast({ title: '请先登录', icon: 'none' });
	    }
	  }
  },
  watch: {}
};
</script>

<style scoped lang="less">
	@import url('@/styles/index.less');
	page {
	  background-color: #fff;
	}
	.list {
	  width: 100%;
	  border-bottom: solid 26upx #f1f1f1;
	  .li {
	    width: 92%;
	    height: 100upx;
	    padding: 0 4%;
	    border-bottom: solid 1upx #e7e7e7;
	    display: flex;
	    align-items: center;
	    &.noborder {
	      border-bottom: 0;
	    }
	    .icon {
	      flex-shrink: 0;
	      width: 50upx;
	      height: 50upx;
	      image {
	        width: 50upx;
	        height: 50upx;
	      }
	    }
	    .text {
	      padding-left: 20upx;
	      width: 100%;
	      color: #666;
	    }
	    .to {
	      flex-shrink: 0;
	      width: 40upx;
	      height: 40upx;
	    }
	  }
	}
</style>