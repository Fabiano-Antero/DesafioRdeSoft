<template>
  <div>
    <nav class="navbar navbar-expand-lg d-none d-lg-block navbar-light bg-light">
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          <li v-for="route in routes" class="nav-item">
            <router-link class="nav-link " :to="route.path ? route.path : '/'">{{route.titulo}}</router-link>
          </li>
        </ul>
      </div>
    </nav>
    <router-view></router-view>
    <app-menu></app-menu>
  </div>
</template>

<script>
import menuFooter from './components/navFooter/navBar.vue';
import { routes } from './routes';

export default {
  
  components: {
    'app-menu' :  menuFooter,
    
  },

  data() {

    return {

      routes
    }

  }

}


</script>
<style lang="scss">
@import url('https://fonts.googleapis.com/css?family=Baloo|Baloo+Bhaina|Baloo+Tammudu|Prosto+One');
@import './assets/styles/variables';
@import './assets/styles/bootstrap';
</style>