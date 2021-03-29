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
    component: () => import('@/pages/Home/Home.vue'),
  },
  {
    path:'/register',
    name: 'Register',
    component: () => import('@/pages/Register/Register.vue'),
  }
]

const router = new VueRouter({
  routes
})

export default router
