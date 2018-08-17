import Vue from 'vue'
import Router from 'vue-router'
import InputWindow from '../components/InputWindow'
import NamePlate from '../components/NamePlate'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: InputWindow
    },
    {
      path: '/nameplates',
      component: NamePlate
    }
  ]
})
