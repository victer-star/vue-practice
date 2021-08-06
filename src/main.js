import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'
import firebase from 'firebase'

Vue.config.productionTip = false

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyDdpc-kaXvK4Ut4z15PnXksplEhx_PlGaw",
    authDomain: "my-address-pj-a6ca0.firebaseapp.com",
    projectId: "my-address-pj-a6ca0",
    storageBucket: "my-address-pj-a6ca0.appspot.com",
    messagingSenderId: "317099487876",
    appId: "1:317099487876:web:3265a5f19eedfd37cac8d1",
    measurementId: "G-8DN27XGLJX"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
