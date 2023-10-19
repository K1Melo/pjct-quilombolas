<template>
  <div class="location">
    <LocationsComp></LocationsComp>
    <SpreadComp></SpreadComp>
  </div>
</template>

<script>

import LocationsComp from "./../components/Locations/LocationsComp.vue"
import SpreadComp from "./../components/Locations/SpreadComp.vue"

export default {
  components: {
    LocationsComp,
    SpreadComp
  }
}

</script>

<style scoped>

</style>