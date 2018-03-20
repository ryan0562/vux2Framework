<template>
  <div id="app">
    <router-view></router-view>
    <!--<loading v-model="isLoading"></loading>-->
    <mock ref="mock"></mock>
  </div>
</template>

<script>
  import {Loading } from 'vux'
export default {
  name: 'app',
  data() {
    return {
      isLoading: true,
    }
  },
  components: {
    Loading,
    mock:()=>  import('src/components/mock/mockConsole.vue')
  },
  created() {
    //为什么不添加到#app上,是因为部分#APP小于屏幕,点击APP外的部分无法触发//@click.ctrl.alt
    //生产环境不显示
    if (process.env.NODE_ENV !== 'production') {
      require('src/components/mock/mock');
      document.addEventListener('click', event => {
        if (event.ctrlKey && event.altKey) {
          this.$refs.mock.openMock();
        }
      });
    }
  },
}
</script>

<style lang="less">
@import '~vux/src/styles/reset.less';
@import 'common/common.less';

body {
  background-color: #fbf9fe;
}
</style>
