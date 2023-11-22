<template>
    <div class="culture-premise">
        <div class="culture-map">
            <img src="../../assets/culture-premise-text.png" alt="">
        </div>
        <div class="culture-txt">
            <h2>Cultura</h2>
            <p>Não podemos deixar de citar o mais importante desse projeto, a cultura, o reconhecimento das origens do nosso
                pais e que muitas vezes são esquecidas e, no nosso caso, os Quilombolas, um povo que ao analisarmos as
                formas e os meios de
                vida que os habitantes apresentam percebemos, como as atividades e a cultura que eles apresentam tem
                relação com a nossa cultura e práticas como danças, músicas e religiões.
            </p>
        </div>
    </div>
</template>

<style lang="less" scoped>
.culture-premise {
    width: 100%;
    height: 70vh;
    display: flex;
    justify-content: center;
    align-items: center;
}

.culture-map {
    width: 50%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;

    img {
        width: 50%;
    }
}

.culture-txt {
    width: 50%;
    height: 100%;
    display: flex;
    justify-content: center;
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
    .culture-txt {

        h2 {
            color: #ffffffde;
        }

        p {
            color: #fff;
        }
    }
}

@media only screen and (max-width: 1000px) {
    .culture-txt {
        h2 {
            font-size: 45px;
        }

        p {
            font-size: 18px;
        }
    }
}

@media only screen and (max-width: 800px) {
    .culture-premise {
        flex-direction: column-reverse;
        height: 80vh;

    }

    .culture-map {
        height: 50%;
        width: 100%;
    }


    .culture-txt {
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
    .culture-txt {
        h2 {
            font-size: 35px;
        }

        p {
            font-size: 14px;
        }
    }
}

@media only screen and (max-width: 300px) {
    .culture-txt {

        h2 {
            font-size: 30px;
        }

        p {
            font-size: 12px;
        }
    }
}
</style>