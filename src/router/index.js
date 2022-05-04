import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
  {
    path: '',
    component: () => import('../views/default.vue')
  },
  {
    path: '/login',
    component: () => import('../views/login-display.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
})

export default router
