<template>
  <div id="app">
    <div class='headline'>General Budget Analysis</div>
      <v-row no-gutters>
      <v-col cols="12" sm="4">
      <LineGraph title="Revenue" yName="revenue" :primaryYAxis="primaryYAxis" :primaryXaxis='primaryXAxis' :data= 'getRevenue'></LineGraph>
      </v-col>
      <v-col cols="12" sm="4">
      <LineGraph title="Expenditure" yName="expenditure" :primaryYAxis="primaryYAxis" :primaryXaxis="primaryXAxis" :data='getExpenditure'></LineGraph>
      </v-col>
      <v-col cols="12" sm="4">
      <LineGraph title="Surplus" yName="surplus" :primaryYAxis="primaryYAxis" :primaryXaxis="primaryXAxis" :data='getSurplus'></LineGraph>  
      </v-col>
      </v-row>
      
    <div class='headline'>Revenue Specific Analysis</div>
    <v-row no-gutters>
    <v-col cols="12" sm="6">
    <LineGraph title="Domestic Revenue" yName="revenue" :primaryYAxis="primaryYAxis" :primaryXaxis="primaryXAxis" :data='domrevenue'></LineGraph>  
    </v-col>
    <v-col cols="12" sm="6">
    <LineGraph title="Donar Revenue" yName="revenue" :primaryYAxis="primaryYAxis" :primaryXaxis="primaryXAxis" :data='donrevenue'></LineGraph>  
    </v-col>
    </v-row>
  </div>
</template>
<script>
import { ChartPlugin, LineSeries, ColumnSeries, Category } from "@syncfusion/ej2-vue-charts";
import {mapGetters, mapActions} from 'vuex'
import LineGraph from '@/components/LineGraph.vue'
export default {
    name: "Mainchart",
    components:{LineGraph},
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
        primaryXAxis: {
           valueType: 'Category'
        },
         primaryYAxis:{
            labelFormat: '${value}Mill'
        },
    }
  }
}
</script>
<style scoped>
</style>