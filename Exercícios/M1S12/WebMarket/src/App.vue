<template>
  <v-layout>
  
    <AppBar />
    
    <v-main>
          <router-view></router-view>
    </v-main>
  </v-layout>
  
</template>

<script>
import AppBar from "./components/AppBar.vue"

export default {
  name: 'app',
  components: {AppBar},
  data () {
    return {
      //
    }
  }
}
</script>
