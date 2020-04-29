<template>
  <div id="app">
    <div class='headline'>General Budget Analysis</div>
      <v-row no-gutters>
      <v-col cols="12" sm="12">
      <DoubleBarGraph title="Revenue VS Expenditure" :primaryYAxis='primaryYAxis1' yName="revenue" :data= 'getRevenue' :data1= 'getExpenditure' yName1='expenditure' :button ='true'></DoubleBarGraph>
      </v-col>
      </v-row> 
  </div>
</template>
<script>
import { ChartPlugin, LineSeries, ColumnSeries, Category } from "@syncfusion/ej2-vue-charts";
import {mapGetters, mapActions} from 'vuex'
import LineGraph from '../components/LineGraph'
import BarGraph from '../components/BarGraph'
import DoubleBarGraph from '../components/DoubleBarGraph'

export default {
    name: "Mainchart",
    components:{LineGraph,BarGraph,DoubleBarGraph},
     computed: {
       ...mapGetters([
      'getRevenue',
      'getExpenditure',
      'getSurplus'
    ])},
    methods: {
      ...mapActions(['defSurplus'])
      },
       created () {
      this.defSurplus()
    },
     provide: {
    chart: [ColumnSeries, Category]
  },
     data() {
    return {
      domrevenue: [
        { year: '2015', revenue: 141.3 }, { year: '2016', revenue: 139.7 },
        { year: '2017', revenue: 180.7 }, { year: '2018', revenue: 183.4 },
        { year: '2019', revenue: 221.3 }, { year: '2020', revenue: 234.4 },
    ],
    donrevenue: [
        { year: '2015', revenue: 26.9 }, { year: '2016', revenue: 108.7 },
        { year: '2017', revenue: 79.9 }, { year: '2018', revenue: 92.8 },
        { year: '2019', revenue: 168.8 }, { year: '2020', revenue: 231.8 },
    ],
         primaryYAxis:{
            minimum: 0, maximum: 30,
        interval: 20, title: 'Millions'
        },
         primaryYAxis1:{
        minimum: 0, maximum: 500,
        interval: 20, title: 'Millions'        }
    }
  }
}
</script>
<style >
.som{
  background-color:rgb(0, 200, 255);
}
</style>