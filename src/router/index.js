import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
  {
    path: '',
    component: () => import('../views/default-view.vue')
  },
  {
    path: '/login',
    component: () => import('../views/login-view.vue')
  },
  {
    path: '/default',
    component: () => import('../views/default-view.vue')
  },
  {
    path: '/detail/:isbn',
    component: () => import('../views/detail-view.vue')
  },
  {
    path: '/register',
    component: () => import('../views/register-view.vue')
  },
  {
    path: '/userInfo',
    component: () => import('../views/userInfo-view.vue')
  },

]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
})

export default router
