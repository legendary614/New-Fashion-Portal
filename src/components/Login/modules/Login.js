import types from './mutation-types'
import axios from 'axios'
import qs from 'qs'
import * as store from 'store2'

const state = {
  subProperty: {
    isLogged: !!store.get('token'),
    success: false,
    data: {},
    errors: {}
  },
  isLogged: !!store.get('token'),
  success: false,
  data: {},
  errors: {}
}

var instance = axios.create({
  baseURL: 'http://144.217.93.204/'
})
let Token = store.get('token')

if (Token) {
  instance.defaults.headers.common['Authorization'] = `Token ${Token.token}`
} else {
  instance.defaults.headers.common['Authorization'] = null
}

export default {
  state,

  actions: {
    auth ({commit}, payload) {
      axios.post('http://144.217.93.204/authenticate/',
        payload).then(response => {

        store.set('token', response.data)
        commit(types.LOGIN_SUCCESS, response)
      }).catch(response => {
        commit(types.LOGIN_FAIL, response)
      })
    },
    Register ({commit}, payload) {
      axios.post(
        'http://144.217.93.204/register/',
        qs.stringify(payload)
      ).then((response) => {
        commit(types.REGISTER_SUCCESS, response)
      }).catch(({response}) => {
        commit(types.REGISTER_FAIL, response)
      })
    },
    getUserData ({commit}, payload) {

      instance.get(`users/${payload.user_id}/`)
        .then(response => {
          commit(types.GET_USER_SUCCESS, response)
        }).catch(response => {
        commit(types.GET_USER_FAIL, response)
      })
    }
  },
  mutations: {
    [types.LOGIN_SUCCESS] (state, action) {
      state.success = true
      state.data = action.data
    },
    [types.LOGIN_FAIL] (state, action) {
      state.success = false
      state.errors = action.data
    },
    [types.REGISTER_SUCCESS] (state, action) {
      // let { success, data } = state.register
      state.success = true
      state.data = action.data

    },
    [types.REGISTER_FAIL] (state, action) {

      state.success = false
      state.errors = action.data
    },
    [types.GET_USER_SUCCESS] (state, action) {
      console.log(action)
      state.success = true
      state.data = action.data
    },
    [types.GET_USER_FAIL] (state, action) {
      state.success = false
      state.errors = action.data
    },
    [types.RESET_STORE] (state, action) {
      state = state.subProperty
    }
  },
  getters: {
    getAuthData () {
      return {
        success: state.success,
        data: state.data,
        errors: state.errors
      }
    },
    getUserData () {
      return {
        success: state.success,
        data: state.data,
        errors: state.errors
      }
    },
    isLoggedIn () {
      return state.isLogged
    }
  }
}
