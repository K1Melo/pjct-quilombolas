<template>
    <div class="home">
       <Slider></Slider>
    </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import Slider from '@/components/Slider.vue';

@Options({
    components: {
        Slider
    }
})

export default class HomeView extends Vue {
}
</script>

<style scoped lang="less">

</style>
