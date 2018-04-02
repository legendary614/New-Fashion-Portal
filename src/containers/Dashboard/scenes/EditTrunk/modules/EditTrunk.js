import types from './mutation-types'

const state = {
  settingActivated: false,
  settings: {}
}

export default {
  state,
  actions: {
    getSettings ({ commit }, payload) {
      commit(types.GET_SETTINGS, { ...payload })
    }
  },
  mutations: {
    [types.GET_SETTINGS] (state, action) {
      console.log(action.settings)
      state.settings = action.settings
      state.settingActivated = true
    }
  },
  getters: {
    getSettingActivated () {
      return state.settingActivated
    },
    getSettings () {
      state.settings
    }
  }
}
