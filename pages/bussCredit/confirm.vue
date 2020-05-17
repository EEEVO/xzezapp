<template>
  <view class="main">
    <view class="creditcont">{{creditContent}}</view>
    <view class="footer"><u-button :disabled="disabled" @click="confirm">确认</u-button></view>
  </view>
</template>

<script>
import { getCreditAuthorization, confimCreditAuthorization } from '@/api/function.js';
import { getUserToken } from '@/utils/token.js';
export default {
  data() {
    return {
      customStyle: {
        fontSize: '12px'
      },
	  creditContent: '',
	  disabled: false,
	  phoneNo: '',
	  verifyCode: ''
    };
  },
  methods: {
    async confirm() {
		let sessionId = getUserToken();
		const res = await confimCreditAuthorization(sessionId, this.phoneNo, this.verifyCode);
		if(0 == res.respcode){
			uni.showToast({ title: '征信授权成功', icon: 'none' });
			this.disabled = true;
		}else{
			uni.showToast({ title: res.respinfo, icon: 'none' });
		}
    },
	async getCreditAuthorization(){
		const res = await getCreditAuthorization();
		if(0 == res.respcode){
			this.creditContent = res.data.contenthtml;
		}else{
			uni.showToast({ title: res.respinfo, icon: 'none' });
		}
	}
  },
  onLoad(option) {
	  this.getCreditAuthorization();
	  this.phoneNo = option.phoneNo;
	  this.verifyCode = option.verifyCode;
  }
};
</script>

<style scoped lang="less">
.main {
  min-height: 100vh;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  align-items: center;
  
  .creditcont{
	  display: flex;
	  padding: 10upx;
  }
  
  .footer {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 40px;
  }
}
</style>
