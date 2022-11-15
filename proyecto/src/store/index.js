import Vue from 'vue'
import Vuex from 'vuex'
import VuexPersistence from 'vuex-persist'

Vue.use(Vuex)

const storage =  new Vuex.Store({
  state: {
    usuario:'',
    idusr:0,
    nombre:'',
    tipo:0,
  },
  // getters: {
  // },
  mutations: {
    SetUsuario(state,value){
      state.usuario = value;
    },
    SetIdusr(state,value){
      state.idusr = value;
    },
    Setnombre(state,value){
      state.nombre = value;
    },
    SetTipo(state,value){
      state.tipo = value;
    },
  },
  plugins: [
    new VuexPersistence({
      storage:window.localStorage
    }).plugin
  ]
  // actions: {
  // },
  // modules: {
  // }
})

export default storage;
