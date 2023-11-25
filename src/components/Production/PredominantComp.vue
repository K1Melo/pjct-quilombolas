<template>
    <div class="predominant">
        <div class="img-predominant" data-aos="fade-in" data-aos-easing="linear">
        </div>
        <div class="text-predominant" data-aos="fade-left">
            <div class="title-predominant">
                <h2>Produção Predominante</h2>
            </div>
            <div class="p-predominant">
                <p>A arte de criar objetos por meio da transformação da matéria-prima e um sistema que permite não apenas
                    uma alimentação balanceada e sustentável, como também o sustento dos habitantes. Os principais meios de
                    produção de renda quilombola são agricultura e o artesanato.</p>
            </div>
        </div>
    </div>
</template>

<script>

export default {

}

</script>

<style lang="less" scoped>
.predominant {
    height: 100vh;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
}

.img-predominant {
    background-image: url(../../assets/background-production-predominant.png);
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    width: 50%;
    height: 100vh;
}

.text-predominant {
    width: 50%;
    padding-left: 5%;
    z-index: 1;

    .title-predominant {
        width: 90%;

        h2 {
            color: #000;
            line-height: 1;
            font-size: 3em;
        }

        margin: 0;
        opacity: 0.8;
    }

    .p-predominant {
        margin-top: 2vh;

        width: 90%;
        font-size: 25px;
        font-weight: 100;
    }
}

.dark {
    .text-predominant {
        .title-predominant {
            h2 {
                color: #ffffff;
            }
        }

        .p-predominant {
            color: white;
        }
    }
}

@media only screen and (max-width: 1000px) {

    .predominant {
        justify-content: flex-start;
        align-items: flex-start;
        flex-direction: column;
    }

    .img-predominant {
        background-size: cover;
        background-position: center 60%;
        background-repeat: no-repeat;
        width: 100%;
        height: 50vh;
    }

    .text-predominant {
        width: 100%;
        height: 50%;
        padding: 0;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;

        .title-predominant {
            width: 70%;

            h2 {
                color: #000;
                line-height: 1;
                font-size: calc(2em + 2vh);
            }

            margin: 0;
            opacity: 0.8;
        }

        .p-predominant {
            margin-top: 2vh;

            width: 70%;
            font-size: 22px;
            font-weight: 100;
        }
    }
}

@media only screen and (max-width: 600px) {

    .img-predominant {
        background-size: cover;
        background-position: center 60%;
        background-repeat: no-repeat;
        width: 100%;
        height: 40vh;
    }

    .text-predominant {
        width: 100%;
        height: 60%;
        padding: 0;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;

        .title-predominant {
            width: 90%;

            h2 {
                color: #000;
                line-height: 1;
                font-size: calc(1.5em + 2vw);
            }

            margin: 0;
            opacity: 0.8;
        }

        .p-predominant {
            margin-top: 1vh;

            width: 90%;
            font-size: 20px;
            font-weight: 100;
        }
    }
}

@media only screen and (max-width: 300px) {

    .text-predominant {

        .title-predominant {
            width: 90%;

            h2 {
                color: #000;
                line-height: 1;
                font-size: calc(1em + 2vw);
            }

            margin: 0;
            opacity: 0.8;
        }

        .p-predominant {
            margin-top: 1vh;

            width: 90%;
            font-size: 18px;
            font-weight: 100;
        }
    }

}
</style>