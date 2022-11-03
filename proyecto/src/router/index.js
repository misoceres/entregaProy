import Vue from 'vue'
import VueRouter from 'vue-router'
// import HomeView from '../views/HomeView.vue'
import PagInicio from '@/components/PagInicio.vue'
import RegistroPost from '@/components/RegistroPost.vue'
import LisConvocatorias from '@/components/LisConvocatorias.vue'
import LisHabilitados from '@/components/LisHabilitados.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'paginicio',
    component: PagInicio
  },
  {
    path: '/registro',
    name: 'registropost',
    component: RegistroPost
  },
  {
    path: '/convocatorias',
    name: 'lisconvocatorias',
    component: LisConvocatorias
  },
  {
    path: '/habilitados',
    name: 'lishabilitados',
    component: LisHabilitados
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },

  {
    path: '/registrocompleto',
    name: 'registrocompleto',

    component: () => import('../views/RegistroCompleto.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
