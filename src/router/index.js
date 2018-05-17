import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import MaCodePuller from '@/components/MaCodePuller'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/maCodePuller',
      name: 'MaCodePuller',
      component: MaCodePuller
    }
  ]
})
