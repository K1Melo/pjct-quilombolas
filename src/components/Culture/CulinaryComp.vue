<template>
    <div class="culinary-comp">
        <div class="text3">
            <h1 id="cul" data-aos="fade-right">Culinária</h1>
            <div class="textesculs" data-aos="fade-right">
                <p class="textcul">
                    Muito mais que uma mera expressão gastronômica, um portal para a herança cultural, uma fusão de
                    influências africanas, indígenas e europeias que nos levam a uma viagem através do tempo e das
                    experiências das comunidades quilombolas.
                </p>
                <p id="donts">Os quilombolas costumam usar ingredientes locais e sazonais em suas preferências. Raízes
                    como a mandioca, inhame e batata-doce, bem como feijão, milho, frutas, peixes, aves e carnes de caça
                    são componentes fundamentais de suas receitas.<br>

                    A técnica de defumação é uma característica marcante da culinária quilombola, conferindo um sabor
                    distintivo aos pratos.</p>
                <p id="tipo">Conheça alguns Pratos Típicos: </p>
            </div>
        </div>
        <div id="div-imagem"></div>
    </div>
</template>

<style scoped>
.culinary-comp {
    display: flex;
    width: 100%;
    height: 70vh;
    overflow: hidden;
}

#div-imagem {
    width: 40%;
    height: 100%;
    background-image: url(../../assets/Culinary.jpg);
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
}

.text3 {
    width: 60%;
    height: 100%;
    background-color: #6C1522;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

#cul {
    width: 80%;
    font-size: 60px;
    color: aliceblue;
}

.textesculs {
    width: 80%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    font-size: 18px;
    color: aliceblue;
}

@media screen and (max-height: 650px) {
    .textesculs {
        font-size: 15px;
    }
}

@media screen and (max-width: 1000px) {
    .culinary-comp {
        flex-direction: column-reverse;
        height: 80vh;
    }

    #div-imagem {
        width: 100%;
        height: 40%;
    }

    .text3 {
        padding-left: 2%;
        padding-right: 2%;
        padding-top: 5%;
        width: 100%;
        height: 60%;
        background-color: #6C1522;
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: center;
    }


    #cul {
        width: 100%;
        font-size: 50px;
    }

    .textesculs {
        width: 100%;

        font-size: 14px;
    }

}

@media screen and (max-width: 1000px) {
    .culinary-comp {
        display: flex;
        flex-direction: column-reverse;
        height: 90vh;
    }

    #div-imagem {
        width: 100%;
        height: 40%;
    }

    .text3 {
        width: 100%;
        height: 60%;
        background-color: #6C1522;
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: center;
    }


    #cul {
        font-size: 40px;
    }

    .textesculs {
        font-size: 14px;
    }
}

@media screen and (max-width: 600px) {
    #div-imagem {
        height: 35%;
    }

    .text3 {
        height: 65%;
    }

    #cul {
        font-size: calc(26px + 1vw);
    }

    .textesculs {
        font-size: 11px;
    }
}

@media screen and (max-width: 300px) {

    #cul {
        font-size: calc(22px + 1vw);
    }

    .textesculs {
        font-size: 10px;
    }
}
</style>