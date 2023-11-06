<template>
    <div class="culture" data-aos="fade-in" data-aos-easing="linear" data-aos-duration="1500">
        <div class="container">
            <div class="texts">
                <h1 id="title">Culturas</h1>
                <p id="text-1">
                    Apesar de muitas vezes ser confundido apenas com a ideia de monumentos e com
                    conceitos de patrimônio material, o patrimônio cultural é mais que isso, ele está ligado
                    à produção da identidade e da territorialidade, o patrimônio cultural está fundamentado
                    na referência de processos culturais.
                </p>
            </div>
            <div class="retang"></div>
        </div>
        <div class="container2">
            <div class="img-1">
                <img id="woman"
                    src="../assets/retrato-de-mulher-africana-usando-acessorios-tradicionais-e-posando-PhotoRoom.png-PhotoRoom.png"
                    alt="">
            </div>
            <div class="texts2">
                <div class="titulo2">
                    <h1 id="title2">Movimentos Sociais</h1>
                </div>
                <p id="text-2">
                    Antes de começar a apresentar os patrimônios culturais dos quilombolas, é fundamental
                    destacar a relevância dos movimentos negros. Esses movimentos, que podem ser sucintamente descritos
                    como iniciativas de natureza social voltadas para a transformação da mentalidade da sociedade,
                    desempenham um papel crucial tanto em épocas passadas quanto nos dias atuais. <br> <br> Um exemplo
                    contemporâneo emblemático desse fenômeno é o movimento "Black Lives Matter" ou "Vidas Negras
                    Importam". Isso demonstra a vigência e a importância dessas iniciativas, que não se limitam ao
                    passado, mas continuam a moldar e impactar a nossa sociedade no presente.
                    Portanto, ao explorar e celebrar os patrimônios culturais dos quilombolas, é fundamental reconhecer
                    a interligação entre os movimentos negros, a luta por igualdade e a preservação das tradições
                    culturais dessas comunidades.
                </p>
                <a href="https://www.brasilparalelo.com.br/artigos/black-lives-matter" target="_blank"><button
                        class="learn-more">
                        <span class="circle" aria-hidden="true">
                            <span class="icon arrow"></span>
                        </span>
                        <span class="button-text">Saiba Mais</span>
                    </button></a>
            </div>
        </div>
        <div class="container3">
            <div class="text3">
                <h1 id="cul">Culinária</h1>
                <div class="textesculs">
                    <p class="textcul">Para entender a rica cultura quilombola, que é um reflexo da história e das tradições
                        das comunidades afrodescendentes no Brasil. A culinária quilombola é muito mais do que uma mera
                        expressão gastronômica; ela é um portal para a herança cultural, uma fusão de influências africanas,
                        indígenas e europeias que nos levam a uma viagem através do tempo e das experiências das comunidades
                        quilombolas.
                    </p>
                    <br>
                    <p id="donts">Os quilombolas costumam usar ingredientes locais e sazonais em suas preferências. Raízes
                        como a mandioca, inhame e batata-doce, bem como feijão, milho, frutas, peixes, aves e carnes de caça
                        são componentes fundamentais de suas receitas. A mandioca desempenha um papel central na dieta,
                        sendo utilizada para fazer a farinha de mandioca, principal ingrediente na produção de pratos como a
                        tapioca e a maniçoba. <br>
                        A técnica de defumação é uma característica marcante da culinária quilombola, conferindo um sabor
                        distintivo aos pratos. A carne de porco, muitas vezes, é defumada e usada em diversas
                        especialidades, como a feijoada quilombola.</p>
                    <p id="tipo">Conheça alguns Pratos Típicos: </p>
                </div>

            </div>
            <div id="div-imagem"></div>
        </div>
        <div class="container4">
            <div class="retangss">
                <img id="capos" src="../assets/CapoeiraEarle.png" alt="">
            </div>

            <div class="textscapo">
                <h1 id="capoeira">Capoeira</h1>
                <div class="capi">
                    <p id="text4">Assim como foi dito antes sobre movimentos negros, uma arte marcial muito
                        importante para diversos movimentos foi a capoeira, apesar de não se ter muita
                        certeza de sua origem acreditasse que ele surgiu na angola e foi difundido no brasil
                        no quilombo dos palmares, mas isso foi dado como uma prática de risco para os donos
                        das fazendas e acabou sendo considerada uma prática que promovia a desordem,
                        violência e a baderna, assim sendo proibido. <br>
                        A história da Capoeira Quilombola é uma história de resistência e perseverança. Ela é um testemunho
                        da força e da resiliência dos escravos negros no Brasil, que lutaram para preservar sua cultura e
                        identidade em face da opressão e da injustiça. A Capoeira Quilombola é uma parte importante da
                        história do Brasil e um símbolo da luta pela liberdade e pela igualdade.</p>
                </div>
            </div>
        </div>
        <div class="container5">
            <div class="imgjongo">
                <img id="jong" src="../assets/diesad.png" alt="">
            </div>

            <div class="textjong">

                <h1 id="titlej">Jongo</h1>

                <div class="textjongo-1">
                    <p id="jongo">E não podemos falar de cultura quilombola sem falar sobre o jongo, essa dança
                        chegou ao brasil por meio dos escravos africados de origem bantu, vindos do Congo

                        e de Angola, diferente da capoeira o jongo não era uma dança proibida, os
                        proprietários das fazendas permitiam que seus escravos dançassem jongo nos dias
                        dos santos católicos e ele era dançado por um casal ao som dos sagrados tambores
                        e a voz de outros escravos.</p>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.culture {
    width: 100%;
}

