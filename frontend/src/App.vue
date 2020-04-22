<template>
  <v-app>
    <Navbar></Navbar>
     <v-content class="margined">
        <router-view></router-view>
    </v-content>
  </v-app>
</template>

<script>
import Navbar from '@/components/Navbar.vue'
export default {
  name: 'App',

  components: {
    Navbar,
    
  },

  data: () => ({
    //
  }),
};
</script>

<style scoped>
  .margined{
    margin:30px;
  }
</style>
