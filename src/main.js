import Vue from 'vue'
import App from './App'

// GoogleMaps

import * as VueGoogleMaps from 'vue2-google-maps'

// Import F7
import Framework7 from 'framework7'

// Import F7 Vue Plugin
import Framework7Vue from 'framework7-vue'

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

import VueCordova from 'vue-cordova'
Vue.use(VueCordova, {
  optionTestKey: 'optionTestValue'
})

Vue.use(VueGoogleMaps, {
  load: {
    key: 'AIzaSyBvWE_sIwKbWkiuJQOf8gSk9qzpO96fhfY',
    libraries: 'places' // This is required if you use the Autocomplete plugin
    // OR: libraries: 'places,drawing'
    // OR: libraries: 'places,drawing,visualization'
    // (as you require)
  }
})

// add cordova.js only if serving the app through file://
if (window.location.protocol === 'file:' || window.location.port === '8000') {
  var cordovaScript = document.createElement('script')
  cordovaScript.setAttribute('type', 'text/javascript')
  cordovaScript.setAttribute('src', 'cordova.js')
  document.body.appendChild(cordovaScript)
}

/* eslint-disable no-new */
new Vue({
  el: '#app',
  template: '<App/>',
  components: { App },
  data: function () {
    return {
      cordova: Vue.cordova
    }
  },
  framework7: {
    root: '#app',
    /* Uncomment to enable Material theme: */
    // material: true,
    routes: Routes
  }
})