/*Desenvolvi Primeiro Pro Moba e dps Desktop*/

@media(min-width:375px) and (max-width:530px) {
    body {
        margin: 0px;
        padding: 0px;
    }

    button {
        position: absolute;
        display: inline-block;
        cursor: pointer;
        outline: none;
        border: 0;
        vertical-align: middle;
        text-decoration: none;
        background: transparent;
        padding: 0;
        font-size: inherit;
        font-family: inherit;
        margin-top: 4rem;
        margin-left: 20px;

    }

    h1,
    p,
    h2,
    h3 {
        margin: 0px;
    }

    /*Parte 1 "Home*/

    .container {
        background-color: #440a13;
        height: 700px;
        width: 100%;
        display: flex;
        flex-direction: row;
    }

    .texts {
        height: 100%;
        width: 90%;
        position: absolute;
        margin-left: 4%;
    }

    #title {
        font-size: 80px;
        color: aliceblue;
        margin-top: 70px;
        margin-left: 10px;
    }

    #text-1 {
        font-size: 19px;
        color: aliceblue;
        margin-top: 90px;
        margin-left: 15px;
    }

    .retang {
        width: 22%;
        height: 32%;
        background-color: #6d212b;
        margin-left: 250px;
    }

    /*Parte 2 Movimentos Sociais*/

    .container2 {
        width: 100%;
        display: flex;
        flex-direction: column;
    }

    .img-1 {
        height: 500px;
    }

    #woman {
        height: 500px;
        margin-left: 4rem;
    }

    .texts2 {
        background-color: #6d212b;
        height: 800px;
        width: 100%;

    }

    .titulo2 {
        width: 100px;
        height: 90px;

    }

    #title2 {
        color: aliceblue;
        margin-top: 40px;
        margin-left: 20px;
        font-size: 50px;

    }

    #text-2 {
        color: aliceblue;
        font-size: 18px;
        margin-top: 50px;
        margin-left: 20px;
    }

    /*Parte 3 da Culinária*/

    .container3 {
        display: flex;
        flex-direction: column-reverse;
        background-color: #6C1522;
    }

    #tipo {
        margin-top: 3rem;
        color: #e6e4e4;
        font-size: 17px;
    }

    #div-imagem {
        width: 100%;
        height: 600px;
        background-image: url(../assets/arranjo-de-comida-brasileira-de-alto-angulo_23-2148725054.png);
        background-size: cover;
        background-repeat: no-repeat;
    }

    .text3 {
        background-color: #6C1522;
        height: 750px;
        width: 100%;
    }

    #cul {
        margin-top: 2rem;
        font-size: 60px;
        color: aliceblue;
        margin-left: 25px;
    }

    .textesculs {
        height: 100%;
        width: 86%;
        margin-left: auto;
        margin-right: auto;
    }

    .textcul {
        margin-top: 50px;
        font-size: 1, 5rem;
        color: aliceblue;
    }

    #donts {
        font-size: 1, 5rem;
        color: aliceblue;
    }

    .tecnicas {
        height: 600px;
        width: 100%;
        display: flex;
    }

    /*Parte 4 Da Capoeira*/

    .container4 {
        background-color: #6C1522;
        height: 720px;
        width: 100%;
        display: flex;
        flex-direction: column-reverse;
    }

    .retangss {
        margin-left: auto;
        margin-right: auto;
        margin-top: 4rem;
    }

    #capos {
        width: 350px;
        height: 300px;
        border-radius: 20px;
    }

    .textscapo {
        width: 94%;
        margin-left: auto;
        margin-right: auto;
        height: 400px;
    }

    #capoeira {
        font-size: 45px;
        color: rgb(255, 255, 255);
        text-align: center;
        margin-top: 3rem;

    }

    #text4 {

        font-size: 14px;
        color: rgb(255, 255, 255);
        margin-left: 10px;
        margin-top: 30px;
    }



    /*Parte da Dança Jongo*/

    .container5 {
        background-color: #6C1522;
        height: 720px;
        width: 100%;
        display: flex;
        flex-direction: column-reverse;

    }

    .imgjongo {
        margin-left: auto;
        margin-right: auto;
        margin-top: 4rem;
    }

    .textjong {
        height: 400px;
        width: 100%;

    }

    #jong {
        width: 350px;
        height: 300px;
        border-radius: 20px;
    }

    #titlej {
        text-align: center;
        color: aliceblue;
        margin-top: 7rem;
        font-size: 40px;

    }

    .textjongo-1 {
        margin-left: auto;
        margin-right: auto;
        height: 400px;
        width: 90%;
    }

    #jongo {
        color: aliceblue;
        margin-top: 60px;
        font-size: 1rem;
    }


}




