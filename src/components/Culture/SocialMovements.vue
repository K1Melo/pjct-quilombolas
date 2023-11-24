<template>
    <div class="social-moviments">
        <div class="img-1">
            <img id="woman"
                src="../../assets/retrato-de-mulher-africana-usando-acessorios-tradicionais-e-posando-PhotoRoom.png-PhotoRoom.png"
                alt="Mulher africana">
        </div>
        <div class="texts2">
            <div class="titulo2" data-aos="fade-left" data-aos-duration="1500">
                <h1 id="title2">Movimentos Sociais</h1>
            </div>
            <p id="text-2" data-aos="fade-left" data-aos-duration="1500">
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
            <a href="https://www.brasilparalelo.com.br/artigos/black-lives-matter" target="_blank"  data-aos="fade-left" data-aos-duration="1500"><button
                    class="learn-more">
                    <span class="circle" aria-hidden="true">
                        <span class="icon arrow"></span>
                    </span>
                    <span class="button-text">Saiba Mais</span>
                </button></a>
        </div>
    </div>
</template>

<style scoped>
.social-moviments {
    width: 100%;
    height: 100vh;
    display: flex;
    overflow: hidden;
}

.img-1 {
    background-color: white;
    width: 50%;
    height: 100%;
    display: flex;
    align-items: flex-end;
    justify-content: center;
}

#woman {
    width: 75vh;
}

.texts2 {
    background-color: #6d212b;
    display: flex;
    justify-content: center;
    flex-direction: column;
    height: 100%;
    width: 50%;
    padding-left: 1%;
}

#title2 {
    color: aliceblue;
    font-size: calc(35px + 1vw);

}

#text-2 {
    color: aliceblue;
    font-size: 18px;
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

@media (max-height:600px) {
    #text-2 {
        font-size: 16px;
    }
}

@media (max-width:1000px) {
    .social-moviments {
        flex-direction: column;
    }

    .img-1 {
        width: 100%;
        height: 50%;
    }

    .texts2 {
        justify-content: flex-start;
        padding-top: 2%;
        height: 50%;
        width: 100%;
    }

    #title2 {
        font-size: calc(30px + 1vw);

    }

    #text-2 {
        font-size: 14px;
    }

    #woman {
        width: 40vh;
    }

    .button-text {
        font-size: 14px;
    }
}

@media screen and (max-width: 600px) {
    .img-1 {
        width: 100%;
        height: 40%;
    }

    #woman {
        width: 30vh;
    }


    #title2 {
        font-size: calc(26px + 1vw);

    }

    .texts2 {
        justify-content: flex-start;
        /* align-items: flex-start; */
        padding-top: 1%;
        height: 60%;
        width: 100%;
    }



    #text-2 {
        font-size: 11px;
    }
}

@media screen and (max-width: 300px) {
    #title2 {
        font-size: calc(22px + 1vw);

    }

    #text-2 {
        font-size: 10px;
    }
}
</style>