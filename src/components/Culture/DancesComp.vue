<script setup>
import { Swiper, SwiperSlide } from "swiper/vue";
import { Pagination, Navigation } from "swiper/modules";

import 'swiper/css/navigation';
import "swiper/css";
import "swiper/css/pagination";

</script>

<template>
    <div class="dances-comp">
        <Swiper :modules="[Pagination, Navigation]" :grabCursor="true" :lazy="true" :navigation="true"
            :pagination="{ dynamicBullets: true, }" class="slider">
            <SwiperSlide class="dance">
                <div class="img-dance" id="capo">
                </div>
                <div class="text-dance">
                    <div class="title">
                        <h2 class="capoeira">Capoeira</h2>
                    </div>
                    <div class="text">
                        <p class="capoeira">Assim como foi dito antes sobre movimentos negros, uma arte marcial muito
                            importante para
                            diversos movimentos foi a capoeira, apesar de não se ter muita certeza de sua origem acreditasse
                            que ele surgiu na angola e foi difundido no brasil no quilombo dos palmares, mas isso foi dado
                            como uma prática de risco para os donos das fazendas e acabou sendo considerada uma prática que
                            promovia a desordem, violência e a baderna, assim sendo proibido.
                            A história da Capoeira Quilombola é uma história de resistência e perseverança. Ela é um
                            testemunho da força e da resiliência dos escravos negros no Brasil, que lutaram para preservar
                            sua cultura e identidade em face da opressão e da injustiça. A Capoeira Quilombola é uma parte
                            importante da história do Brasil e um símbolo da luta pela liberdade e pela igualdade.</p>
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide class="dance">
                <div class="img-dance" id="jong">
                </div>
                <div class="text-dance">
                    <div class="title">
                        <h2>Jongo</h2>
                    </div>
                    <div class="text">
                        <p>E não podemos falar de cultura quilombola sem falar sobre o jongo, essa dança chegou ao brasil
                            por meio dos escravos africados de origem bantu, vindos do Congo e de Angola, diferente da
                            capoeira o jongo não era uma dança proibida, os proprietários das fazendas permitiam que seus
                            escravos dançassem jongo nos dias dos santos católicos e ele era dançado por um casal ao som dos
                            sagrados tambores e a voz de outros escravos.</p>
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide class="dance">
                <div class="img-dance" id="samb">
                </div>
                <div class="text-dance">
                    <div class="title">
                        <h2>Samba de Roda</h2>
                    </div>
                    <div class="text">
                        <p>O samba de roda nasceu na Bahia no início do século XVII, e acabou tendo mais destaque nas
                            vertentes cariocas, foi formado pelas referencias dos ritmos tribais africanos que era muito
                            diversificado pois na escravidão os
                            senhores dos escravos acabavam misturando povos africanos de diferentes tribos o que deu origem
                            a uma forma de expressão muito rica em contexto social.</p>
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide class="dance">
                <div class="img-dance" id="tamb">
                </div>
                <div class="text-dance">
                    <div class="title">
                        <h2>Tambor Crioula</h2>
                    </div>
                    <div class="text">
                        <p>Uma dança popular entre as comunidades quilombolas do Maranhão que mistura elementos africanos e
                            indígenas em sua coreografia, a dança do tambor crioula. <br> É uma forma de expressão que
                            envolve
                            dança circular, canto e percussão de tambores, além de ser uma forte referência na resistência
                            cultural africana, podemos associá-la a práticas lúdico-religiosa, a dança era praticada como
                            divertimento ou devoção a São Benedito.</p>
                    </div>
                </div>
            </SwiperSlide>
        </Swiper>
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
.dances-comp {
    width: 100%;
    height: 100vh;
    display: flex;
    background-color: #6d212b;
}

.dance {
    display: flex;
}

.img-dance {
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    width: 50%;
    height: 100%;
    transition: opacity .5s linear;
}

#capo {
    background-image: url(../../assets/CapoeiraEarle.jpg);
}

#jong {
    background-image: url(../../assets/JongoEarle.jpg);
}

#samb {
    background-image: url(../../assets/SambaRoda.jpg);
}

#tamb {
    background-image: url(../../assets/TamborCrioula.png);
}

.img-dance:hover {
    opacity: 0.9;
}

.text-dance {
    padding: 5%;
    width: 50%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    color: aliceblue;

    .title {
        h2 {
            font-size: 50px;
        }
    }

    .text {
        p {
            font-size: 20px;
        }
    }
}

@media screen and (max-width: 1000px) {
    .dance {
        flex-direction: column;
    }

    .img-dance {
        width: 100%;
        height: 50%;
    }

    .text-dance {
        padding: 10%;
        padding-top: 5%;
        width: 100%;
        height: 50%;
        justify-content: flex-start;
    }

    .text-dance {
        .title {
            h2 {
                font-size: 40px;
            }
        }

        .text {
            p {
                font-size: 18px;
            }
        }
    }
}

@media screen and (max-width: 800px) {
    .img-dance {
        width: 100%;
        height: 40%;
    }

    .text-dance {
        height: 60%;

        .title {
            h2 {
                font-size: 35px;
            }
        }

        .text {
            p {
                font-size: 16px;
            }
        }
    }
}

@media screen and (max-width: 600px) {

    .text-dance {
        .title {
            h2 {
                font-size: 30px;
            }
        }

        .text {
            p {
                font-size: 14px;
            }
        }
    }
}

@media screen and (max-width: 400px) {
    .text-dance {
        .title {
            h2 {
                font-size: 24px;

            }

            .capoeira {
                font-size: 22px;
            }
        }

        .text {
            p {
                font-size: 12px;

            }

            .capoeira {
                font-size: 11px;
            }
        }
    }
}

@media screen and (max-width: 300px) {
    .text-dance {
        .title {
            .capoeira {
                font-size: 20px;
            }
        }

        .text {
            .capoeira {
                font-size: 9px;
            }
        }
    }
}
</style>