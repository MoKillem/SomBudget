<template>
  <v-card
    flat
    tile
    m-5
  >
    <v-toolbar dense color='info'>

      <v-toolbar-title class='white-text'>SomBudget</v-toolbar-title>

      <v-spacer></v-spacer>
      <v-menu offset-y>
      <template v-slot:activator="{ on }">
        <v-btn
        text
        color="white"
          tile
          v-on="on"
        >
          Menu
        </v-btn>
      </template>
      <v-list>
        <v-list-item
        >
          <v-btn text @click = "routePush('/')">General Budget Analysis</v-btn>
        </v-list-item>
<v-list-item
        >
          <v-btn text @click = "routePush('/revenue')">Revenue Analysis</v-btn>
        </v-list-item>
<!-- <v-list-item
        >
          <v-btn text @click = "routePush('/')">2018 Budget</v-btn>
        </v-list-item> -->
<!-- <v-list-item
        >
          <v-btn text @click = "routePush('/')">2017 Budget</v-btn>
        </v-list-item>
<v-list-item
        >
          <v-btn text @click = "routePush('/')">2016 Budget</v-btn>
        </v-list-item>
<v-list-item
        >
          <v-btn text @click = "routePush('/')">2015 Budget</v-btn>
        </v-list-item> -->
      </v-list>
    </v-menu>
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