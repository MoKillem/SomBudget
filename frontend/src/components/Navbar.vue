<template>
  <v-card
    flat
    tile
    m-5
  >
    <v-toolbar dense color='info'>

      <v-toolbar-title class='white-text'>SomBudget</v-toolbar-title>

      <v-spacer></v-spacer>
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
    .white-text{
      color:white;
    }
</style>