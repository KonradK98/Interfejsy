<template>
  <div class="container element-animate">
    <gmap-map :center="center" :map-type-id="mapTypeId" :zoom="15"
    :options="{
   zoomControl: true,
   mapTypeControl: false,
   scaleControl: false,
   streetViewControl: true,
   rotateControl: false,
   fullscreenControl: true,
   disableDefaultUi: false,
   styles: styles['hide'],
   clickableIcons: false

 }">
      <gmap-marker
        :position="marker.position"
        @click="markerClick(marker)"
      />
    </gmap-map>
  </div>
</template>

<script>
export default {
  data() {
    return {
      center: { lat: 51.747192, lng: 19.4517693 },
      mapTypeId: "roadmap",
      marker: {position: { lat: 51.747192, lng: 19.4517693 } ,url: 'https://goo.gl/maps/1X9rv9D4aDqQVQYE9',},
      styles: {
        hide: [
          {
            featureType: 'poi.business',
            stylers: [{visibility: 'off'}]
          },
          {
            featureType: 'transit',
            elementType: 'labels.icon',
            stylers: [{visibility: 'off'}]
          }
        ]
      }
    };
  },
  methods: {
      markerClick(marker) {
        window.open(marker.url,'_blank')
      }
  },
};
</script>

<style scoped>
.vue-map-container {
  height: 450px;
  width: 100%;
  margin-top: 7em;
}
</style>