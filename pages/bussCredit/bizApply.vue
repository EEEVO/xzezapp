<template>
  <view class="content">
	<u-checkbox-group class="bookGroup">
		<u-checkbox
			@change="checkboxChange" 
			v-model="book.checked" 
			:name="book.name"
		  >{{book.name}}</u-checkbox>
	</u-checkbox-group>
    <u-cell-group>
      <u-field v-model="phoneNo" label="手机号" maxlength="11" placeholder="请输入手机号码"></u-field>
      <u-field v-model="verifyCode" label="验证码" placeholder="请输入验证码"><u-button size="mini" slot="button" type="success" @tap="sendCode">获取验证码</u-button></u-field>
    </u-cell-group>
    <u-button class="btnconfirm" :disabled="disabled" @click="applyConfirm">确认授权</u-button>
	
	<u-popup v-model="bookShow" mode="center" mask-click="false" :mask-close-able="false">
		<view class="creditcont">
			{{creditContent}}
			<u-button class="popupClose" size="mini" :disabled="closeDisable" @click="closeBook">关闭{{closebtnText}}</u-button>
		</view>
	</u-popup>
  </view> 
</template>

<script>
import { sendVerificationCode } from '@/api/user.js';
import { confimBizAuthorization, getBizAuthorization } from '@/api/function.js';
import { getUserToken } from '@/utils/token.js';
import { regExpObj } from '@/utils/common.js';

export default {
  data() {
    return {
      phoneNo: '', //手机号码
      verifyCode: '',
	  book: {
		  name: '业务授权书',
		  checked: false
	  },
	  disabled: false,
	  bookShow: false,
	  creditContent: '',
	  timer: 10,
	  closebtnText: '(10s)',
	  closeDisable: true
    };
  },
  methods: {
	  countDown(){
		this.closebtnText = '(10s)';
		this.closeDisable = true;
		let timer1 = setInterval(() => {
			this.timer--;
			this.closebtnText = `(${this.timer}s)`;
			if (this.timer == -1) {
				clearInterval(timer1);
				this.timer = 10;
				this.closebtnText = '';
				this.closeDisable = false;
			}
		}, 1000);
	  },
	checkboxChange(e) {
		this.book.checked = e.value;
		if(e.value){
			this.bookShow = true;
			this.countDown();
		}
	},
	closeBook(){
		this.bookShow = false;
	},
    async applyConfirm() {
      if (!regExpObj.regExpPhone(this.phoneNo)) {
        uni.showToast({
          icon: 'none',
          position: 'bottom',
          title: '手机号格式不正确'
        });
        return;
      }
      if (!this.verifyCode) {
        uni.showToast({ title: '请输入短信验证码', icon: 'none' });
        return;
      }
      let sessionId = getUserToken();
	  if(!this.book.checked){
		  uni.showToast({ title: '请选中业务授权书', icon: 'none' });
		  return;
	  }
      const res = await confimBizAuthorization(sessionId, this.phoneNo, this.verifyCode);
      if (0 == res.respcode) {
        uni.showToast({ title: '业务授权成功', icon: 'none' });
		this.disabled = true;
      } else {
        uni.showToast({ title: res.respinfo, icon: 'none' });
      }
    },
    async sendCode() {
      if (!regExpObj.regExpPhone(this.phoneNo)) {
        uni.showToast({
          icon: 'none',
          position: 'bottom',
          title: '手机号格式不正确'
        });
        return;
      }
      let sessionId = getUserToken();
      const res = await sendVerificationCode(sessionId, this.phoneNo);
      if (0 == res.respcode) {
        uni.showToast({ title: '发送成功', icon: 'none' });
      } else {
        uni.showToast({ title: res.respinfo, icon: 'none' });
      }
    },
	async getBizAuthorization(){
		const res = await getBizAuthorization();
		if(0 == res.respcode){
			this.creditContent = res.data.contenthtml;
		}else{
			uni.showToast({ title: res.respinfo, icon: 'none' });
		}
	}
  },
  onLoad(option) {
    this.getBizAuthorization();
  }
};
</script>

<style scoped lang="less">
.content {
  .btnconfirm {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 220upx;
    height: 80upx;
    margin: 60upx auto;
    font-size: 30upx;
    color: #fff;
  }
	  
  .bookGroup{
	  margin: 50upx;
	  display: flex;
	  align-items: center;
	  justify-content: center;
  }
  
  .creditcont{
	  display: flex;
	  padding: 10upx;
	  width:100vw;
	  height:100vh;
  }
  
  .popupClose{
	  display: flex;
	  justify-content: center;
	  position: fixed;  
	  bottom: 10upx;
	  margin: 20upx auto;
	  text-align: center;
  }
  
}
</style>
