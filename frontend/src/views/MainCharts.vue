<template>
  <div id="app">
              {{SurplusData}}

      <div class="margined" >
      <h3 class="display-1">Revenue</h3>
      <v-card
      class="mt-5"
      >
      <v-card-text>
        <ejs-chart class ="container" :primaryYAxis='primaryYAxis' :primaryXAxis='primaryXAxis'>
            <e-series-collection>
                <e-series :dataSource='RevenueData' type='Line' xName='year' yName='revenue' name='revenue'> </e-series>
            </e-series-collection>
        </ejs-chart>
      </v-card-text>
      </v-card>
      </div>
  
 <div class="margined" >
      <h3 class="display-1">Expenditure</h3>
      <v-card
      class="mt-5"
      >
      <v-card-text>
        <ejs-chart class="container" :primaryYAxis = 'primaryYAxis' :primaryXAxis='primaryXAxis'>
            <e-series-collection>
                <e-series :dataSource='ExpenditureData' type='Line' xName='year' yName='expenditure' name='expenditure'> </e-series>
            </e-series-collection>
        </ejs-chart>
      </v-card-text>
      </v-card>
    </div> 
  </div>
</template>
<script>
import { ChartPlugin, LineSeries, Category } from "@syncfusion/ej2-vue-charts";

export default {
     methods:{
      surplusCheck(revenue,expenditure){
          arrayMain
          for(let i = 0; i < revenue.length; i++){
              let surplus = revenue[i].revenue - expenditure[i].revenue
              object = {year : revenue[i].year , surplus: surplus}
              arrayMain.push(object)
          }
          this.SurplusData = arrayMain
      },
  },
  computed: {
      SurplusDa= this.surplusCheck(RevenueData,ExpenditureData)
  },
     data() {
    return {
      ExpenditureData:[
            { year: '2015', expenditure: 135.5 }, { year: '2016', expenditure: 248.3 },
            { year: '2017', expenditure: 262.7 }, { year: '2018', expenditure: 268.5 },
            { year: '2019', expenditure: 390.1 }, { year: '2020', expenditure: 476.2 },
           
      ],
      RevenueData: [
            { year: '2015', revenue: 141.2 }, { year: '2016', revenue: 248.3 },
            { year: '2017', revenue: 260.5 }, { year: '2018', revenue: 276.2 },
            { year: '2019', revenue: 390.1 }, { year: '2020', revenue: 466.2 },
              ],
        primaryXAxis: {
           valueType: 'Category'
        },
         primaryYAxis:{
            labelFormat: '${value}Mill'
        },
    }
  },
     provide: {
        chart: [LineSeries, Category]

 }
}
</script>
<style scoped>
 .container{
   height: 350px;
 }
  .margined{
    margin:30px;
  }
</style>