// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
// import FastClick from 'fastclick'
import App from './App.vue'
import router from 'src/router/index'
import {AlertPlugin, ToastPlugin, dateFormat} from 'vux'
import 'src/common/axios'//axios 请求/拦截/ 组件使用方法this.$http

//alert全局组件
Vue.use(AlertPlugin);
//toast全局组件
Vue.use(ToastPlugin);

// FastClick.attach(document.body);
Vue.config.productionTip = false;

//date 日期格式化this.$dateFormat(new Date(), 'YYYY-MM-DD HH:mm:ss')
Vue.prototype.$dateFormat = dateFormat;

new Vue({
  router,
  render: h => h(App)
}).$mount('#app-box');
