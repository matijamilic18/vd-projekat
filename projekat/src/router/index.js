import { createRouter, createWebHashHistory } from 'vue-router'
import Index from '../views/Index.vue'
import Galerija from '../views/Galerija.vue'
import Predjela from '../views/Predjela.vue'
import Meni from '../views/Meni.vue'
import GlavnaJela from '../views/GlavnaJela.vue'
import Dezerti from '../views/Dezerti.vue'
import Pica from '../views/Pica.vue'
import PregledJela from '../views/PregledJela.vue'
import MojNalog from '../views/MojNalog.vue'




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
  },
  {
    path: '/meni',
    name: 'Meni',
    component: Meni
  },
  {
    path: '/predjela',
    name: 'Predjela',
    component: Predjela
  }
  ,
  {
    path: '/glavnajela',
    name: 'Glavna Jela',
    component: GlavnaJela
  },
  {
    path: '/dezerti',
    name: 'Dezerti',
    component: Dezerti
  }
  ,
  {
    path: '/pica',
    name: 'Pica',
    component: Pica
  },
  {
    path: '/pregledjela',
    name: 'Pregled Jela',
    component: PregledJela
  },
  {
    path: '/mojnalog',
    name: 'Moj Nalog',
    component: MojNalog
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
