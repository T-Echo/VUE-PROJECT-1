import {
  reqShiwu,
  reqShiwuList
} from '../../api'

import {
  RECEIVE_SHIWUTAB,
  RECEIVE_SHIWULIST
} from '../mutation-types'

const state = {
  shiwuTab: {},
  shiwuList: []
}

const mutations = {
  [RECEIVE_SHIWUTAB](state,{shiwuTab}){
    state.shiwuTab = shiwuTab
  },
  [RECEIVE_SHIWULIST](state,{shiwuList}){
    state.shiwuList = shiwuList
  }
}

const actions = {
  async getShiwuTab({commit}){
    const result = await reqShiwu()
    if (result.code === 0){
      const shiwuTab = result.data
      commit(RECEIVE_SHIWUTAB,{shiwuTab})
    }
  },
  async getShiwuList({commit}){
    const result = await reqShiwuList()
    if (result.code === 0){
      const shiwuList = result.data
      commit(RECEIVE_SHIWULIST,{shiwuList})
    }
  }
}

const getters = {

}

export default {
  state,
  mutations,
  actions,
  getters
}
