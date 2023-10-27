<template>
  <div class="location" data-aos="fade-in" data-aos-easing="linear" data-aos-duration="1500">
    <LocationsComp></LocationsComp>
    <SpreadComp></SpreadComp>
    <MapComp></MapComp>
    <PalmaresComp></PalmaresComp>
    <LocalizacoesComp></LocalizacoesComp>
  </div>
</template>

<script>

import LocationsComp from "./../components/Locations/LocationsComp.vue";
import SpreadComp from "./../components/Locations/SpreadComp.vue";
import MapComp from "@/components/Locations/MapComp.vue";
import PalmaresComp from "@/components/Locations/PalmaresComp.vue";
import LocalizacoesComp from "@/components/Locations/LocalizacoesComp.vue";

export default {
  components: {
    LocationsComp,
    SpreadComp,
    MapComp,
    PalmaresComp,
    LocalizacoesComp,
  }
}

</script>

<style scoped>

</style>