<template>
<div>
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
    <gmap-marker
      :key="index"
      v-for="(m, index) in markers"
      :position="m.position"
      :clickable="true"
      :draggable="false"
      @mouseover="statusText = 'Trails seen by ' + m.sender + ' @ ' + m.timestamp"
      @mouseout="statusText = null"
      @click="center=m.position"
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
      statusText: ''
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
    }
  }
}
</script>

<style scoped>
</style>
