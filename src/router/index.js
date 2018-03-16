import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from 'src/components/HelloWorld.vue'


Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
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
})
