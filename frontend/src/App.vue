<template>
  <div id="app">
    <Navbar/>
  <router-view />
  
  </div>
</template>

<script>
import Navbar from "@/components/Navbar.vue";

export default {
  components: {
    Navbar,
  },
 
}
</script>





<style>
@import url('https://fonts.googleapis.com/css2?family=IBM+Plex+Sans&display=swap');
#app {
  font-family: 'IBM Plex Sans', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}


</style>
