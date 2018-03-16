<template>
  <router-link to="/vux">子页</router-link>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  created() {
    this.$http.post('/a',{mobile: 15397191444})
      .then(res => {
        console.log('成功', res)
      }).catch(res => {
      console.log('失败', res)
    });
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
