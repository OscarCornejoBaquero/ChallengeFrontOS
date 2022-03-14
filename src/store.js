
import Vue from 'vue'
//import Vuex from '../vuex.js'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        msg : 'Logrado oscarito',
        result1: {
            precio: '150.00',
            aerolinea: 'Latam',
            n_escalas: '2',
            duracion: '90 minutos'
        },
        result2: {
            precio: '250.00',
            aerolinea: 'Latam',
            n_escalas: '2',
            duracion: '90 minutos'
        },
    },
    mutations: {

    },
    actions: {

    },
    getters: {

    }
})