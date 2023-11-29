<template>
    <div class="spred">
        <div class="container" data-aos="fade-left" data-aos-duration="1500">
            <div class="title">
                <h2>Como se espalharam</h2>
            </div>
            <div class="text">
                <p>Comunidades quilombolas se espalharam ao longo da história devido à resistência dos africanos
                    escravizados durante o período da escravidão no Brasil. Eles fugiam das plantações em busca de
                    liberdade, estabelecendo-se em áreas remotas e de difícil acesso por todo território brasileiro, criando
                    os quilombos. Algumas
                    comunidades quilombolas notáveis incluem o Quilombo dos Palmares em Alagoas, o Quilombo do Jambuaçu no
                    Maranhão e o Quilombo do Cascalho em Minas Gerais. Essas comunidades desenvolveram sua cultura própria,
                    preservando tradições africanas. Em 1988, a Constituição do Brasil reconheceu a importância das
                    comunidades quilombolas e suas terras tradicionais, chamadas "quilombos," com o objetivo de garantir a
                    posse e o uso sustentável dessas áreas. No entanto, essas comunidades enfrentam desafios atuais, como a
                    ameaça à suas terras devido à expansão agrícola, mas continuam lutando pela preservação de suas terras e
                    tradições, contribuindo para a diversidade cultural e histórica do Brasil.</p>
            </div>
        </div>
        <div class="circulos">
            <div class="circulo1">

            </div>
            <div class="circulo3">

            </div>
        </div>
    </div>
</template>

<style scoped>
.spred {
    height: 100vh;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
}

.container {
    width: 60%;
    /* height: 80%; */
    padding: 5%;
    background: rgba(255, 255, 255, 0.687);
    box-shadow: 0 8px 32px 0 rgba(147, 147, 147, 0.37);

    border-radius: 20px;
    border: 1px solid rgba(255, 255, 255, 0.18);
    z-index: 0;

    overflow: hidden;

    display: flex;
    align-items: center;
    flex-direction: column;
}

.title {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 5%;
    height: 15%;
    width: 100%;
    border-bottom: 1px solid #0000008f;
}

.title h2 {
    color: #000000;
    font-size: 30px;
}

.text {
    color: #000000;
    text-align: justify;

    width: 90%;
    font-size: 20px;
    font-weight: 500;
}

.circulos {
    z-index: -1;
    width: 100%;
    height: 100%;
    position: absolute;
    left: 0;
    overflow-y: hidden;
    overflow-x: hidden;
}

.circulo1 {
    z-index: -1;

    position: absolute;
    top: 5%;
    right: 0;
    width: 60vh;
    height: 60vh;
    border-radius: 50%;
    background: #4A2F2F;
    animation: moveUpDown 4s ease-in-out infinite;

}

.circulo3 {
    z-index: -1;
    width: 40vh;
    height: 40vh;
    background: #4A2F2F;
    border-radius: 50%;

    animation: moveUpDown 3s ease-in-out infinite;
    position: absolute;
    left: 5%;
    bottom: 0;
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

@media only screen and (max-width: 1366px) {


    .container {
        width: 80%;
        /* height: 80% */
    }

    .title h2 {
        font-size: 25px;
    }

    .text {

        font-size: 18px;
    }


}

@media only screen and (max-width: 1100px) {
    .circulos {
        z-index: -1;
        width: 100%;
        height: 100%;
        position: absolute;
        left: 0;
        overflow-y: hidden;
        overflow-x: hidden;
    }

    .circulo1 {
        z-index: -1;

        position: absolute;
        right: 0;
        width: 40vh;
        height: 40vh;
        border-radius: 50%;
        background: #4A2F2F;
        animation: moveUpDown 4s ease-in-out infinite;

    }

    .circulo3 {
        z-index: -1;
        width: 20vh;
        height: 20vh;
        background: #4A2F2F;
        border-radius: 50%;

        animation: moveUpDown 3s ease-in-out infinite;
        position: absolute;
        left: 5%;
        bottom: 0;
    }

}

@media only screen and (max-width: 820px) {
    .container {
        width: 80%;
        /* height: 80% */
    }

    .title {
        height: 14%;
    }

    .title h2 {
        font-size: 23px;
    }

    .text {
        text-align: justify;

        font-size: 16px;
    }

    .circulos {
        z-index: -1;
        width: 100%;
        height: 100%;
        position: absolute;
        left: 0;
        overflow-y: hidden;
        overflow-x: hidden;
    }

    .circulo1 {
        z-index: -1;

        position: absolute;
        right: 0;
        width: 30vh;
        height: 30vh;
        border-radius: 50%;
        background: #4A2F2F;
        animation: moveUpDown 4s ease-in-out infinite;

    }

    .circulo3 {
        z-index: -1;
        width: 20vh;
        height: 20vh;
        background: #4A2F2F;
        border-radius: 50%;

        animation: moveUpDown 3s ease-in-out infinite;
        position: absolute;
        left: 2%;
        bottom: 2%;
    }
}

@media only screen and (max-width: 650px) {
    .container {
        width: 80%;
        /* height: 80% */
    }

    .title {
        height: 10%;
    }

    .title h2 {
        font-size: 18px;
    }

    .text {
        font-size: 12px;
    }
}

@media only screen and (max-width: 300px) {
    .container {
        width: 80%;
        /* height: 80% */
    }

    .title {
        height: 10%;
    }

    .title h2 {
        font-size: 18px;
    }

    .text {
        font-size: 10px;
    }
}
</style>