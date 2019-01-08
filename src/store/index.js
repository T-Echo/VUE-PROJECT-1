import Vue from 'vue'
import Vuex from 'vuex'
import actions from './actions'
import mutations from './mutations'
import getters from './mutations'

import msite from './modules/msite'
import classify from './modules/classify'
import shiwu from './modules/shiwu'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    msite,
    classify,
    shiwu
  },
  actions,
  mutations,
  getters
})
