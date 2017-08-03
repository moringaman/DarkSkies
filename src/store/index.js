import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {
    center: {lat: 54.0, lng: -1.6},
    loadedMarkers: [
      {
        sender: 'John Smith',
        timestamp: '12:00:00',
        position: {lat: 53.5, lng: -1.34}
      },
      {
        sender: 'Andre Jones',
        timestamp: '12:00:00',
        position: {lat: 51.5, lng: -1.04}
      },
      {
        sender: 'Peter Davis',
        timestamp: '12:00:00',
        position: {lat: 50.5, lng: -1.36}
      },
      {
        sender: 'Susan Phillips ',
        timestamp: '12:00:00',
        position: {lat: 51.2, lng: -1.24}
      }
    ]
  },
  mutations: {
  },
  actions: {
  },
  getters: {
    loadedMarkers (state) {
      return state.loadedMarkers
    }
  }
})
