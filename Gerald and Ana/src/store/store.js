import Vue from 'vue'
import Vuex from 'vuex'
import productos from './productos';
import {getters} from './getters';
import {mutations} from './mutations';
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
        carro: [],
    },
    getters: getters,
    mutations:mutations,
    modules: {
        productos
    }
});

