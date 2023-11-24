<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue';

// Import Swiper styles
import 'swiper/css';

import 'swiper/css/effect-cards';

import './LocationSwiper.css'

// import required modules
import { EffectCards, Pagination } from 'swiper/modules';

</script>

<template>
    <div class="slider-locations">
        <div class="title" data-aos="fade-in">
            <h2>Conheça outros:</h2>
        </div>
        <swiper :effect="'cards'" :pagination="{
            dynamicBullets: true,
        }" :grabCursor="true" :modules="[EffectCards, Pagination]" class="mySwiper" data-aos="fade-left">
            <swiper-slide id="grotao">
                <div class="name">
                    <h3 class="state-card">Niterói - RJ</h3>
                    <h3>Quilombo do Grotão</h3>
                </div>
            </swiper-slide>
            <swiper-slide id="tapera">
                <div class="name">
                    <h3 class="state-card">Petrópolis - RJ</h3>
                    <h3>Quilombo da Tapera</h3>
                </div>
            </swiper-slide>
            <swiper-slide id="mimbo">
                <div class="name">
                    <h3 class="state-card">Amarante - PI</h3>
                    <h3>Quilombo Mimbó</h3>
                </div>
            </swiper-slide>
            <swiper-slide id="alcantara">
                <div class="name">
                    <h3 class="state-card">Alcântara - MA</h3>
                    <h3>Quilombo de Alcântara</h3>
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

.dark {
    .title {
        h2 {
            background-color: #4c2626d7;
        }
    }
}

.mySwiper {
    height: 60%;
    width: 30%;
}


.swiper-slide {
    display: flex;
    align-items: flex-end;
    background-position: center top;
    background-repeat: no-repeat;
    background-size: cover;
    transition: all 1s ease-in-out;

    .name {
        width: 100%;
        height: 30%;
        display: flex;
        justify-content: center;
        flex-direction: column;
        transition: all 1s;
        border-top-left-radius: 10%;
        border-top-right-radius: 50%;

        padding-left: 2%;

        .state-card {
            color: rgb(179, 179, 179);
        }
    }

}

.swiper-slide-active {
    background-color: rgb(152, 150, 150) !important;
    transition: all 1s ease-in-out;
    opacity: 1;

    .name {
        background-color: #100404e9;
        padding-left: 5%;

    }
}

#grotao {
    background-image: url(../../assets/quilombos/quilombo-grotao.png);
}

#tapera {
    background-image: url(../../assets/quilombos/quilombo-tapera.png);
}

#mimbo {
    background-position: right;
    background-image: url(../../assets/quilombos/quilombo-mimbo.png);
}

#alcantara {
    background-image: url(../../assets/quilombos/quilombo-alcantara.png);

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