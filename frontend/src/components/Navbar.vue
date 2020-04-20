<template>
  <v-card
    flat
    tile
    m-5
  >
    <v-toolbar dense>

      <v-toolbar-title>SomBudget</v-toolbar-title>

      <v-spacer></v-spacer>

     <v-btn text color='primary' small>Signup</v-btn>
    <v-btn text @click="routePush('/')" color='primary' small >General</v-btn>
    <v-btn text color='primary' small> Tasks</v-btn>
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