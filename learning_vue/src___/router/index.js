import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'   // import component 
import zerozeroone from '@/views/001'
import about_me from '@/views/about'
import vue_playground from '@/views/vue_playground'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',    // we can use this name to represent correspoding component
      component: HelloWorld    // when you access the path, correspoding component will be vender.
    },
    {
      path: '/001',
      name: '001',
      component: zerozeroone
    },
    {
      path: '/about_me',
      name: 'about_me',
      component: about_me,
    },
    {
      path: '/vue_playground',
      name: 'vue_playground',
      component: vue_playground
    }
  ]
})
