import {
  reqClassify
} from '../../api/index'

import {
  RECEIVE_CLASSIFY
} from '../mutation-types'

const state = {
  classify: {}
}

const mutations = {
  [RECEIVE_CLASSIFY](state,{classify}){
    state.classify = classify
  }
}

const actions = {
  async getClassify({commit}){
    const result = await reqClassify()
    if (result.code === 0){
      const classify = result.data
      commit(RECEIVE_CLASSIFY,{classify})
    }
  }
}

const getters = {

}

export default {
  state,
  actions,
  mutations,
  getters
}
