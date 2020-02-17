import Vue from 'vue'
import App from './App.vue'
import firebase from "firebase";
import router from './router'
import Buefy from 'buefy'
import './../node_modules/bulma/css/bulma.css';
import vuetify from './plugins/vuetify';
import config from './plugins/firebase.config'
import VueTyperPlugin from 'vue-typer'

Vue.use(VueTyperPlugin)
Vue.use(Buefy, {
  defaultModalCanCancel: []
});
Vue.use(firebase);
Vue.config.productionTip = false;

firebase.initializeApp(config);

new Vue({
  created (){
    document.title = 'Eric DG'
  },
  router,
  vuetify,
  render: function (h) { return h(App) }
}).$mount('#app');
