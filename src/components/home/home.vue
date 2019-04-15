<template>
  <div>
    <section class="Section1">
        <div class="row">
          <div class="col-ms-12 col-md-12" id="rede">
            <Slide class="d-lg-none" noOverlay>
              <div class="row"> 
                <div class="col col-ms-12">
                  <img :src="foto.url" class="rounded-circle img-fluid" style="width:60px;height:60px;">
                  <span id="name" class=" align-text-bottom text-dark">{{ foto.titulo  }}</span> 
                </div>
              </div>
              <a id="home" href="#"> 
                <span>Minha conta</span>  
              </a>
              <a id="forma" href="#"> 
                <span>Formas de pagamento</span>  
              </a>
              <a id="histoia" href="#"> 
                <span>Histórico de pagamentos</span>  
              </a>
              <a id="resgate" href="#"> 
                <span>Resgate de pontos</span>  
              </a>
              <a id="indicar" href="#"> 
                <span>indicar amigo</span>  
              </a>
              <a id="ajuda" href="#"> 
                <span>Ajuda</span>  
              </a>
              <a id="sobre" href="#"> 
                <span>Sobre o app</span>  
              </a>
              <a id="sair" href="#"> 
                <span>Logout</span>  
              </a>
            </Slide>
            <h1 class=" text-right">{{ title }}</h1>
          </div>
        </div>
      <div class="container-fluid">
        <div class="row">
          <div class="col-ms-12 col-md-12 bortex">
            <p class="text-right font-weight-bold">{{ msg }}</p>
          </div>
        </div>
      </div>
    </section>
    <section class="Section2"> 
      <div class="container-fluid">
        <div class="row">
          <div class="col-ms-12 col-md-12" id="ola">
            <h2 class="text-left ">{{ welcome }}</h2>
            <p class="text-left ">{{ welcome2 }}</p>
          </div>
        </div>
      </div>
    </section>
    <section class="Section3"> 
      <div class="container-fluid">
        <div class="row">
          <div class="col-ms-12 col-md-12">
            <button type="button" class="btn btn-secondary btn-lg btn-block font-weight-bold" v-b-modal.modal-sm variant="primary">
              PAGUE PELO APP
            </button>
          </div>
          <div class="col-ms-12 col-md-12" id="pag">
            <p class="text-center">{{ msgpag }}</p>
          </div>
          <div class="col-ms-12 col-md-12">
            <a class="nav-link text-center" href="#" v-b-modal.modal-sm2 variant="primary"><i class="material-icons align-bottom">link</i>
              <span >Saiba aqui como pagar.</span>
            </a>
          </div>
        </div>
      </div>
      <div>
        <b-modal id="modal-sm" size="sm" title="Pagamento On-line">sistema temporariamente indisponível.</b-modal>
        <b-modal id="modal-sm2" size="sm" title="Saiba aqui como pagar.">sistema temporariamente indisponível.</b-modal>
      </div>
    </section>
  </div>
</template>

<script >
import { Slide } from 'vue-burger-menu'

export default {

  components: {
        Slide // Register your component
    },

  data() {

    return {
      title: 'rede+',
      msg: 'O pit stop onde você ganha pontos e muito mais!',
      welcome: 'Olá, Fabiano!',
      welcome2: 'Você está agora em um posto participante da rede+',
      msgpag: 'Efetue o pagamento on-line pelo app e acumule seus pontos automaticamnete.',
      foto: {
        url: 'https://scontent.ffor11-1.fna.fbcdn.net/v/t1.0-9/50593678_1685953528171930_8562900921082707968_n.jpg?_nc_cat=104&_nc_ht=scontent.ffor11-1.fna&oh=31de5e44500a8b9fd1465a5f500c980b&oe=5D2F86E0',
        titulo:'Fabiano Antero',
      }
    }
  }
}

</script>
<style>

div > #rede > h1{
 font-family:
 
}
#name{
 font-family: 'Baloo';
  margin: 0px 0px 20px 10px;
}
div > .bortex > p{
  
  font-size: 40px ;
  margin: 10px 0px 10px 0px;
}

div > #ola > p{
  font-size: 30px ;
  margin: 10px 0px 25px 0px;
}

div > #pag > p{
  color: rgb(109, 107, 107);
  font-size: 1.2em;
  margin: 10px 0px 10px 0px;
}
div > a{
  font-size: 16px ;
  margin: 10px 0px 50px 0px;
}
.bortex{
  border-style: solid;
  border-width: 4px 0px 4px 0px;
  margin: 10px 0px 30px 0px;
}
.Section1{
    background: url('../../assets/img/1790.jpg');
    background-repeat: no-repeat;
    background-size:100%;
    bottom: 0;
    color: white;
    overflow: auto;
    padding: 1.5em;
    width: 100%;
    height: auto;
    background-size: cover;
}
.Section2{
    background: url('../../assets/img/BG\ home.png');
    background-repeat: no-repeat;
    background-size:100%;
    bottom: 0;
    color: white;
    overflow: auto;
    padding: 1em;
    background-size: cover;
}
.Section3{
    background-color: white;
    background-size:100%;
    bottom: 0;
    overflow: auto;
    padding: 3em;
    width: 100%;
    height: auto;
    background-size: cover;
}
    .bm-burger-button {
      position: absolute;
      width: 36px;
      height: 25px;
      left: 25px;
      top: 20px;
      cursor: pointer;
    }

    .bm-burger-bars {
      background-color: white;
    }
    .line-style {
      position: absolute;
      height: 20%;
      left: 0;
      right: 0;
    }
    .cross-style {
      position: absolute;
      top: 12px;
      right: 2px;
      cursor: pointer;
    }
    .bm-cross {
      background:  rgb(248, 169, 21);
    }
    .bm-cross-button {
      height: 35px;
      width: 35px;
    }
    .bm-menu {
      height: 100%; /* 100% Full-height */
      width: 0; /* 0 width - change this with JavaScript */
      position: fixed; /* Stay in place */
      z-index: 1000; /* Stay on top */
      top: 0;
      left: 0;
      background-color: #fff; /* Black*/
      overflow-x: hidden; /* Disable horizontal scroll */
      padding-top: 30px; /* Place content 60px from the top */
      transition: 0.5s; /*0.5 second transition effect to slide in the sidenav*/
    }

    .bm-overlay {
      background: rgba(0, 0, 0, 0.);
    }
    .bm-item-list {
      color: black;
      margin-left: 0%;
      font-size: 20px;
    }
    .bm-item-list > * {
      display: flex;
      text-decoration: none;
      padding: 0.5em;
    }
    .bm-item-list > * > span {
      margin-left: 5px;
      font-weight: 425;
      color: grey;
    }
</style>