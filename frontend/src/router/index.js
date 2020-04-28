import Vue from 'vue'
import VueRouter from 'vue-router'
import MainCharts from '../views/MainCharts.vue'
import Revenue from '../views/revenues/Revenue.vue'
import Chart from '../views/Chart.vue'
Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'MainCharts',
    component: MainCharts
  },
  {
    path: '/revenue',
    name: 'revenue',
    component: Revenue
  },
  {
    path: '/chart',
    name: 'revenue',
    component: Chart

  }
]

const router = new VueRouter({
  routes
})

export default router
