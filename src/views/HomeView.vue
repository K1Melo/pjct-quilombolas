<template>
    <div class="home">
        <HomeComp></HomeComp>
        <Slider></Slider>
        <CultureComp></CultureComp>
    </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import HomeComp from '@/components/Home/HomeComponent.vue';
import Slider from '@/components/Home/Slider.vue';
import CultureComp from '@/components/Home/CultureComp.vue';

@Options({
    components: {
        HomeComp,
        Slider,
        CultureComp
    }
})

export default class HomeView extends Vue {
}
</script>

<style scoped lang="less">
</style>
