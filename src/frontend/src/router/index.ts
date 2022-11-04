import { createRouter, createWebHistory, type RouteRecordRaw } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Income from '../views/Income.vue'
import Payments from '../views/Payments.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/income',
    name: 'Income',
    component: Income,
  },
  {
    path: '/payments',
    name: 'Payments',
    component: Payments,
  }
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router
