<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue';

// Import Swiper styles
import 'swiper/css';

import 'swiper/css/effect-cards';

// import required modules
import { EffectCards, Pagination } from 'swiper/modules';

</script>

<template>
    <div class="work-tools">
        <div class="title">
            <h2>Ferramentas:</h2>
        </div>
        <swiper :effect="'cards'" :pagination="{
            dynamicBullets: true,
        }" :grabCursor="true" :modules="[EffectCards, Pagination]" class="mySwiper" data-aos="fade-left">
            <swiper-slide>
                <div class="text-tool">
                    <p>Utilizamos o framework vue js pela sua baixa curva de aprendizado, com ele suas ferramentas como por
                        exemplo VUEX para gestão de estados e vue Router para as rotas, além do Vue cli para criação do
                        projeto.</p>
                </div>
                <div class="name">
                    <h3>Vue JS</h3>
                    <img src="../../assets/vue-js-icon.webp" alt="Vue js">
                </div>
            </swiper-slide>
            <swiper-slide>
                <div class="text-tool">
                    <p>Utilizamos as linguagens de marcação html e css para criação e estilização do website.</p>
                </div>
                <div class="name">
                    <h3>HTML e CSS</h3>
                    <img src="../../assets/html&css.svg" alt="html e css" id="html">
                </div>
            </swiper-slide>
            <swiper-slide>
                <div class="text-tool">
                    <p>Para partes com interações do usuário utilizamos a linguagem de programação javascript, além de
                        configurações do framework.</p>
                </div>
                <div class="name">
                    <h3>JavaScript</h3>
                    <img src="../../assets/javascript.png" alt="JavaScript">
                </div>
            </swiper-slide>
            <swiper-slide>
                <div class="text-tool">
                    <p>Utilizamos o interpretador nodejs para o backend da aplicação, com a biblioteca express e mongose
                        para a criação da API rest .</p>
                </div>
                <div class="name">
                    <h3>Node.js</h3>
                    <img src="../../assets/node-js-icon.png" alt="Node.js">
                </div>
            </swiper-slide>
            <swiper-slide>
                <div class="text-tool">
                    <p>Para edição e prototipagem do site utilizamos o editor gráfico figma.</p>
                </div>
                <div class="name">
                    <h3>Figma</h3>
                    <img src="../../assets/figma.png" alt="Figma">
                </div>
            </swiper-slide>
            <swiper-slide>
                <div class="text-tool">
                    <p>Como plataforma de hospedagem do nosso front-end escolhemos a Vercel, por ser uma plataforma simples
                        e rápida de se utilizar, com ligação direta ao GitHub do projeto.</p>
                </div>
                <div class="name">
                    <h3>Vercel</h3>
                    <img src="../../assets/vercel.png" alt="Vercel">
                </div>
            </swiper-slide>
            <swiper-slide>
                <div class="text-tool">
                    <p>Agora o back-end do projeto foi hospedado na plataforma Render, pela sua maior velocidade e para
                        alocação da API node na nuvem de forma gratuita.</p>
                </div>
                <div class="name">
                    <h3>Render</h3>
                    <img src="../../assets/render.png" alt="Render">
                </div>
            </swiper-slide>
            <swiper-slide>
                <div class="text-tool">
                    <p>No nosso banco de dados escolhemos banco NoSQL (não relacional), MongoDB, com sua ferramenta MongoDB
                        atlas, que permite a criação de um banco de dados na nuvem gratuitamente.</p>
                </div>
                <div class="name">
                    <h3>MongoDB Atlas</h3>
                    <img src="../../assets/mongoDb.png" alt="MongoDB">
                </div>
            </swiper-slide>
        </swiper>
    </div>
</template>

<script>


export default {

}

</script>

<style lang="less" scoped>
.work-tools {
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    height: 100vh;
    width: 100%;
}

.text-tool {
    height: 70%;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;

    p {
        margin: 0;
        padding: 0;
        width: 90%;
    }
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
        transition: all 1s;
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
    justify-content: flex-end;
    background-position: center top;
    background-repeat: no-repeat;
    background-size: cover;
    flex-direction: column;
    transition: all 1s ease-in-out;

    .name {
        width: 100%;
        height: 30%;
        display: flex;
        justify-content: flex-start;
        align-items: center;
        padding-left: 5%;
        background-color: #100404d4;

        h3 {
            margin: 0;
        }

        img {
            margin-left: 3%;
            width: 40px;
        }

        #html {
            width: 50px;
        }
    }
}

.swiper-slide-active {
    background-color: rgb(152, 150, 150) !important;
}

@media screen and (max-width: 1000px) {
    .work-tools {
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