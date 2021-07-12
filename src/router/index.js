import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import store from '../store'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: {
      rutaProtegida: true,
    },
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('../views/About.vue'),
  },
  {
    path: '/editar/:id',
    name: 'Editar',
    component: () => import('../views/Editar.vue'),
    meta: {
      rutaProtegida: true,
    },
  },
  {
    path: '/registro',
    name: 'Registro',
    component: () => import('../views/Registro.vue'),
  },
  {
    path: '/ingreso',
    name: 'Ingreso',
    component: () => import('../views/Ingreso.vue'),
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
})
//to sirve para acceder al meta
//el next si esta registrado se acceda a la ruta
//beforEach realiza un recorrido por cada ruta
router.beforeEach((to, from, next) => {
  //console.log(to.meta.rutaProtegida)
  if (to.meta.rutaProtegida) {
    if (store.getters.usuarioAutenticado) {
      next()
    } else {
      next('/ingreso')
    }
  } else {
    next() //como no es protegida agrega la información
  }
})
export default router
