import Vue from 'vue'
import App from './App.vue'
import router from './router'
import Buefy from 'buefy'
import './../node_modules/bulma/css/bulma.css';

Vue.use(Buefy)
Vue.config.productionTip = false

new Vue({
  router,
  render: function (h) { return h(App) }
}).$mount('#app')
