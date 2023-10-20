<template>
  <div class="location">
    <LocationsComp></LocationsComp>
    <SpreadComp></SpreadComp>
    <MapComp></MapComp>
    <PalmaresComp></PalmaresComp>
  </div>
</template>

<script>

import LocationsComp from "./../components/Locations/LocationsComp.vue";
import SpreadComp from "./../components/Locations/SpreadComp.vue";
import MapComp from "@/components/Locations/MapComp.vue";
import PalmaresComp from "@/components/Locations/PalmaresComp.vue";

export default {
  components: {
    LocationsComp,
    SpreadComp,
    MapComp,
    PalmaresComp
  }
}

</script>

<style scoped>

</style>