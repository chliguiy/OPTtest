import Vue from 'vue'
import Home from '../components/Home.vue'
import Detail from '../components/Detail.vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)
// paramétrages de route de l'application Test OCS
const router = new VueRouter({
  mode: 'history',
  routes: [
    { path: '/', component: Home },
    { path: '/detail', name: 'detail', component: Detail, props: true },
    { path: '*', component: Home }
  ]
})

export default router
