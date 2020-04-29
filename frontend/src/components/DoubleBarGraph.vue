<template>
<div id="app" class="margined" >
      <v-card>
      <v-card-title class="caption font-weight-bold">{{title}}</v-card-title>
      <v-card-text>
         <ejs-chart :primaryXAxis='primaryXAxis'>
            <e-series-collection>
                <e-series :dataSource='data' type='Column' xName='year' :yName='this.yName'> </e-series>
                <e-series :dataSource='data1' type='Column' xName='year' :yName='this.yName1'> </e-series>
            </e-series-collection>
        </ejs-chart>
      </v-card-text>
      </v-card>
    <v-btn v-if="button === true" color="info mt-4" small @click="routePush(yName)">See More</v-btn>

      </div>
</template>
<script>
import Vue from "vue";
import { ChartPlugin, ColumnSeries, Category } from "@syncfusion/ej2-vue-charts";

Vue.use(ChartPlugin);

export default {
  name: 'bargraph',
  data() {
    return {
         primaryXAxis: {
           valueType: 'Category',
            isIndexed: true
        },
    }
  },
    props:['title','yName', 'data','button', 'primaryYAxis', 'data1', 'yName1'],
  provide: {
    chart: [ColumnSeries, Category]},
    methods: {
        routePush(name){
            this.$router.push(`/${name}`)
        },
    },
    
}
</script>
<style>
 .container{
   height: 200px;
 }
  .margined{
    margin:30px;
  }
</style>