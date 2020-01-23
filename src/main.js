import Vue from 'vue'
import App from './App.vue'
import firebase from "firebase";
import router from './router'
import Buefy from 'buefy'
import './../node_modules/bulma/css/bulma.css';

Vue.use(Buefy, {
  defaultModalCanCancel: []
});
Vue.use(firebase);
Vue.config.productionTip = false;

let config = {
  apiKey: "AIzaSyA2u-JkM1a9W4FKrWpozO2CiX7BKshTLQ0",
  authDomain: "site-motivation.firebaseapp.com",
  databaseURL: "https://site-motivation.firebaseio.com",
  projectId: "site-motivation",
  storageBucket: "site-motivation.appspot.com",
  messagingSenderId: "731023797038",
  appId: "1:731023797038:web:a0d77e20438839fdc228bf",
  measurementId: "G-85RHQ0C40R"

};
firebase.initializeApp(config);

new Vue({
  router,
  render: function (h) { return h(App) }
}).$mount('#app');
