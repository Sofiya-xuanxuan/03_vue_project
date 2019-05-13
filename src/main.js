import Vue from 'vue'
import './plugins/axios'
import './cube-ui'
import App from './App.vue'
import router from './router'
import store from './store/'
import axios from 'axios';
import interceptors from './interceptors';

Vue.config.productionTip = false;
Vue.prototype.$ajax = axios;

const vm=new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');

interceptors(vm);
