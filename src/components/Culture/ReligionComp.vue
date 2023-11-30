<template>
    <div class="religion">
        <div class="card-religion" data-aos="fade-up" data-aos-duration="1500">
            <div class="img-religion">
                <img src="../../assets/catolicismo.png" alt="">
            </div>
            <div class="name-religion">
                <h2>Catolicismo</h2>
                <p>Vertente do Cristianismo, no qual acreditam que Jesus é o Salvador do mundo e pregam a salvação dos
                    pecados a partir da crença em Jesus. Eles tiveram acesso a essa religião por meio de seus proprieátios,
                    que praticavam o sincretismo com esse povo.</p>
            </div>
        </div>
        <div class="card-religion" id="second-card" data-aos="fade-down" data-aos-duration="1500">
            <div class="img-religion">
                <img src="../../assets/umbanda.svg" alt="">
            </div>
            <div class="name-religion">
                <h2>Umbanda</h2>
                <p>Os rituais umbandistas seguem uma linha que mostra a grande mistura das religiões que a compõem. O
                    início da gira umbandista é feito por meio de danças para os orixás, após isso, temos partes cantadas
                    onde são utilizadas
                    cantigas e poesias melódicas. Por fim, orações e queima de ervas especiais.</p>
            </div>
        </div>
        <div class="card-religion" data-aos="fade-up" data-aos-duration="1500">
            <div class="img-religion">
                <img src="../../assets/candomble.svg" alt="Orixá candomble">
            </div>
            <div class="name-religion">
                <h2>Candomblé</h2>
                <p>Religião Africana trazida para o Brasil na época da escravidão, apresentando diversas celebrações ritualísticas
                    feitas pela mãe e pai de santo. A maioria dos rituais seguem ritmos e danças com o som de tambor, onde
                    os filhos de santo ou participantes começam as invocações de seus orixás.</p>
            </div>
        </div>
    </div>
</template>

<style lang="less" scoped>
.religion {
    width: 100%;
    padding: 10% 0;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
}

.card-religion {

    width: 20%;
    height: 30vw;
    background-color: #6C1522;
    position: relative;
    border-radius: 5%;
    overflow: hidden;
    box-shadow: 0 8px 20px 0 rgba(147, 147, 147, 0.37);
    transition: all .5s linear;
    user-select: none;

}

.img-religion {
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 70%;
    width: 100%;

    img {
        width: 15vw;
        height: 15vw;
        //border-radius: 50%;

    }
}

.name-religion {
    position: absolute;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.6);
    width: 100%;
    max-height: 20%;
    padding: 5%;
    transition: all .8s ease-out;
    overflow: hidden;

    h2 {
        font-size: 30px;
    }

    p {
        opacity: 0;
        color: white;
        font-size: 14px;
    }
}

.card-religion:hover {
    background-color: #6d212b;

    .name-religion {
        max-height: 90%;
        background-color: rgba(0, 0, 0, 0.8);

        h2 {
            font-size: 28px;
        }

        p {
            opacity: 1;
        }
    }
}

@media only screen and (max-width: 1324px) {
    .name-religion {
        h2 {
            font-size: 35px;
        }

        p {
            font-size: 18px;
        }
    }

}

@media only screen and (max-height: 700px) {
    .name-religion {
        p {
            font-size: 10px;
        }
    }

}
@media only screen and (max-width: 1024px) {
    .name-religion {
        h2 {
            font-size: 25px;
        }

        p {
            font-size: 12px;
        }
    }

    .card-religion:hover {

        .name-religion {

            h2 {
                font-size: 23px;
            }
        }
    }

}

@media only screen and (max-width: 900px) {

    .religion {
        flex-direction: column;
    }

    .card-religion {
        margin: 5% 0;
        width: 30%;
        height: 50vw;
    }

    .img-religion {
        img {
            width: 20vw;
            height: 20vw;
        }
    }
}

@media only screen and (max-width: 600px) {
    .card-religion {
        margin: 5% 0;
        width: 40%;
        height: 60vw;
    }

    .img-religion {
        img {
            width: 30vw;
            height: 30vw;
        }
    }
}

@media only screen and (max-width: 400px) {
    .card-religion {
        margin: 5% 0;
        width: 50%;
        height: 80vw;
    }

    .img-religion {
        img {
            width: 40vw;
            height: 40vw;
        }
    }

    .name-religion {
        h2 {
            font-size: 23px;
        }

        p {
            font-size: 9px;
        }
    }

    .card-religion:hover {

        .name-religion {

            h2 {
                font-size: 20px;
            }
        }
    }
}
</style>