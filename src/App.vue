<template>
  <div id="app">

    <!-- Statusbar -->
    <f7-statusbar></f7-statusbar>

   <!-- Right Panel -->
    <f7-panel right cover layout="dark">
      <f7-view id="right-panel-view" navbar-through :dynamic-navbar="true">
        <f7-navbar v-if="$theme.ios" title="Menu" sliding></f7-navbar>
        <f7-pages>
          <f7-page>
            <f7-navbar v-if="$theme.material" title="Right Panel" sliding></f7-navbar>
            <f7-block>
              <p>Right panel content goes here</p>
            </f7-block>
            <f7-block-title>Load page in panel</f7-block-title>
            <f7-list>
              <f7-list-item link="/about/" title="About"></f7-list-item>
              <f7-list-item link="/form/" title="Form"></f7-list-item>
            </f7-list>
            <f7-block-title>Load page in main view</f7-block-title>
            <f7-list>
              <f7-list-item link="/about/" title="About" link-view="#main-view" link-close-panel></f7-list-item>
              <f7-list-item link="/form/" title="Form" link-view="#main-view" link-close-panel></f7-list-item>
            </f7-list>
          </f7-page>
        </f7-pages>
      </f7-view>
    </f7-panel>

    <!-- Main Views -->
      <f7-views >
      <f7-view id="main-view" navbar-through :dynamic-navbar="true" main>
        <!-- iOS Theme Navbar -->
        <f7-navbar id="ios-nav" v-if="$theme.ios">
           <f7-nav-left>
            <a :href="/form/" link-view="#main-view" link-close-panel><i class="f7-icons" >person</i></a>
          </f7-nav-left>
          <f7-nav-center sliding>DarkSkies 7</f7-nav-center>
          <f7-nav-right>
            <f7-link icon="icon-bars" open-panel="right"></f7-link>
          </f7-nav-right>
        </f7-navbar>
        <!-- Pages -->
        <f7-pages>
          <f7-page id="home">
            <!-- Material Theme Navbar -->
            <f7-navbar v-if="$theme.material">
              <f7-nav-left>
                <f7-link icon="icon-bars" open-panel="left"></f7-link>
              </f7-nav-left>
              <f7-nav-center sliding>Material Skies</f7-nav-center>
              <f7-nav-right>
                <f7-link icon="icon-bars" open-panel="right"></f7-link>
              </f7-nav-right>
            </f7-navbar>
            <!-- Page Content -->
           <!-- <f7-block-title>UK Chemtrail Map</f7-block-title>
            <f7-content-block><p>Real time chemtrail recording from the grass roots.
               Take a picture of the chemtrails above your location for all to see where 'they' are spraying today </p></f7-content-block> -->
            <!--<f7-block  id="map-container"> -->
              <div v-if="!cordova" class="alert">
      There might be an error with your installation. Check that <strong>Vue.cordova</strong> is available
    </div>

    <div v-if="cordova && !cordova.deviceready" class="alert">
      The `deviceready` event has not been triggered.
      <br />
      Check the <a href="https://github.com/kartsims/vue-cordova#troubleshooting">Troubleshooting section</a> of vue-cordova's README.
    </div>
         <app-map></app-map>
           <!-- </f7-block> -->
          <!--  <f7-list>
              <f7-list-item link="/about/" title="About DarkSkies 7"></f7-list-item>
             </f7-list>
              <f7-list-item link="/form/" title="Form"></f7-list-item>
              <f7-list-item link="/dynamic-route/blog/45/post/125/?foo=bar#about" title="Dynamic Route"></f7-list-item>
            </f7-list>
            <f7-block-title>Side Panels</f7-block-title>
            <f7-block>
              <f7-grid>
                <f7-col width="50">
                  <f7-button open-panel="left">Left Panel</f7-button>
                </f7-col>
                <f7-col width="50">
                  <f7-button open-panel="right">Right Panel</f7-button>
                </f7-col>
              </f7-grid>
            </f7-block>
            <f7-block-title>Modals</f7-block-title>
            <f7-block>
              <f7-grid>
                <f7-col width="50">
                  <f7-button open-popup="#popup">Popup</f7-button>
                </f7-col>
                <f7-col width="50">
                  <f7-button open-login-screen="#login-screen">Login Screen</f7-button>
                </f7-col>
              </f7-grid>
            </f7-block> -->
          </f7-page>
        </f7-pages>
      </f7-view>  
    </f7-views>

   <f7-views v-if="loggedIn">
    <f7-view >
        <f7-pages>
          <f7-page login-screen>
            <f7-login-screen-title>Login</f7-login-screen-title>
            <f7-list form>
              <f7-list-item>
                <f7-label>Username</f7-label>
                <f7-input name="username" placeholder="Username" type="text"></f7-input>
              </f7-list-item>
              <f7-list-item>
                <f7-label>Password</f7-label>
                <f7-input name="password" type="password" placeholder="Password"></f7-input>
              </f7-list-item>
            </f7-list>
            <f7-list>
              <f7-list-button title="Sign In" @click="loggedIn=true"></f7-list-button>
              <f7-list-label>
                <p>Click Sign In to close Login Screen</p>
              </f7-list-label>
            </f7-list>
          </f7-page>
        </f7-pages>
      </f7-view>
    </f7-views>

 <!-- Login Screen -->
    <f7-login-screen id="login-screen">
      <f7-view>
        <f7-pages>
          <f7-page login-screen>
            <f7-login-screen-title>Login</f7-login-screen-title>
            <f7-list form>
              <f7-list-item>
                <f7-label>Username</f7-label>
                <f7-input name="username" placeholder="Username" type="text"></f7-input>
              </f7-list-item>
              <f7-list-item>
                <f7-label>Password</f7-label>
                <f7-input name="password" type="password" placeholder="Password"></f7-input>
              </f7-list-item>
            </f7-list>
            <f7-list>
              <f7-list-button title="Sign In" @click="loggedIn=true" close-login-screen></f7-list-button>
              <f7-list-label>
                <p>Click Sign In to close Login Screen</p>
              </f7-list-label>
            </f7-list>
          </f7-page>
        </f7-pages>
      </f7-view>
    </f7-login-screen>

