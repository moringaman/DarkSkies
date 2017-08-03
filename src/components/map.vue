<template>
<div>
 <!-- Blue with custom size -->
<!--<f7-preloader color="blue" size="44px"></f7-preloader>-->
   <!-- <gmap-map
        :center="{lat:53, lng:-1.4}"
        :zoom="6"
        map-type-id="terrain"
        disableDefaultUI="true"
        style="width: 100%; height: 600px; z-index: 0">
    </gmap-map> -->
    <gmap-map
    :center="center"
    :disableDefaultUI="true"
    :zoom="6"
    style="width: 100%; height: 500px; z-index: 0">
    <gmap-info-window
     :options="infoOptions"
     :position="infoWindowPos"
     :opened="infoWinOpen"
     :content="infoContent"
     @closeclick="infoWinOpen=false">
    </gmap-info-window>
    <gmap-marker
      :key="index"
      v-for="(m, index) in markers"
      :position="m.position"
      :clickable="true"
      :draggable="false"
      @mouseover="statusText = 'Trails seen by ' + m.sender + ' @ ' + m.timestamp"
      @mouseout="statusText = null"
      @click="toggleInfoWindow(m,index)"
    ></gmap-marker>
    <div slot="visible">
      <div style="bottom: 0; left: 0; right: 0; line-height: 50px; background-color: rgba(0,0,0, 0.5); color: white; position: absolute; z-index: 100; font-size: 20px">
        {{statusText}}
      </div>
    </div>


  </gmap-map>

</div>
</template>

<script>
import Vue from 'vue'
export default {
  data () {
    return {
      center: {lat: 54.0, lng: -1.6},
      statusText: '',
      infoContent: '',
      infoWindowPos: {
        lat: 0,
        lng: 0
      },
      infoWinOpen: false,
      currentMidx: null,
      infoOptions: {
        pixelOffset: {
          width: 0,
          height: -35
        }
      }
    }
  },
  computed: {
    markers () {
      return this.$store.getters.loadedMarkers
    }
  },
  methods: {
    getLocation: function () {
      if (!Vue.cordova.deviceready) {
        setTimeout(function () {}, 10000)
      }
      Vue.cordova.geolocation.getCurrentPosition((position) => {
        return '{lat: ' + position.coords.latitude + ', lng: ' + position.coords.longitude + '}'
        // this.center = 'lat: ' + position.coords.latitude + ', lng: ' + position.coords.longitude
        // window.alert('Current position : ' + position.coords.latitude + ',' + position.coords.longitude)
      }, (error) => {
        window.alert('FAILED Error #' + error.code + ' ' + error.message)
      }, {
        timeout: 1000,
        enableHighAccuracy: true
      })
    },
    toggleInfoWindow: function (marker, idx) {
      this.infoWindowPos = marker.position
      this.infoContent = marker.sender
      // check if its the same marker that was selected if yes toggle
      if (this.currentMidx === idx) {
        this.infoWinOpen = !this.infoWinOpen
      // if different marker set infowindow to open and reset current marker index
      } else {
        this.infoWinOpen = true
        this.currentMidx = idx
      }
    }
  }
}
</script>

<style scoped>
</style>
