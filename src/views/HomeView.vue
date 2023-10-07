<template>
  <div class="home">
    <HomeComponent></HomeComponent>
    <TheSlider></TheSlider>
  </div>
</template>

<script>

import HomeComponent from '@/components/Home/HomeComponent.vue';
import TheSlider from '@/components/Home/SliderComponent.vue';

export default {
  name: 'HomeView',
  components: {
    HomeComponent,
    TheSlider
  }
}
</script>

<style scoped>



</style>
