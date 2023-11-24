<template>
    <div class="inovation-comp">
        <div class="txt-inovation" data-aos="fade-right" data-aos-duration="1500">
            <h2>Inovação</h2>
            <p>Tomando como referência projetos inovadores e modernos, tivemos como um principal objetivo a criação de
                mostrar como podemos apresentar uma cultura de maneira diferente a sites que vemos comumente, utilizando
                assim modelos 3Ds, diversas interações com o usuário, bibliotecas como SwiperJS para carrosséis e a
                biblioteca
                AOS para animações com a rolagem do site.</p>
        </div>
        <div class="cube-inovation">
            <div class="top"></div>
            <div>
                <span style="--i: 0"></span>
                <span style="--i: 1"></span>
                <span style="--i: 2"></span>
                <span style="--i: 3"></span>
            </div>
        </div>
    </div>
</template>

<style lang="less" scoped>
.inovation-comp {
    width: 100%;
    height: 70vh;
    display: flex;
    justify-content: center;
    align-items: center;
}

.cube-inovation {
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    width: 50%;
    height: 100%;
    transform-style: preserve-3d;
    transform: rotateX(-30deg);
    animation: animate 10s linear infinite;
}

@keyframes animate {
    0% {
        transform: rotateX(-30deg) rotateY(0deg);
    }

    0% {
        transform: rotateX(-30deg) rotateY(360deg);
    }
}

.cube-inovation div {
    position: absolute;

    width: 300px;
    height: 300px;
    transform-style: preserve-3d;
}

.cube-inovation div span {
    position: absolute;

    width: 100%;
    height: 100%;
    background: linear-gradient(#151515, rgb(93, 49, 49));
    transform: rotateY(calc(90deg * var(--i))) translateZ(150px);
}

.top {
    position: absolute;
    width: 300px;
    height: 300px;
    background: #222;
    transform: rotateX(90deg) translateZ(150px);
}

.top::before {
    content: '';
    position: absolute;
    width: 300px;
    height: 300px;
    background: rgb(217, 131, 131);
    transform: translateZ(-300px);
    filter: blur(20px);
}

.txt-inovation {
    width: 50%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    h2,
    p {
        color: #000;
        width: 80%;
    }

    h2 {
        font-size: 50px;
    }

    p {
        font-size: 20px;
    }
}

.dark {
    .txt-inovation {

        h2 {
            color: #ffffffde;
        }

        p {
            color: #fff;
        }
    }
}

@media only screen and (max-width: 1000px) {
    .cube-inovation div {
        width: 200px;
        height: 200px;
    }

    .cube-inovation div span {
        transform: rotateY(calc(90deg * var(--i))) translateZ(100px);
    }

    .top {
        width: 200px;
        height: 200px;
        transform: rotateX(90deg) translateZ(100px);
    }

    .top::before {
        width: 200px;
        height: 200px;
        transform: translateZ(-200px);
    }

    .txt-inovation {
        h2 {
            font-size: 45px;
        }

        p {
            font-size: 18px;
        }
    }

}

@media only screen and (max-width: 800px) {
    .inovation-comp {
        flex-direction: column;
        height: 80vh;

    }

    .cube-inovation {
        height: 50%;
        width: 100%;
    }


    .txt-inovation {
        height: 50%;
        width: 95%;

        h2,
        p {
            width: 100%;
        }

        h2 {
            font-size: 40px;
        }

        p {
            font-size: 16px;
        }
    }
}

@media only screen and (max-width: 600px) {
    .txt-inovation {

        h2 {
            font-size: 35px;
        }

        p {
            font-size: 14px;
        }
    }
}

@media only screen and (max-width: 500px) {
    .inovation-comp {
        height: 90vh;
    }

    .cube-inovation div {
        width: 150px;
        height: 150px;
    }

    .cube-inovation div span {
        transform: rotateY(calc(90deg * var(--i))) translateZ(75px);
    }

    .top {
        width: 150px;
        height: 150px;
        transform: rotateX(90deg) translateZ(75px);
    }

    .top::before {
        width: 150px;
        height: 150px;
        transform: translateZ(-150px);
    }
}


@media only screen and (max-width: 300px) {
    .txt-inovation {

        h2 {
            font-size: 30px;
        }

        p {
            font-size: 12px;
        }
    }
}


</style>