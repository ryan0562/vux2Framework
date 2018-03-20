<template>
  <section>
    <popup v-model="mockConsoleShow" position="right" width="100%">
      <XHeader :left-options="{backText: '',preventGoBack:true,showMore:true}" @on-click-back="closeMock()">
        伪数据拦截列表
        <span class="iconPlus" slot="right" @click="openForm()">添加</span>
      </XHeader>
      <group>
      <x-switch title="全局启用" v-model='mockList.checked' @on-change="setLocalStorage()"></x-switch>
      </group>
      <group title="拦截列表(左右拉动列表有惊喜)" class="box">
        <swipeout>
          <swipeout-item v-for="(item,key) in mockList.main" :key="key"  class="vux-1px-tb">
            <div slot="left-menu">
              <swipeout-button type="warn" v-if="item.checked" @click.native="statusApply(key,false)">禁用
              </swipeout-button>
              <swipeout-button type="primary" v-else @click.native="statusApply(key,true)">启用</swipeout-button>
            </div>
            <div slot="right-menu">
              <swipeout-button type="warn" @click.native="mockDel(key)">删除</swipeout-button>
            </div>
            <cell slot="content" :title="item.title" :inline-desc="item.url"
                  @click.native.stop="openForm(key)" is-link :style="!item.checked?{background:'#ddd'}:''">
              <span>{{item.method[0]}}</span>
            </cell>
          </swipeout-item>
        </swipeout>

      </group>
    </popup>
    <mockForm ref="mockForm" :consoleUpdate="getLocalStorage"></mockForm>
  </section>
</template>
<script>
  import {Group, Cell, Popup, XHeader, XButton, SwipeoutItem, SwipeoutButton, Swipeout, XSwitch} from 'vux'
  import mockForm from './mockForm.vue'

  export default {
    data() {
      return {
        mockConsoleShow: false,
        mockList: {
          checked: true,
          main: {}
        },
      };
    },
    components: {
      mockForm: () => import('./mockForm.vue'),
      Group,
      Cell,
      Popup,
      XHeader,
      XButton, SwipeoutItem, SwipeoutButton, Swipeout, XSwitch
    },
    created() {
//      this.openMock();
      if (localStorage.getItem('mock')) {
        this.getLocalStorage();
      } else {
        localStorage.setItem('mock', JSON.stringify(this.mockList));
      }
    },
    methods: {
      openForm(key) {
        this.$refs.mockForm.openMockForm(key);
      },
      //盒子
      openMock: function () {
        this.mockConsoleShow = true;
      },
      closeMock: function () {
        this.mockConsoleShow = false;
      },
      mockDel: function (key) {
        delete this.mockList.main[key];
        this.setLocalStorage();
        this.$forceUpdate();
      },
      getLocalStorage: function () {
        this.mockList = JSON.parse(localStorage.getItem('mock'));
      },
      setLocalStorage: function () {
        localStorage.setItem('mock', JSON.stringify(this.mockList));
      },
      statusApply(url, status) {
        this.mockList.main[url].checked = status;
        this.setLocalStorage();
      }
    }
  }
</script>
<style lang="less" scoped>
  .box {
    position: absolute;
    top:110px;
    bottom: 0;
    width: 100%;
    overflow: auto;
  }
</style>
