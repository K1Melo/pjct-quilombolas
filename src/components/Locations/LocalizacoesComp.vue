<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue';

// Import Swiper styles
import 'swiper/css';

import 'swiper/css/effect-cards';

// import required modules
import { EffectCards, Pagination } from 'swiper/modules';

</script>

<template>
    <div class="slider-locations">
        <div class="title">
            <h2>Conheça outros:</h2>
        </div>
        <swiper :effect="'cards'" :pagination="{
            dynamicBullets: true,
        }" :grabCursor="true" :modules="[EffectCards, Pagination]" class="mySwiper">
            <swiper-slide>Slide 1</swiper-slide>
            <swiper-slide>Slide 2</swiper-slide>
            <swiper-slide>Slide 3</swiper-slide>
            <swiper-slide>Slide 4</swiper-slide>
            <swiper-slide>Slide 5</swiper-slide>
            <swiper-slide>Slide 6</swiper-slide>
            <swiper-slide>Slide 7</swiper-slide>
            <swiper-slide>Slide 8</swiper-slide>
            <swiper-slide>Slide 9</swiper-slide>
        </swiper>
    </div>
</template>

<script>

export default {
    components: {
        Swiper,
        SwiperSlide,
    }
}

</script>

<style lang="less" scoped>
.slider-locations {
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    height: 100vh;
    width: 100%;
}

.title {
    width: 40%;
    height: 50vh;

    h2 {
        display: flex;
        justify-content: center;
        position: absolute;
        align-items: center;
        font-size: calc(4em + 1vw);
        padding-right: 50%;
        width: 100%;
        height: 25%;
        background-color: #100404d7;
    }
}

.mySwiper {
    height: 60%;
    width: 30%;
}

.swiper-slide-active {
    background-color: rgb(152, 150, 150) !important;
    transition: all 1s ease-in-out;
}

.swiper-slide {
    background-color: rgb(65, 65, 65);

}

@media screen and (max-height: 800px) {

    .title {
        width: 40%;
        height: 70vh;

        h2 {
            font-size: calc(3em + 1vw);
        }
    }
}

@media screen and (max-width: 1000px) {
    .slider-locations {
        flex-direction: column;
    }

    .title {
        width: 100%;
        height: 20vh;

        h2 {
            padding-right: 0%;

            width: 100%;
            justify-content: center;
            position: absolute;
            font-size: calc(3em + 1vw);
        }
    }

    .mySwiper {
        height: 60%;
        width: 70%;
    }
}

@media screen and (max-width: 600px) {
    .title {
        width: 100%;
        height: 18vh;

        h2 {
            padding-right: 0%;

            width: 100%;
            justify-content: center;
            position: absolute;
            font-size: calc(2em + 1vw);
        }
    }
}

@media screen and (max-width: 300px) {
    .title {
        width: 100%;
        height: 18vh;

        h2 {
            padding-right: 0%;

            width: 100%;
            justify-content: center;
            position: absolute;
            font-size: calc(2em + 1vw);
        }
    }

    .mySwiper {
        height: 60%;
        width: 80%;
    }
}
</style>