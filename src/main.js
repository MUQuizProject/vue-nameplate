// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Vuex from 'vuex'
import App from './App'
import router from './router'

Vue.config.productionTip = false
Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    namelists: []
  },
  mutations: {
    setNameLists (state, obj) {
      state.namelists = []
      let linelist = obj.inputtext.split(/\r\n|\r|\n/)
      linelist.forEach(element => {
        let divided = element.split(',')
        state.namelists.push({
          surname: divided[0],
          given: divided[1],
          school: divided[2],
          grade: divided[3]
        })
      })
    }
  },
  actions: {
    setNameLists ({ commit }, obj) {
      commit('setNameLists', obj)
      console.log('action: setNameLists')
      console.log(obj)
    }
  }
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
