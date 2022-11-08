import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    usuario:'',
    idusr:0,
    nombre:'',
    tipo:0,
  },
  getters: {
  },
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
  actions: {
  },
  modules: {
  }
})
