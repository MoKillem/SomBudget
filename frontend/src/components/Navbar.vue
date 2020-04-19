<template>
  <v-card
    flat
    tile
    m-5
  >
    <v-toolbar dense>

      <v-toolbar-title>Charts</v-toolbar-title>

      <v-spacer></v-spacer>

     <v-btn text color='purple' small>Signup</v-btn>
    <v-btn text @click="routePush('/')" color='purple' small >Signin</v-btn>
    <v-btn text color='purple' small> Tasks</v-btn>
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