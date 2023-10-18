<template>
  <div class="home">
    <!-- <div class="states" v-for="estado in $store.state.estados" :key="estado.name">
        {{ estado.name}}
    
    </div> -->
    <HomeComponent></HomeComponent>
    <SwiperJs></SwiperJs>
    <!-- <TheSlider></TheSlider> -->
    <DifficultiesComponent></DifficultiesComponent>
  </div>
</template>

<script>

import HomeComponent from '@/components/Home/HomeComponent.vue';
// import TheSlider from '@/components/Home/CarouselComponent.vue';
import DifficultiesComponent from '@/components/Home/DifficultiesComponent.vue';
import SwiperJs from '@/components/Home/SwiperJs.vue';

export default {
  name: 'HomeView',
  components: {
    HomeComponent,
    // TheSlider,
    DifficultiesComponent,
    SwiperJs
  }
}
</script>

<style scoped>

</style>
