import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('@/views/home')
    },
    {
      path: '/user',
      name: 'user',
      component: () => import('@/views/user')
    },
    {
      path: '/pro',
      name: 'pro',
      component: () => import('@/views/pro')
    },
    {
      path: '/sign',
      name: 'sign',
      component: () => import('@/views/Sign.vue')
    },
    {
      path: '/res',
      name: 'res',
      component: () => import('@/views/Resg.vue')
    }
  ]
})
