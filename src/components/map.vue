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
    style="width: 100%; height: 600px; z-index: 0">
    <gmap-marker
      :key="index"
      v-for="(m, index) in markers"
      :position="m.position"
      :clickable="true"
      :draggable="true"
      @click="center=m.position"
    ></gmap-marker>
     <gmap-info-window :position="center">
       ChemTrails!
     </gmap-info-window>
  </gmap-map>
</div>
</template>

<script>
    export default {
      data () {
        return {
          center: {lat: 54.0, lng: -1.6},
          markers: [
            {
              position: {lat: 53.5, lng: -1.3}
            },
            {
              position: {lat: 54.4, lng: -1.8}
            },
            {
              position: {lat: 51.4, lng: -2.5}
            },
            {
              position: {lat: 53.4, lng: -3}
            },
            {
              position: {lat: 73.4, lng: -1.8}
            }
          ]
        }
      }
    }
</script>

<style scoped>
</style>
