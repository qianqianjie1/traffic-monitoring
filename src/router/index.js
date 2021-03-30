import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

// 路由规则
const routes = [
  {
    path: '/',
    name: 'Login',
    component: () => import('@/pages/Login/Login.vue')
  },
  {
    path: '/home',
    name: 'Home',
    component: () => import('@/pages/Home/Home.vue')
  },
  {
    path:'/video',
    name: 'Video',
    component: () => import('@/pages/Home/Video.vue'),
  },
  {
    path:'/add',
    name: 'Add',
    component: () => import('@/pages/Home/Add.vue'),
  },
  {
    path:'/set',
    name: 'Set',
    component: () => import('@/pages/Home/Set.vue'),
  },
  {
    path:'/register',
    name: 'Register',
    component: () => import('@/pages/Register/Register.vue'),
  },
  {
    path:'/statistic',
    name: 'Statistic',
    component: () => import('@/pages/Statistic/Statistic.vue'),
  }
]

const router = new VueRouter({
  routes
})

export default router
