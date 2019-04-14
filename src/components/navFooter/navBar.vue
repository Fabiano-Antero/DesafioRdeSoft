<template>

  <!--Inicio da navBar. ( Class d-lg-none oculta o elemento navBar para
  telas com resolusão maiores que 999px)-->

  <nav class="d-flex justify-content-center d-lg-none navbar fixed-bottom navbar-light bg-light" >
    <ul id="nav-root">
        <li class="nav-item active" >
          <a class="nav-link" href="#" >
            <span class="home"></span>
            <span class="menu-text text-primary">Home</span>
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#" >
            <span class="promocoes"></span>
            <span class="menu-text">Promoções</span>
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">
            <span class="postos"></span>
            <span class="menu-text">Postos</span>
          </a>
        </li>
        <li class="nav-item" >
          <a class="nav-link" href="#">
          <span class="extratos"></span>
            <span class="menu-text">
            Extratos</span>
          </a>
        </li>
      </ul>
  </nav>

</template>

<script>
</script>

<style src="../../assets/styles/navfooter.css"></style>