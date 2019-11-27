import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import iView from 'iview'

import 'iview/dist/styles/iview.css'
import './assets/css/base.less'
import './assets/css/markdown.less'

import 'highlight.js/styles/github.css'

import router from './router'

Vue.config.productionTip = false

Vue.use(VueRouter)
Vue.use(iView)

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
