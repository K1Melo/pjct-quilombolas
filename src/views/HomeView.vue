<template>
  <div class="home">
    <!-- <div class="states" v-for="estado in $store.state.estados" :key="estado.name">
        {{ estado.name}}
    
    </div> -->
    <HomeComponent></HomeComponent>
    <TheSlider></TheSlider>
    <DifficultiesComponent></DifficultiesComponent>
  </div>
</template>

<script>

import HomeComponent from '@/components/Home/HomeComponent.vue';
import TheSlider from '@/components/Home/CarouselComponent.vue';
import DifficultiesComponent from '@/components/Home/DifficultiesComponent.vue';

export default {
  name: 'HomeView',
  components: {
    HomeComponent,
    TheSlider,
    DifficultiesComponent
  }
}
</script>

<style scoped>

</style>
