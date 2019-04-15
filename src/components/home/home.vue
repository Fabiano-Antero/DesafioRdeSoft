<template>
  <div>
    <section class="Section1">
        <div class="row">
          <div class="col-ms-12 col-md-12 " id="rede">
            <h1 class="text-right">{{ title }}</h1>
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
              PAQUE PELO APP
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

<script>

export default {

  data() {
    return {
      title: 'rede+',
      msg: 'O pit stop onde você ganha pontos e muito mais!',
      welcome: 'Olá, Paulo!',
      welcome2: 'Você está agora em um posto participante da rede+',
      msgpag: 'Efetue o pagamento on-line pelo app e acumule seus pontos automaticamnete.',
        
    }
  }
}

</script>
<style>

div > #rede > h1{
 font-family: 'Baloo', cursive;
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
</style>