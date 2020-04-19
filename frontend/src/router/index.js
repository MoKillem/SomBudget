import Vue from 'vue'
import VueRouter from 'vue-router'
import MainCharts from '../views/MainCharts.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/main',
    name: 'MainCharts',
    component: MainCharts
  },
]

const router = new VueRouter({
  routes
})

export default router
