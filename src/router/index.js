import { createRouter, createWebHistory } from 'vue-router'
import InicioView from '../views/InicioView.vue'
import ProductosView from '../views/ProductosView.vue'
import ProductoresView from '../views/ProductoresView.vue'
import ContactoView from '../views/ContactoView.vue'

const routes = [
  { path: '/', name: 'Inicio', component: InicioView },
  { path: '/productos', name: 'Productos', component: ProductosView },
  { path: '/productores', name: 'Productores', component: ProductoresView },
  { path: '/contacto', name: 'Contacto', component: ContactoView }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
