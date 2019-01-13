import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
const domain = 'http://middleapi'

export default new Vuex.Store({
  state: {
    token: localStorage.getItem('user-token') || '',
    errorsAuth: []
  },
  getters: {
    isAuthenticated: state => !!state.token,
    errors: state => state.errorsAuth
  },
  mutations: {
    AUTH_SUCCESS: (state, resp) => {
      state.token = resp
    },
    AUTH_LOGOUT: (state) => {
      state.token = ''
    },
    AUTH_RESPONSE: (state, resp) => {
      state.errorsAuth = resp
    }
  },
  actions: {
    AUTH_REQUEST: ({ commit, dispatch }, user) => {
      return new Promise((resolve, reject) => {
        let data = new FormData()
        data.append('login', user.login)
        data.append('password', user.password)
        let statusQuery = 0
        fetch(domain + '/api/auth', {
          method: 'post',
          body: data
        })
          .then((r) => {
            if (r.status == 200) {
              statusQuery = r.status
            } else {
              statusQuery = r.status
            }
            return r.json()
          })
          .then((response) => {
            if (statusQuery == 200) {
              commit('AUTH_SUCCESS', response.token)
              localStorage.setItem('user-token', response.token)
              resolve(true)
            } else {
              localStorage.removeItem('user-token')
              commit('AUTH_RESPONSE', response.errors)
              resolve(false)
            }
          })
          .catch((err) => {
            localStorage.removeItem('user-token')
            reject(err)
          })
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
