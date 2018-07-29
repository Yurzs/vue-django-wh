import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/Main/Index'
import Statistics from '@/components/Main/Statistics'
import Files from '@/components/Main/Files'
import About from '@/components/Main/About'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/statistics',
      name: 'Statistics',
      component: Statistics
    },
    {
      path: '/files',
      name: 'Files',
      component: Files
    },
    {
      path: '/about',
      name: 'About',
      component: About
    },
    {
      path: '/',
      name: 'Index',
      component: Index
    }
  ]
})
