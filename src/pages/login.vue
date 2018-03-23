<template>
  <section>
    <x-header :left-options="{backText: ''}">登录</x-header>
    <group title="登录信息(账户跟密码为0,0)" label-width="100px">
      <x-input title="账户" placeholder="请输入登录账户" v-model="account"></x-input>
      <x-input title="密码" placeholder="请输入登录账户" v-model="password" type="password"></x-input>
    </group>
    <box gap="20px 10px">
      <x-button type="primary" @click.native="login()">登录</x-button>
    </box>
  </section>
</template>
<script>
  import {XHeader, Group, XInput, XButton, Box} from 'vux'

  export default {
    data() {
      return {
        account: '',
        password: '',
      };
    },
    created: function () {
    },
    components: {
      XHeader, Group, XInput, XButton, Box
    },
    methods: {
      login() {
        if (this.account !== '0' && this.password !== '0') {
          this.$vux.toast.text('帐号或密码错误');
          return
        }
        sessionStorage.setItem('isLogin', true);
        this.$router.replace('/')
      },
    }
  }
</script>
<style lang="less">

</style>
