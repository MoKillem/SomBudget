<template>
  <div id="app">
      <LineGraph title="Revenue" yName="revenue" :primaryYAxis="primaryYAxis" :primaryXaxis='primaryXAxis' :data= 'getRevenue' :button='false' ></LineGraph>
      <div class='headline'>Revenue Specific Analysis</div>
    <v-row no-gutters>
    <v-col cols="12" sm="12">
    <DoubleBarGraph title="Domestic VS Donar Revenue" :primaryYAxis='primaryYAxis' yName="revenue" :data='domrevenue' :data1= 'donrevenue' yName1="revenue" ></DoubleBarGraph>
    </v-col>
    </v-row>
  </div>
</template>
<script>
import { ChartPlugin, LineSeries, ColumnSeries, Category } from "@syncfusion/ej2-vue-charts";
import {mapGetters, mapActions} from 'vuex'
import LineGraph from '../../components/LineGraph.vue'
import DoubleBarGraph from '../../components/DoubleBarGraph.vue'
export default {
    components:{
        LineGraph,
        DoubleBarGraph
    },
    computed: { ...mapGetters([
      'getRevenue',
    ])},
    
    data() {
    return {
      domrevenue: [
        { year: '2015', revenue: 114.3 }, { year: '2016', revenue: 139.7 },
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
    }},
    
}
</script>
<style lang="less" scoped>

</style>