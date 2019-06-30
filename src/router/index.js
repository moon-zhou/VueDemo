import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import BeautifulGirl from '@/components/BeautifulGirl'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/helloworld',
      name: 'HelloWorld',
      component: HelloWorld
    }, {
      path: '/beautifulgirl',
      name: 'BeautifulGirl',
      component: BeautifulGirl
    }
  ]
})
