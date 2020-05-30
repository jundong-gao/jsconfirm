import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false
import jsconfirm from './plugins/jsconfirm/index.js'
Vue.use(jsconfirm)

new Vue({
  render: h => h(App),
}).$mount('#app')
