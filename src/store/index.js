import Vue from 'vue'
import Vuex from 'vuex'
import usersAPI from './../apis/users'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    currentUser: {
        id: -1,
        name: '',
        email: '',
        image: '',
        isAdmin: false
      },
      isAuthenticated: false,
      token: ''
  },
  getters: {
  },
  // 用來修改 status 方法 (由commit 發動 mutations)
  mutations: {
    setCurrentUser (status, currentUser) {
      status.currentUser = {
        ...status.currentUser,
        ...currentUser
      }
      status.token = localStorage.getItem('token')
      status.isAuthenticated = true
    },
    revokeAuthentication (state) {
      state.currentUser = {}
      state.token = ''
      state.isAuthenticated = false
      localStorage.removeItem('token')
    }
  },
  // 透過API 取得資料 (由dispatch 發動 actions)
  actions: {
    async fetchCurrentUser({ commit }) {
      try {
        const { data } = await usersAPI.getCurrentUser()

        if(data.status === 'error') {
          throw new Error(data.message)
        }

        const { id, name, email, image, isAdmin } = data

        commit('setCurrentUser', {
          id, name, email, image, isAdmin
        })
        return true
      } catch (error) {
        console.error(error.message)
        commit('revokeAuthentication')
        return false
      }
    }
  }
})