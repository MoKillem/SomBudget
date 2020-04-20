<template>
  <v-card
    flat
    tile
    m-5
  >
    <v-toolbar dense>

      <v-toolbar-title>SomBudget</v-toolbar-title>

      <v-spacer></v-spacer>
    <v-btn text @click="routePush('/')" color='primary' small >General analysis</v-btn>
    <v-btn text color='primary' small>Sectional Analysis</v-btn>
    <v-btn text color='primary' small>Commentary</v-btn>
    </v-toolbar>
  </v-card>
</template>
<script>
export default {
    methods: {
        routePush(name){
            this.$router.push(name)
        },
    }
    
}
</script>
<style scoped>
    
</style>