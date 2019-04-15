import Home from './components/home/home.vue';
import Promocao from './components/promocao/promocoes.vue';
import Postos from './components/posto/postos.vue'
import Extratos from './components/extrato/extratos.vue'

export const routes = [

    { path: '', component: Home, titulo: 'Home' },
    { path: '/promocoes', component: Promocao, titulo: 'Promoções'},
    { path: '/postos', component: Postos, titulo: 'Postos'},
    { path: '/extratos', component: Extratos, titulo: 'Extratos'}

];