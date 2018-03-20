<template>
  <popup v-model="mockFormShow" position="right" width="100%">
    <XHeader :left-options="{backText: '',preventGoBack:true}" @on-click-back="closeMockForm()">伪数据拦截</XHeader>
    <group title="表单详情" label-width="100px">
      <!--<x-input title="ID" v-model="mockForm.id" placeholder-align="right" text-align="right" disabled></x-input>-->
      <x-input title="标题" v-model="mockForm.title" placeholder="请输入标题" placeholder-align="right"
               text-align="right"></x-input>
      <x-input title="接口地址" v-model="mockForm.url" placeholder="请输入API" placeholder-align="right"
               text-align="right"></x-input>
      <popup-picker title="方法" :data="methodOpt" v-model="mockForm.method"></popup-picker>
      <x-switch title="启用" v-model='mockForm.checked'></x-switch>
      <x-textarea title="模板" placeholder="请输入模板" :rows="8" :cols="30" v-model='mockForm.template'></x-textarea>

    </group>
    <box gap="10px 10px">
      <x-button type="primary" @click.native="addMock()">确定</x-button>
    </box>
  </popup>
</template>
<script>
  import {
    Group,
    Cell,
    Popup,
    XInput,
    XHeader,
    PopupRadio,
    XSwitch,
    XTextarea,
    XButton,
    Box,
    PopupPicker,
    Swipeout,
    SwipeoutItem,
    SwipeoutButton,
  } from 'vux'

  export default {
    props: {
      consoleUpdate: Function
    },
    data() {
      return {
        mockFormShow: false,
        mockForm: {},
        methodOpt: [['all', 'get', 'post']],
      };
    },
    components: {
      Group,
      Cell,
      Popup,
      XInput,
      XHeader,
      PopupRadio,
      XSwitch,
      XTextarea,
      XButton,
      Box,
      PopupPicker,
      SwipeoutItem, SwipeoutButton, Swipeout
    },
    methods: {
      //表单
      openMockForm: function (key) {
        this.resetMockForm();
        this.mockFormShow = true;
        if (key) {
          this.id = key;
          this.mockForm = JSON.parse(localStorage.getItem('mock')).main[key];
        }
      },
      closeMockForm: function () {

        this.mockFormShow = false;
      },
      resetMockForm: function () {
        this.id = undefined;
        this.mockForm = {
          title:'',
          url:'',
          method: ['all'],
          checked: true,
          template:'{}',
        };
      },
      addMock: function () {
        if (!this.mockForm.url || !this.mockForm.title) {
          this.$vux.toast.text('标题跟API必填!');
          return
        }
        let mock = JSON.parse(localStorage.getItem('mock'));
        if (!this.id) {
          this.id = new Date().getTime();
        }
        mock.main[this.id] = this.mockForm;
        localStorage.setItem('mock', JSON.stringify(mock));
        //获取缓存并返回列表
        this.consoleUpdate();
        this.closeMockForm();
      },
    }
  }
</script>
<style lang="less">
  .vux-popup-dialog {
    overflow: auto;
  }
</style>
