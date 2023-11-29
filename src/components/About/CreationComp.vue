<template>
    <div class="creation">
        <div class="programming-img">
            <img src="../../assets/programer.svg" alt="">
        </div>
        <div class="programming-txt"  data-aos="fade-left" data-aos-duration="1500">
            <p>A iniciativa do Projeto Quilombolas surgiu na Etec de Carapicuiba pelo curso de Desenvolvimento de Sistemas,
                onde o principal objetivo era dar visibilidade aos povos originários do Brasil, os quais muitas vezes não
                são lembrados na atualidade. <br>
                Vimos nesse projeto a oportunidade de apresentar a cultura brasileira para jovens de maneira mais moderna, para isso
                seguimos duas principais premissas:
            </p>
        </div>
    </div>
</template>

<script>

export default {

}

</script>

<style lang="less" scoped>
.creation {
    height: 100vh;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
}

.programming-img {
    height: 100%;
    width: 50%;
    display: flex;
    justify-content: center;
    align-items: center;

    img {
        width: 80%;
    }
}

.programming-txt {
    height: 100%;
    width: 50%;
    display: flex;
    align-items: center;
    justify-content: center;

    p {
        font-size: 20px;
        width: 80%;
    }
}

.dark {
    .programming-txt {
        p {
            color: #fff;
        }
    }
}

@media only screen and (max-width: 912px) {
    .creation {
        flex-direction: column;
    }

    .programming-img {
        height: 50%;
        width: 100%;

        img {
            width: 80%;
        }
    }

    .programming-txt {
        height: 50%;
        width: 100%;
        padding-top: 10%;
        display: flex;
        align-items: flex-start;
        justify-content: center;

        p {
            width: 85%;
            font-size: 18px;

        }

    }
}

@media only screen and (max-width: 612px) {
    .programming-txt {

        p {
            width: 85%;
            font-size: 16px;

        }

    }
}

@media only screen and (max-width: 300px) {
    .programming-txt {
        p {
            width: 90%;
            font-size: 14px;

        }

    }
}
</style>