<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue';

// Import Swiper styles
import 'swiper/css';

import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

// import required modules
import { EffectCoverflow, Pagination } from 'swiper/modules';

</script>

<template>
    <div class="aliments">
        <swiper :effect="'coverflow'" :grabCursor="true" :centeredSlides="true" :slidesPerView="'auto'" :coverflowEffect="{
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true,
        }" :pagination="{
    dynamicBullets: true,
}" class="mySwiper" :modules="[EffectCoverflow, Pagination]" data-aos="fade-left">
            <swiper-slide id="grotao" class="swiper-slide-active">
                <div class="name">
                    <h3>Feijoada</h3>
                </div>
            </swiper-slide>
            <swiper-slide id="tapera">
                <div class="name">
                    <h3>Tapioca</h3>
                </div>
            </swiper-slide>
            <swiper-slide id="mimbo">
                <div class="name">
                    <h3>Maniçoba</h3>
                </div>
            </swiper-slide>
            <swiper-slide id="alcantara">
                <div class="name">
                    <h3>Acarajé</h3>
                </div>
            </swiper-slide>
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
.aliments {
    width: 100%;
    height: fit-content;
    padding-top: 5%;
    padding-bottom: 5%;
    display: flex;
    align-items: center;
    justify-content: center;
}


.swiper {
    width: 100%;
    height: 100%;
}

.swiper-slide {
    background-color: rgb(39, 39, 39);
    width: 40vh;
    height: 40vh;
    display: flex;
    align-items: flex-end;

    .name {
        width: 100%;
        height: 30%;
        display: flex;
        justify-content: center;
        flex-direction: column;

        padding-left: 5%;
        background-color: rgba(0, 0, 0, 0.603);

        .state-card {
            color: rgb(179, 179, 179);
        }
    }
}
</style>