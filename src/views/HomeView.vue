<template>
  <div class="home" data-aos="fade-in" data-aos-easing="linear" data-aos-duration="1500">
    <HomeComponent></HomeComponent>
    <SwiperJs></SwiperJs>
    <DifficultiesComp></DifficultiesComp>
  </div>
</template>

<script>

import HomeComponent from '@/components/Home/HomeComponent.vue';
import DifficultiesComp from '@/components/Home/DifficultiesComp.vue';
import SwiperJs from '@/components/Home/SwiperJs.vue';

export default {
  name: 'HomeView',
  components: {
    HomeComponent,
    DifficultiesComp,
    SwiperJs
  }
}
</script>

<style scoped>

</style>
