import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from 'src/components/HelloWorld.vue'

Vue.use(Router);
const routers = new Router({
  mode: 'history',
  routes: [
    {
      path: '/login',
      name: 'login',
      component: () => import('src/pages/login.vue')
    },
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/vux',
      name: 'vux',
      component: ()=> import('src/components/HelloFromVux.vue')
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
