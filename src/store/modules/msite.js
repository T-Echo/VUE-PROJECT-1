import {
  reqNavList,
  reqMsite
} from '../../api/index'

import {
  RECEIVE_NAV_LIST,
  RECEIVE_MSITE
} from '../mutation-types'


const state = {
  navList: {},
  msite: {}
}

const actions = {
  async getNavList({commit},cb){
    const result = await reqNavList()
    if (result.code === 0){
      const kingKongList = result.data
      commit(RECEIVE_NAV_LIST,{kingKongList})
      typeof cb === 'function' && cb()
    }
  },
  async getMsite({commit},cb){
    const result = await reqMsite()
    if (result.code === 0){
      const msite = result.data
      commit(RECEIVE_MSITE,{msite})
      typeof cb === 'function' && cb()
    }
  }
}

const mutations = {
  [RECEIVE_NAV_LIST](state,{kingKongList}){
    state.navList = kingKongList
  },
  [RECEIVE_MSITE](state,{msite}){
    state.msite = msite
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
