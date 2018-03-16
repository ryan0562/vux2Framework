<template>
  <div id="app">
    <router-view></router-view>
    {{date}}
    <!--<loading v-model="isLoading"></loading>-->
  </div>
</template>

<script>
  import {Loading } from 'vux'
export default {
  name: 'app',
  data() {
    return {
      isLoading: true,
      date:new Date()
    }
  },
  components: {
    Loading
  },
  created(){
    this.date = this.$dateFormat(this.date, 'YYYY-MM-DD HH:mm:ss');
  }
}
</script>

<style lang="less">
@import '~vux/src/styles/reset.less';

body {
  background-color: #fbf9fe;
}
</style>
