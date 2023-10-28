import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/lugares',
    name: 'lugares',
    component: () => import('../views/LocationsView.vue')
  },
  {
    path: '/producao',
    name: 'producao',
    component: () => import('../views/ProductionView.vue')
  },
  {
    path: '/cultura',
    name: 'cultura',
    component: () => import('../views/CultureView.vue')
  },
  {
    path: '/sobre',
    name: 'sobre',
    component: () => import('../views/AboutUs.vue')
  },

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