@media (min-width:900px) {
    .container {
        background-color: #440a13;
        height: 700px;
        width: 100%;
        display: flex;
        flex-direction: row;
    }

    .texts {
        height: 100%;
        width: 60%;
        position: absolute;
        margin-left: 4%;
    }

    #title {
        font-size: 110px;
        color: aliceblue;
        margin-top: 70px;
        margin-left: 10px;
    }

    #text-1 {
        font-size: 26px;
        color: aliceblue;
        margin-top: 90px;
        margin-left: 15px;
    }

    .retang {
        width: 22%;
        height: 82%;
        background-color: #6d212b;
        margin-left: 700px;
    }

    .container2 {
        height: 700px;
        display: flex;
        flex-direction: row;
        width: 100%;
    }

    .img-1 {
        height: 100%;
        width: 40%;
        background-color: #ffffff;

    }

    #woman {
        height: 700px;
        margin-left: 2rem;

    }

    .texts2 {
        background-color: #6d212b;
        height: 100%;
        width: 60%;
    }



    #title2 {
        color: aliceblue;
        margin-top: 50px;
        margin-left: 20px;
        font-size: 60px;

    }

    #text-2 {
        color: aliceblue;
        font-size: 21px;
        margin-top: 50px;
        margin-left: 20px;

    }

    .container3 {
        display: flex;
        flex-direction: row;
        background-color: #6C1522;


    }

    #div-imagem {
        width: 35%;
        height: 700px;
        background-image: url(../assets/arranjo-de-comida-brasileira-de-alto-angulo_23-2148725054.png);
        background-size: cover;
        background-repeat: no-repeat;
    }

    .text3 {
        background-color: #791f2b;
        height: 700px;
        width: 65%;
    }

    #cul {
        margin-top: 2rem;
        font-size: 70px;
        color: aliceblue;
        margin-left: 30px;
    }

    .textesculs {
        width: 80%;
        margin-left: 30px;
    }



    .textcul {
        font-size: 19px;
        margin-top: 10px;

        color: aliceblue;
    }

    #donts {
        color: aliceblue;
        font-size: 19px;
        margin-top: 0px;
    }

    #tipo {
        margin-top: 3rem;
        color: #e6e4e4;
        font-size: 20px;
    }


    .container4 {

        width: 100%;
        background-color: #6C1522;
        display: flex;
        flex-direction: row;
        height: 600px;

    }

    #capoeira {

        color: rgb(255, 255, 255);
        font-size: 60px;
    }

    .capi {
        width: 90%;
    }

    #text4 {
        color: #ffffff;
        font-size: 18px;
        margin-top: 3rem;
    }

    .textscapo {
        width: 50%;
        color: rgb(255, 255, 255);
        margin-top: 2rem
    }

    .retangss {
        width: 50%;

    }

    #capos {
        width: 500px;
        height: 400px;
        border-radius: 30px;
        margin-left: 4rem;
        margin-top: 5rem;

    }

    /*Parte da Dança Jongo*/

    .container5 {
        display: flex;
        flex-direction: row-reverse;
        height: 600px;
        background-color: #6C1522;
    }

    .imgjongo {
        width: 55%;
        height: 100%;
    }

    .textjong {
        width: 55%;
        height: 100%;
    }

    #jong {
        width: 500px;
        height: 400px;
        border-radius: 30px;
        margin-left: 4rem;
        margin-top: 5rem;

    }



    #titlej {
        color: rgb(255, 255, 255);
        font-size: 60px;
        margin-left: 4rem;
    }

    #jongo {
        color: #ffffff;
        font-size: 19px;
        margin-top: 3rem;

    }

    .textjongo-1 {
        width: 80%;
        color: rgb(255, 255, 255);
        margin-top: 2rem;
        margin-left: 4rem;

    }


}

