<template>
  <view>
    <view class="header" v-bind:class="{ status: isH5Plus }">
      <view class="userinfo" v-if="isLogin">
        <view class="face"><image :src="userinfo.avatarUrl"></image></view>
        <view class="info">
          <view class="username">{{ userinfo.nickName }}</view>
        </view>
      </view>
      <view class="userinfo" v-else>
        <view class="face"><image src="../../static/personalCenter/header.jpeg"></image></view>
        <view class="login"><button class="username" open-type="getUserInfo" @getuserinfo="getUserInfo">点击登录/注册</button></view>
      </view>
    </view>
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
import { getUserToken, setUserToken, getAccountId } from '@/utils/token.js';

export default {
  data() {
    return {
      isLogin: false,
      isH5Plus: false,
      userinfo: {},
      severList: [[{ name: '申请记录', icon: 'applyRec.png', link: '../userData/applyRec' }, 
				   { name: '企业身份核验', icon: 'check.png', link: '../userData/check' }]]
    };
  },
  onLoad() {
    this.login();
  },
  mounted() {
    // 暂时无用
    this.isLogin = getUserToken() ? true : false;
  },
  methods: {
    getUserInfo(e) {
      console.log(e.detail.userInfo);
      this.userinfo = {
        ...e.detail.userInfo
      };
      this.isLogin = true;
	  setUserToken(this.userinfo);
      // TODO:获取用户信息之后,去检查当前微信是否绑定过手机号,如果绑定过就不跳转到绑定页
      // uni.navigateTo({
      //   url: '../login/index'
      // });
    },
    login() {
      wx.login({
        success(res) {
          if (res.code) {
            console.log(res.code);
            // TODO:像后端发送code
          } else {
            console.log('登录失败！' + res.errMsg);
          }
        }
      });
    },
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
  }
};
</script>

<style scoped lang="less">
@import url('@/styles/index.less');
page {
  background-color: #fff;
}
.header {
  &.status {
    padding-top: var(--status-bar-height);
  }
  background-color: @base6;
  width: 92%;
  height: 30vw;
  padding: 0 4%;
  display: flex;
  align-items: center;
  .userinfo {
    width: 90%;
    display: flex;
    .face {
      flex-shrink: 0;
      width: 15vw;
      height: 15vw;
      image {
        width: 100%;
        height: 100%;
        border-radius: 100%;
      }
    }
    // 未登录时点击登录
    .login {
      display: flex;
      flex-flow: wrap;
      padding-left: 30upx;
      justify-content: center;
      align-items: center;
      .username {
        width: 100%;
        color: #fff;
        border: none;
        background-color: transparent;
        font-size: 40upx;
      }
    }
    .info {
      display: flex;
      flex-flow: wrap;
      padding-left: 30upx;
      .username {
        width: 100%;
        color: #fff;
        font-size: 40upx;
      }
      .integral {
        display: flex;
        align-items: center;
        padding: 0 20upx;
        height: 40upx;
        color: #fff;
        background-color: rgba(0, 0, 0, 0.1);
        border-radius: 20upx;
        font-size: 24upx;
      }
    }
  }
  .setting {
    flex-shrink: 0;
    width: 6vw;
    height: 6vw;
    image {
      width: 100%;
      height: 100%;
    }
  }
}
.hover {
  background-color: #eee;
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
