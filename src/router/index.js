import Vue from 'vue'
import VueRouter from 'vue-router'

import Markdown from '../pages/Markdownit.md'
// import MdDocument from '../pages/MdDocument.md'

Vue.use(VueRouter)

export default new VueRouter({
  routes: [
    // {
    //   path: '/',
    //   redirect: '/markdown'
    // },
    {
      path: '/',
      name: 'markdown',
      component: Markdown
    }
    // {
    //   path: '/md-document',
    //   name: 'md-document',
    //   component: MdDocument
    // }
  ]
})
