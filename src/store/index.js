import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    posts: []
  },
  getters: {
    getPosts(state) {
      return state.posts
    }
  },
  mutations: {
    setPosts(state, mewPosts) {
      state.posts = mewPosts
    },
  },
  actions: {
    initStore({ commit }, posts) {
      commit('setPosts', posts)
    },
  },
})
