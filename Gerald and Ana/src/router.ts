import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Carro from './views/carro.vue'
Vue.use(Router)

// Aqui es donde se especifica las RUtas, Con vue-Router.Para entender mejor esto, ver modulo 5. Pero si quieren agregar una nueva pagina entonces. Import (nombre) from './views/archivo.vue"
//Luego donde "routes" se abre {} y en su contenidose pone Patch:(Dirrecion) name:"Nombre componente",component: Atributo de llamada


export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
     {
      path: '/Carro',
      name: 'Carro',
      component:Carro
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    }
  ]
})
