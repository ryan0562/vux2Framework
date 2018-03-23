import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router);
const routers = new Router({
  mode: 'history',
  routes: [
    {
      path: '/login',
      name: '登录',
      component: () => import('src/pages/login.vue'),
    },
    {
      path: '/',
      name: '首页',
      component: ()=> import('src/pages/index.vue'),
    },
  ]
});
//路由切换前做一些处理
routers.beforeEach((to, from, next) => {
  Vue.prototype.loading = true;
  //登录限制
  let isLogin = JSON.parse(sessionStorage.getItem('isLogin'));
  if (to.path !== '/login' && !isLogin) {
    next({path: '/login'});
    return
  }
  next()
});
//路由切换后做一些处理
routers.afterEach(function (to) {
  Vue.prototype.loading = false;
});
export default routers
