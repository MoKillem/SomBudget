<template>
      <div class="margined" >
      <v-card
      >
      <v-card-title class="caption font-weight-bold">{{title}}</v-card-title>
      <v-card-text>
        <ejs-chart class ="container" :primaryYAxis='primaryYAxis' :primaryXAxis='primaryXAxis'>
            <e-series-collection>
                <e-series :dataSource='data' type='Line' xName='year' :yName="this.yName" name='revenue'> </e-series>
            </e-series-collection>
        </ejs-chart>
      </v-card-text>
      </v-card>
      <v-btn v-if="button === true" color="info mt-4" small @click="routePush(yName1)">See More</v-btn>
      </div>
</template>
<script>
import { ChartPlugin, LineSeries, Category } from "@syncfusion/ej2-vue-charts";

export default {
    name: 'Graph',
     data() {
    return {
        yName1: 'revenue'
    }
  },
    props:['title', 'primaryXAxis', 'yName', 'primaryYAxis', 'data','button'],
     provide: {
        chart: [LineSeries, Category]
 },
   methods: {
        routePush(name){
            this.$router.push(`/${name}`)
        },
    }
    
}
</script>
<style scoped>
 .container{
   height: 200px;
 }
  .margined{
    margin:30px;
  }
</style>