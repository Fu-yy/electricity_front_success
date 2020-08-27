import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import FirstPage from '@/views/FirstPage'
import SecondPage from '@/views/SecondPage'

Vue.use(Router)

export default new Router({
  routes: [
    // {
    //   path: '/',
    //   name: 'HelloWorld',
    //   component: HelloWorld
    // }
    {
      path:"/",
      name:'FirstPage',
      component:FirstPage
    },
    {
      path:"/firstPage",
      name:'FirstPage',
      component:FirstPage
    },
    {
      path:'/secondPage',
      name:'SecondPage',
      component:SecondPage
    }
  ]
})
