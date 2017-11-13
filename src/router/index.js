import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/home/homePage'
import FirstRoute from '@/components/firstPage/FirstRoute'
import FirstRouteChild from '@/components/firstPage/child/FirstRouteChild'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/firstroute/:name',
      name: 'FirstRoute',
      component: FirstRoute,
      children: [
        {
          path: 'child',
          component: FirstRouteChild
        }
      ]
    }
  ]
})
