<template>
  <div class="home" data-aos="fade-in" data-aos-easing="linear" data-aos-duration="1500">

    <HomeComponent></HomeComponent>
    <SwiperJs></SwiperJs>
    <!-- <DifficultiesComponent></DifficultiesComponent> -->
    <DifficultiesComp></DifficultiesComp>
  </div>
</template>

<script>

import HomeComponent from '@/components/Home/HomeComponent.vue';
// import TheSlider from '@/components/Home/CarouselComponent.vue';
// import DifficultiesComponent from '@/components/Home/DifficultiesComponent.vue';
import DifficultiesComp from '@/components/Home/DifficultiesComp.vue';
import SwiperJs from '@/components/Home/SwiperJs.vue';

export default {
  name: 'HomeView',
  components: {
    HomeComponent,
    // TheSlider,
    // DifficultiesComponent,
    DifficultiesComp,
    SwiperJs
  }
}
</script>

<style scoped>

</style>
