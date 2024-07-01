import { createRouter, createWebHashHistory } from 'vue-router'
import Index from '../views/Index.vue'
import Galerija from '../views/Galerija.vue'

const routes = [
  {
    path: '/',
    name: 'Index',
    component: Index
  },
  {
    path: '/about',
    name: 'O nama',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/galerija',
    name: 'Galerija',
    component: Galerija
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
