<template>
    <div id="app" class = 'margined'>
        <v-card>
            <v-card-title class="display-5 font-weight-bold">Revenue</v-card-title>
        <v-card-text>
         <ejs-accumulationchart id="container" :legendSettings='legendSettings'>
            <e-accumulation-series-collection>
                <e-accumulation-series :dataSource='seriesData' xName='x' yName='y' radius='100%'> </e-accumulation-series>
            </e-accumulation-series-collection>
        </ejs-accumulationchart>
        </v-card-text>
        </v-card>
    </div>
</template>
<script>
import Vue from "vue";
import { AccumulationChartPlugin, PieSeries, AccumulationLegend } from "@syncfusion/ej2-vue-charts";

Vue.use(AccumulationChartPlugin);

export default {
  data() {
    return {
      seriesData: [
           { x: 'Jan', y: 3 }, { x: 'Feb', y: 3.5 },
           { x: 'Mar', y: 7 }, { x: 'Apr', y: 13.5 },
           { x: 'May', y: 19 }, { x: 'Jun', y: 23.5 },
           { x: 'Jul', y: 26 }, { x: 'Aug', y: 25 },
           { x: 'Sep', y: 21 }, { x: 'Oct', y: 15 }
            ],
       legendSettings: {
        visible: true
       }
    };
  },
  provide: {
     accumulationchart: [PieSeries, AccumulationLegend]
  }
};
</script>
<style>
 #container {
     height: 350px;
 }
</style>