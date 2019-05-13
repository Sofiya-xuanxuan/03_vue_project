import Vue from 'vue'
import Vuex from 'vuex'
import user from './user';
Vue.use(Vuex)
//使用模块化
export default new Vuex.Store({
  modules:{
    user
  }
})
