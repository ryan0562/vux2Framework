<template>
  <ul>
    <li v-for="item in 100" :key="item.$index">{{item}}</li>
  </ul>
</template>
<script>
  export default {
    data() {
      return {};
    },
    created: function () {
    },
    components: {},
    methods: {}
  }
</script>
<style lang="less">

</style>
