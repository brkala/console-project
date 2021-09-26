import Vue from 'vue'
import VueRouter from 'vue-router'
import Console from '@/views/Console.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Console',
    component: Console
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
