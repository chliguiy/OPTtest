import Vue from 'vue'
import HelloWorld from '../components/HelloWorld.vue'

import Detail from '../components/Detail.vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  routes: [
    { path: '/', component: HelloWorld },
    { path: '/detail',name:'detail', component: Detail,props: true },
    {path:'*',component:HelloWorld}
  ]
})

export default router
