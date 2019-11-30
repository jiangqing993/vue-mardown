import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import iView from 'iview'

import 'iview/dist/styles/iview.css'
import './assets/css/base.less'
import './assets/css/markdown.less'

import 'highlight.js/styles/github.css'

import './assets/fonts/iconfont.css'

import router from './router'

import ComSearch from '@/components/ComSearch'
import DemoBlock from '@/components/DemoBlock'

Vue.config.productionTip = false

Vue.use(VueRouter)
Vue.use(iView)

// 搜索组件
Vue.component('com-search', ComSearch)
Vue.component('demo-block', DemoBlock)

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
