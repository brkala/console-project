import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import "@/plugins/element_ui";
import "@/plugins/mdi_icons";
import "@/plugins/splitpanes";


Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
