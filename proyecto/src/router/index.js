import Vue from 'vue'
import VueRouter from 'vue-router'
// import HomeView from '../views/HomeView.vue'
import PagInicio from '@/components/PagInicio.vue'
import RegistroPost from '@/components/RegistroPost.vue'
import LisConvocatorias from '@/components/LisConvocatorias.vue'
import LisHabilitados from '@/components/LisHabilitados.vue'
import BienvenidoUsuario from '@/components/BienvenidoUsuario.vue'
import GestionUsuarios from '@/components/GestionUsuarios.vue'

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

    component: () => import('../views/AboutView.vue')
  },

  {
    path: '/registrocompleto',
    name: 'registrocompleto',

    component: () => import('../views/RegistroCompleto.vue')
  },

  {
    path: '/usr',
    name: 'bienvenidoUsr',
    component: BienvenidoUsuario
  },
  {
    path: '/usr/gestion',
    name: 'gestionusuarios',
    component: GestionUsuarios
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
