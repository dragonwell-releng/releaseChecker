import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/report',
    name: 'Report',
    component: () => import('../components/Report'),
  },
  {
    path: '/run',
    name: 'Run',
    component: () => import('../components/Runner'),
  },

]

const router = new VueRouter({
  routes
})

export default router
