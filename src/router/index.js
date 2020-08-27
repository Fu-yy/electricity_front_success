import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import FirstPage from '@/views/FirstPage'
import SecondPage from '@/views/SecondPage'
import ThirdPage from '@/views/ThirdPage'
import ForthPage from '@/views/ForthPage'
import FifthPage from '@/views/FifthPage'
import SixthPage from '@/views/SixthPage'

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
    },
    {
      path:'/thirdPage',
      name:'ThirdPage',
      component:ThirdPage
    },
    {
      path:'/forthPage',
      name:'ForthPage',
      component:ForthPage
    },
    {
      path:'/fifthPage',
      name:'FifthPage',
      component:FifthPage
    },
    {
      path:'/sixthPage',
      name:'SixthPage',
      component:SixthPage
    }
  ]
})
