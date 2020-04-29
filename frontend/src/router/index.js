import Vue from 'vue'
import VueRouter from 'vue-router'
import MainCharts from '../views/MainCharts.vue'
import Revenue from '../views/revenues/Revenue.vue'
import Chart from '../views/Chart.vue'
import Rev2020 from '../views/yearly/2020/Revenue'
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
    path: '/revenue/2020',
    name: 'revenue',
    component: Rev2020

  }
]

const router = new VueRouter({
  routes
})

export default router
