import Vue from 'vue'
import App from './App'
import { store } from './store'
import * as firebase from 'firebase'

// GoogleMaps

import * as VueGoogleMaps from 'vue2-google-maps'

// Import F7
import Framework7 from 'framework7'

// Import F7 Vue Plugin
import Framework7Vue from 'framework7-vue'

// Import Framework7 icon fonts

import Framework7Icons from 'framework7-icons/css/framework7-icons.css'

// './css/framework7-icons.css'

// Import F7 iOS Theme Styles
import Framework7Theme from 'framework7/dist/css/framework7.ios.min.css'
import Framework7ThemeColors from 'framework7/dist/css/framework7.ios.colors.min.css'
/* OR for Material Theme:
import Framework7Theme from 'framework7/dist/css/framework7.material.min.css'
import Framework7ThemeColors from 'framework7/dist/css/framework7.material.colors.min.css'
*/
// Import App Custom Styles
// import AppStyles from './css/app.css'

// Import Routes
import Routes from './routes.js'

Vue.use(Framework7Vue)
Vue.use(Framework7)
Vue.use(Framework7Theme)
Vue.use(Framework7ThemeColors)
Vue.use(Framework7Icons)
Vue.use(store)

import VueCordova from 'vue-cordova'
Vue.use(VueCordova, {
  optionTestKey: 'optionTestValue'
})

Vue.use(VueGoogleMaps, {
  load: {
    key: 'AIzaSyDysON6Twe-naM9LG-5xQ7fMXaRd3rXgss',
    libraries: 'places' // This is required if you use the Autocomplete plugin
    // OR: libraries: 'places,drawing'
    // OR: libraries: 'places,drawing,visualization'
    // (as you require)
  }
})

// add cordova.js only if serving the app through file://
if (window.location.protocol === 'file:' || window.location.port === '3000') {
  var cordovaScript = document.createElement('script')
  cordovaScript.setAttribute('type', 'text/javascript')
  cordovaScript.setAttribute('src', 'cordova.js')
  document.body.appendChild(cordovaScript)
}

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  template: '<App/>',
  components: { App },
  created () {
    firebase.initializeApp({
      apiKey: 'AIzaSyDhgmconnYqzLQw0v4dnagAuPkJ_nOuj1o',
      authDomain: 'dks7-4054d.firebaseapp.com',
      databaseURL: 'https://dks7-4054d.firebaseio.com',
      projectId: 'dks7-4054d',
      storageBucket: ''
    })
  },
  data: function () {
    return {
      cordova: Vue.cordova
    }
  },
  framework7: {
    root: '#app',
    /* Uncomment to enable Material theme: */
    material: false,
    routes: Routes
  }
})
