
import Vue from 'vue'
//import Vuex from '../vuex.js'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        msg : 'Logrado oscarito',
        hometown:'',
        destination_city:'',
        departure_date:'',
        return_date:'',
        result1: {
            precio: '150.00',
            aerolinea: 'Latam Airlines',
            n_escalas: '3',
            duracion: '90 minutos'
        },
        result2: {
            precio: '175.00',
            aerolinea: 'Avianca',
            n_escalas: '2',
            duracion: '100 minutos'
        },
        result3: {
            precio: '182.00',
            aerolinea: 'American Airlines',
            n_escalas: '1',
            duracion: '70 minutos'
        },
    },
    mutations: {


    },
    actions: {

    },
    getters: {
        result1( state ){
            return state.result1;
        },
        result2( state ){
            return state.result2;
        },
        result3( state ){
            return state.result3;
        },
        hometown( state ){
          return state.hometown;
        }
    }
})