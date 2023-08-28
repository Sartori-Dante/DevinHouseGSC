<template>
  <v-app-bar class="d-flex align-center">
    <v-icon class="pl-5" size="x-large" >mdi-shuriken</v-icon>
    <v-app-bar-title class="d-flex align-center">
      <v-btn color="d-flex align-center darken grey" to="/">
        <span class="text-h4 font-weight-black">Otaku Web Market</span>
      </v-btn>
    </v-app-bar-title>

    <v-btn dark color="blue" to="/">
      <svg-icon type="mdi" :path="store"></svg-icon>
      Store
    </v-btn>
   
    <v-btn dark color="blue" to="/cart">
      <svg-icon type="mdi" :path="cart"></svg-icon>
      Cart
    </v-btn>
  </v-app-bar>
</template>

<script>
  import SvgIcon from '@jamescoyle/vue-icon';
  import { mdiStore } from '@mdi/js';
  import { mdiCart } from '@mdi/js';
  import { mdiShuriken } from '@mdi/js';

  export default {
    name: "my-component",
    components: {
      SvgIcon
    },
    data() {
      return {
        store: mdiStore,
        cart: mdiCart,
        shuriken: mdiShuriken
      }
    }
  }
</script>