#Btn {
    width: 45px;
    height: 45px;
    background: #e6e4e4;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    cursor: pointer;
    position: fixed;
    border: none;
    right: 30px;
    bottom: 80px;
}

.arrow path {
    fill: rgb(0, 0, 0);

}


/*Botton*/

button {
    position: absolute;
    display: inline-block;
    cursor: pointer;
    outline: none;
    border: 0;
    vertical-align: middle;
    text-decoration: none;
    background: transparent;
    padding: 0;
    font-size: inherit;
    font-family: inherit;
    margin-top: 4rem;
    margin-left: 20px;

}

button.learn-more {
    width: 12rem;
    height: auto;
}

button.learn-more .circle {
    transition: all 0.45s cubic-bezier(0.65, 0, 0.076, 1);
    position: relative;
    display: block;
    margin: 0;
    width: 3rem;
    height: 3rem;
    background: #ffffff;
    border-radius: 1.625rem;
}

button.learn-more .circle .icon {
    transition: all 0.45s cubic-bezier(0.65, 0, 0.076, 1);
    position: absolute;
    top: 0;
    bottom: 0;
    margin: auto;
    background: #ffffff;
}

button.learn-more .circle .icon.arrow {
    transition: all 0.45s cubic-bezier(0.65, 0, 0.076, 1);
    left: 0.625rem;
    width: 1.125rem;
    height: 0.125rem;
    background: none;
}

button.learn-more .circle .icon.arrow::before {
    position: absolute;
    content: "";
    top: -0.29rem;
    right: 0.0625rem;
    width: 0.625rem;
    height: 0.625rem;
    border-top: 0.125rem solid #000000;
    border-right: 0.125rem solid #000000;
    transform: rotate(45deg);
}

button.learn-more .button-text {
    transition: all 0.45s cubic-bezier(0.65, 0, 0.076, 1);
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    padding: 0.75rem 0;
    margin: 0 0 0 1.85rem;
    color: #ffffff;
    font-weight: 700;
    line-height: 1.6;
    text-align: center;
    text-transform: uppercase;
}

button:hover .circle {
    width: 100%;
}

button:hover .circle .icon.arrow {
    background: #000000;
    transform: translate(1rem, 0);
}

button:hover .button-text {
    color: #000000;
}
</style>