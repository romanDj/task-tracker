import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    token: localStorage.getItem('user-token') || '',
    status: '',
    hasLoadedOnce: false,
    responseServer: ''
  },
  getters: {
    isAuthenticated: state => !!state.token,
    authStatus: state => state.status,
    response: state => state.responseServer
  },
  mutations: {
    AUTH_REQUEST: (state) => {
      state.status = 'loading'
    },
    AUTH_SUCCESS: (state, resp) => {
      state.status = 'success'
      state.token = resp.token
      state.hasLoadedOnce = true
    },
    AUTH_ERROR: (state) => {
      state.status = 'error'
      state.hasLoadedOnce = true
    },
    AUTH_LOGOUT: (state) => {
      state.token = ''
    },
    SET_response: (state, resp) => {
      state.responseServer = resp
      // console.log(resp)
    }
  },
  actions: {
    AUTH_REQUEST: ({ commit, dispatch }, user) => {
      return new Promise((resolve, reject) => {
        let data = new FormData()
        data.append('login', user.login)
        data.append('password', user.password)

        fetch('http://middleapi/api/auth', {
          method: 'post',
          body: data
        })
          .then((r) => r.json())
          .then((response) => {
            commit('SET_response', response)
            resolve()
          })
          .catch((e) => {})
      })
    },
    AUTH_LOGOUT: async ({ commit, dispatch }) => {
      return new Promise((resolve, reject) => {
        commit('AUTH_LOGOUT')
        localStorage.removeItem('user-token')
        resolve()
      })
    }
  }

})
