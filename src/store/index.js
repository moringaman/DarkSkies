import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {
    loadedMarkers: [
      {
        sender: 'user1',
        timestamp: '12:00:00',
        lat: 53.5,
        lng: -1.34
      }
    ]
  },
  mutations: {
  },
  actions: {
  },
  getters: {
  }
})

