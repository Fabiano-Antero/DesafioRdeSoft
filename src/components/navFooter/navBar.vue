<template>

  <!--Inicio da navBar. ( Class d-lg-none oculta o elemento navBar para
  telas com resolusão maiores que 999px)-->

  <nav class="d-flex justify-content-center d-lg-none navbar fixed-bottom navbar-light bg-light" >
    <ul id="nav-root">
        <li class="nav-item active" >
          <router-link class="nav-link" to="/">
            <span class="home"></span>
            <span class="menu-text text-primary">Home</span>
          </router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" to="/promocoes">
            <span class="promocoes"></span>
            <span class="menu-text">Promoções</span>
          </router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" to="/postos">
            <span class="postos"></span>
            <span class="menu-text">Postos</span>
          </router-link>
        </li>
        <li class="nav-item" >
          <router-link class="nav-link" to="/extratos">
          <span class="extratos"></span>
            <span class="menu-text">
            Extratos</span>
          </router-link>
        </li>
      </ul>
  </nav>

</template>

<script>
</script>

<style src="../../assets/styles/navfooter.css"></style>