<script setup>
import { Swiper, SwiperSlide } from "swiper/vue";
import { Pagination, Navigation } from "swiper/modules";

import 'swiper/css/navigation';
import "swiper/css";
import "swiper/css/pagination";
import "./Swiper.css";
</script>

<template>
    <div class="sliderView m-0 p-0">
        <Swiper :modules="[Pagination, Navigation]" :grabCursor="true" :lazy="true" :navigation="true" :pagination="true" class="slider">
            <SwiperSlide class="slides slides-above" data-aos-duration="1500">
                <div class="img-slide">
                    <img src="../../assets/slide1-img.svg" loading="lazy" alt="" data-aos="fade-up">
                </div>
                <div class="text-slide" data-aos="fade-left">
                    <div class="title">
                        <h2>Como eles surgiram</h2>
                    </div>
                    <div class="text">
                        <p>Originados da resistência africana contra a escravidão, escravizados fugitivos de suas fazendas
                            buscaram liberdade nas áreas isoladas, onde formaram comunidades independentes, se organizando
                            de acordo com suas próprias tradições culturais e sociais.</p>
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide class="slides slides-above">
                <div class="img-slide2">
                    <img src="../../assets/slide2-img.svg" loading="lazy" alt="" data-aos="fade-up"> 
                </div>
                <div class="text-slide" data-aos="fade-left">
                    <div class="title">
                        <h2>Quem são eles</h2>
                    </div>
                    <div class="text">
                        <p>Quilombolas, são pessoas autodeclaradas e que têm identificação com a cultura e tradições com as
                            comunidades de quilombos, além de relação territorial com as comunidades de quilombos,
                            descendentes e remanescentes de escravizados fugitivos que formaram essas comunidades.</p>
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide class="slides">
                <SliderItem></SliderItem>
            </SwiperSlide>
        </Swiper>
    </div>
</template>

<script>

import SliderItem from './SliderItem.vue';

export default {
    data() {
        return {
            index: 0
        }
    },
    components: {
        SliderItem
    },
}
</script>

<style scoped lang="less">
.sliderView {
    margin: 0;
    padding: 0;
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
}

.slider {
    display: flex;
    grid-gap: 1rem;
    width: 100%;
    height: 100vh;
    overflow-x: hidden;

    .slides {
        overflow: hidden;
        // min-width: 100%;
        height: 100vh;
        display: flex;
        justify-content: center;
        align-items: center;
        color: #000000;
        font-size: 2rem;
        transition: all 1.5s;
    }
}

.img-slide {
    display: flex;
    justify-content: center;
    align-items: flex-end;
    background-image: url(../../assets/background-test.jpeg);
    transition: all 1s ease-out;
    background-position: 0%;
    background-size: cover;
    width: 50%;
    height: 100%;

    img {
        z-index: 1;

        width: 75vh;
        bottom: 0%;
    }
}

.img-slide2 {
    display: flex;
    justify-content: center;
    align-items: flex-end;
    background-image: url(../../assets/background-slide2.webp);
    transition: all 1s ease-out;
    background-position: 0%;
    background-size: cover;
    overflow: hidden;
    width: 50%;
    height: 100%;

    img {
        z-index: 1;

        width: 120vh;
        bottom: 0%;
    }
}

.dark .img-slide {
    background-image: url(../../assets/background-slide1.webp);
}

.text-slide {
    width: 50%;
    padding-left: 5%;
    z-index: 1;

    .title {
        width: 90%;

        h2 {
            color: #000;
            line-height: 1;
            font-size: 2em;
        }

        margin: 0;
        opacity: 0.8;
    }

    .text {
        margin-top: 2vh;

        width: 90%;
        font-size: 30px;
        font-weight: 100;
    }
}

.circulos {
    z-index: 0;
    width: 100%;
    height: 100%;
    position: absolute;
    overflow-y: hidden;
    overflow-x: hidden;
}

.circulo2 {
    position: relative;
    left: 0%;
    top: 2%;
    animation: moveUpDown 4s ease-in-out infinite;
}

.circulo3 {
    left: 40%;
    bottom: 0%;
    animation: moveUpDown 2.5s ease-in-out infinite;
    position: relative;

}

@keyframes moveUpDown {

    0%,
    100% {
        transform: translateY(0);
        /* Inicial e estado final: sem deslocamento vertical */
    }

    50% {
        transform: translateY(-1.25rem);
        /* Estado intermediário: desloca 20px para cima */
    }
}



.dark {
    .text-slide {
        .title {
            h2 {
                color: #ffffff;
            }
        }

        .text {
            color: #ffffff;
        }
    }
}

@media only screen and (max-width: 1025px) {


    .text-slide {
        padding: 5%;

        .title {
            margin-top: 1vh;

            h2 {
                font-size: calc(2em + 2vw);
            }
        }

        .text {
            width: 100%;
            font-size: 22px;
            font-weight: 100;
        }
    }

    .circulos {
        display: none;

    }
}


@media only screen and (max-width: 1000px) {
    .slider {

        .slides-above {
            justify-content: flex-start;
            align-items: flex-start;
            flex-direction: column;

        }
    }

    .img-slide {

        display: flex;
        justify-content: center;
        width: 100%;
        height: 50vh;

        img {
            width: 40vh;
        }
    }

    .img-slide2 {

        display: flex;
        justify-content: center;
        width: 100%;
        height: 50vh;

        img {
            width: 50vh;
        }
    }

    .text-slide {
        height: 50vh;
        width: 90%;
        margin: auto;
        padding: 0;

        .title {
            color: #000;
            margin-top: 1vh;

            h2 {
                font-size: calc(2em + 2vw);
            }

            opacity: 0.8;

            h2 {
                line-height: 1;
            }
        }

        .text {
            margin-top: 2vh;
            width: 100%;
            font-size: 22px;
            font-weight: 100;
        }
    }

    .circulos {
        display: none;

    }


}

@media only screen and (max-width: 800px) {
    .slider {
        overflow-x: auto;
    }

    .material-icons {
        display: none;
    }
}

@media screen and (max-width: 600px) {
    .img-slide {
        height: 40vh;

        img {
            width: 30vh;
        }
    }

    .img-slide2 {
        height: 40vh;

        img {
            width: 50vh;
        }
    }

    .text-slide {

        height: 50%;

        .title {
            h2 {
                font-size: calc(1.2em + 2vw);
            }
        }

        .text {
            font-size: 18px;
        }
    }
}

@media screen and (max-width: 300px) {
    .img-slide {
        height: 40vh;

        img {
            width: 30vh;
        }
    }

    .img-slide2 {
        height: 40vh;

        img {
            width: 40vh;
        }
    }

    .text-slide {

        height: 50%;

        .title {
            h2 {
                font-size: calc(1em + 2vw);
            }
        }

        .text {
            font-size: 14px;
        }
    }
}
</style>