<!-- Popup -->
    <f7-popup id="popup">
      <f7-view navbar-fixed>
        <f7-pages>
          <f7-page>
            <f7-navbar title="Popup">
              <f7-nav-right>
                <f7-link close-popup>Close</f7-link>
              </f7-nav-right>
            </f7-navbar>
            <f7-block>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Neque, architecto. Cupiditate laudantium rem nesciunt numquam, ipsam. Voluptates omnis, a inventore atque ratione aliquam. Omnis iusto nemo quos ullam obcaecati, quod.</f7-block>
          </f7-page>
        </f7-pages>
      </f7-view>
    </f7-popup>

  </div>
</template>

<script>
import Vue from 'vue'
import Map from './components/map.vue'

export default {
  components: {
    appMap: Map
  },
  methods: {
    onF7Init: function () {
      this.$f7.mainView.router.load({url: '/login/'})
    },
    pluginEnabled: function (pluginName) {
      return this.cordova.plugins.indexOf(pluginName) !== -1
    },
    takePicture: function () {
      if (!Vue.cordova.camera) {
        window.alert('Vue.cordova.camera not found !')
        return
      }
      Vue.cordova.camera.getPicture((imageURI) => {
        window.alert('Photo URI : ' + imageURI + '' + this.location)
      }, (message) => {
        window.alert('FAILED : ' + message)
      }, {
        quality: 50,
        destinationType: Vue.cordova.camera.DestinationType.FILE_URI
      })
    },
    getlocation: function () {
      if (!Vue.cordova.geolocation) {
        window.alert('Vue.cordova.geolocation not found !')
        return
      }
      Vue.cordova.geolocation.getCurrentPosition((position) => {
        window.alert('Current position : ' + position.coords.latitude + ',' + position.coords.longitude)
      }, (error) => {
        window.alert('FAILED Error #' + error.code + ' ' + error.message)
      }, {
        timeout: 1000,
        enableHighAccuracy: true
      })
    }
  },
  data: function () {
    return {
      cordova: Vue.cordova,
      loggedIn: false,
      plugins: {
        'cordova-plugin-camera': function () {
          if (!Vue.cordova.camera) {
            window.alert('Vue.cordova.camera not found !')
            return
          }
          Vue.cordova.camera.getPicture((imageURI) => {
            window.alert('Photo URI : ' + imageURI)
          }, (message) => {
            window.alert('FAILED : ' + message)
          }, {
            quality: 50,
            destinationType: Vue.cordova.camera.DestinationType.FILE_URI
          })
        },
        'cordova-plugin-device': function () {
          if (!Vue.cordova.device) {
            window.alert('FAILED : device information not found')
          } else {
            window.alert('Device : ' + Vue.cordova.device.manufacturer + ' ' + Vue.cordova.device.platform + ' ' + Vue.cordova.device.version)
          }
        },
        'cordova-plugin-geolocation': function () {
          if (!Vue.cordova.geolocation) {
            window.alert('Vue.cordova.geolocation not found !')
            return
          }
          Vue.cordova.geolocation.getCurrentPosition((position) => {
            window.alert('Current position : ' + position.coords.latitude + ',' + position.coords.longitude)
          }, (error) => {
            window.alert('FAILED Error #' + error.code + ' ' + error.message)
          }, {
            timeout: 1000,
            enableHighAccuracy: true
          })
        },
        'cordova-plugin-contacts': function () {
          if (!Vue.cordova.contacts) {
            window.alert('Vue.cordova.contacts not found !')
            return
          }
          const ContactFindOptions = ContactFindOptions || function () {}
          Vue.cordova.contacts.find(['displayName'], (contacts) => {
            window.alert('Contacts found : ' + contacts.length)
          }, (error) => {
            window.alert('FAILED : ' + error.code)
          })
        }
      }
    }
  }
}
</script>

