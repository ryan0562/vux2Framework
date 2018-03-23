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
routers.beforeEach((to, from, next) => {
  let isLogin = JSON.parse(sessionStorage.getItem('isLogin'));
  //如果是登录页面就放行
  if (to.path === '/login') {
    next();
    return
  }
  //没登录
  if (!isLogin) {
    next({path: '/login'});
    return
  }
  next()
});
export default routers
