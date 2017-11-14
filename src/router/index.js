import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/home/homePage'
import FirstPage from '@/components/firstPage/firstPage'
import FirstPageChild from '@/components/firstPage/child/firstPageChild'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/first/:name',
      name: 'First',
      component: FirstPage,
      children: [
        {
          path: 'child',
          component: FirstPageChild
        }
      ]
    }
  ]
})