<style>

* {
  z-index: 99px;
}

html {
  height: 100%;
}

body {
  height: 100%;
}

#app {
 /* color: #2c3e50;
  margin: 0px auto;
 /* margin: 40px auto; */
  max-width: 640px;
  font-family: Source Sans Pro, Helvetica, sans-serif;
  text-align: center;
}

#main-view {
  position: relative;
}

#home {
  /*background-color: lightskyblue;*/
}

#home .content-block {
  margin: 0px 0px;
  padding: 0px 0px;
}

#home .content-block-inner {
  margin: 0px 0px;
  padding: 0px 0px;
}

#ios-nav {
 color: blue;
}

.logo {
  padding-bottom: 30px;
}

.logo span {
  position: relative;
  top: -30px;
  font-size: 36px;
  margin: 0 20px;
}

.logo img {
  width: 90px;
  height: 90px;
}

f7-navbar {
  opacity: 0.5;
  z-index:5;
}

#map-container {
  z-index: 0;
  margin-top: 20px;
}

#controls {
 margin: 0px 35px auto;
}

div.dump {
  background: #eee;
  text-align: left;
  border: solid 1px #ccc;
  padding: 20px;
  max-width: 600px;
  box-sizing: border-box;
  font-family: monospace;
  white-space: pre;
}

div.alert {
  color: #c00;
  font-weight: bold;
  font-size: .9em;
  padding-bottom: 30px;
  line-height: 1.6;
}

div.alert a {
  color: inherit;
}

div.indicators {
  width: 340px;
  margin: 0 auto 40px;
  text-align: left;
  font-family: Courier, Courier New, sans-serif;
}
div.indicators div {
  padding-bottom: 15px;
  opacity: .6;
}
div.indicators div.ok {
  opacity: 1;
  cursor: pointer;
}
div.indicators div.ok span {
  background: #0c0;
}
div.indicators div span {
  display: inline-block;
  width: 20px;
  height: 20px;
  background: #c00;
  border-radius: 20px;
  position: relative;
  top: 3px;
  margin-right: 15px;
}
div.indicators p {
  font-size: .8em;
  font-weight: bold;
  padding-bottom: 20px;
}
</style>
