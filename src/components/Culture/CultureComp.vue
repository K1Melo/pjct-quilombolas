<template>
    <div class="culture-comp">
        <div class="texts">
            <h1 id="title" data-aos="fade-left">Culturas</h1>
            <p id="text-1">
                Apesar de muitas vezes ser confundido apenas com a ideia de monumentos e com
                conceitos de patrimônio material, o patrimônio cultural é mais que isso, ele está ligado
                à produção da identidade e da territorialidade, o patrimônio cultural está fundamentado
                na referência de processos culturais.
            </p>
        </div>
        <div class="retang"></div>
    </div>
</template>

<style scoped>
.culture-comp {
    width: 100%;
    height: 80vh;
    display: flex;
    background-color: #440a13;
    overflow: hidden;
}

.texts {
    
    z-index: 1;
    width: 60%;
    position: absolute;
    top: 10%;
    margin-left: 5%;
}

#title {
    /* font-size: 110px; */
    color: aliceblue;
    margin: 0;
    font-size: calc(5em + 1vw);
    letter-spacing: 8px;
    color: #f5f5f5;
}

#text-1 {
    margin: 0;
    margin-top: 2%;
    font-size: 26px;
    color: aliceblue;
    width: 80%;
}

.retang {
    position: absolute;
    z-index: 0;
    width: 20%;
    height: 62%;
    background-color: #6d212b;
    right: 35%;
}

@media(max-width:1024px) {

    #title {
        font-size: calc(4.5em + 1vw);
        letter-spacing: 6px;
    }

    #text-1 {
        font-size: 20px;
    }
}

@media(max-width:600px) {


    .culture-comp {
        height: 70vh;
    }

    .texts {
        width: 90%;
        position: absolute;
        top: 15%;
    }

    #title {
        font-size: calc(4em + 1vw);
        letter-spacing: 4px;
    }

    #text-1 {
        font-size: 16px;
        margin-top: 7%;
    }

    .retang {
        width: 22%;
        height: 25%;
        background-color: #6d212b;
        right: 20%;
    }
}

@media(max-width:300px) {
    .culture-comp {
        height: 80vh;
    }

    .texts {
        width: 90%;
        position: absolute;
        top: 10%;
    }

    #title {
        font-size: calc(3.5em + 1vw);
    }

    #text-1 {
        font-size: 14px;
        margin-top: 9%;
    }
}
</style>