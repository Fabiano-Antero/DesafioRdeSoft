<template>
  <div id="app">
    <app-menu></app-menu>
  </div>
</template>

<script>
import Menu from './components/navFooter/navBar.vue';

export default {
  
  components: {
    'app-menu' :  Menu
  }
}
</script>
<style lang="scss">
@import './assets/styles/variables';
@import './assets/styles/bootstrap';
</style>