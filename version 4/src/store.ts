import Vue from 'vue';
import Vuex from 'vuex';
import productos from './modules/productos';
import {getters} from './modules/getters';
import {mutations} from './modules/mutations';
Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
        carro: [],
    },
    getters: getters,
    mutations:mutations,
    modules: {
        productos
    }
});

