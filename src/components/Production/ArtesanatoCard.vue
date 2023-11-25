<template>
    <div class="artesanato-card">
        <div class="card-container" data-aos="fade-left" data-aos-duration="750">
            <div class="card">
                <div class="front" id="bananeira">
                    <h2 class="food-name">Palha de bananeira</h2>
                    <div class="space"></div>
                </div>
                <div class="back">
                    <p>O artesanato com a palha da bananeira possibilita a confecção de uma grande variedade de produtos
                        tais como cestas, bolsas, sandálias, tapetes, entre diversos outros.</p>
                </div>
            </div>
        </div>
        <div class="card-container" data-aos="fade-left" data-aos-duration="1500">
            <div class="card">
                <div class="front" id="dourado">
                    <h2 class="food-name">Capim Dourado</h2>
                    <div class="space"></div>
                </div>
                <div class="back">
                    <p>A tradição do artesanato com o capim dourado, o “ouro do cerrado”, foi passada pelos índios da etnia
                        Xerente que no começo do século XX saíram caminhando pelo lado do Rio Araguaia, no qual passaram
                        pelo
                        povoado quilombola Mumbuca e ensinaram alguns moradores a “costurar capim” com a seda de buriti.
                    </p>
                </div>
            </div>
        </div>
        <div class="card-container" data-aos="fade-left" data-aos-duration="3000">
            <div class="card">
                <div class="front" id="piacava">
                    <h2 class="food-name">Piaçava</h2>
                    <div class="space"></div>
                </div>
                <div class="back">
                    <p>O manejo extrativista da piaçava na região é uma herança ancestral dos
                        povos originários que habitavam esse território antes chegada dos
                        colonizadores.</p>
                </div>
            </div>
        </div>
        <div class="line-in-middle">

        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style scoped>
@import url(./Cards.css);

.artesanato-card {
    padding-top: 10%;
    padding-bottom: 10%;
    width: 100%;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    overflow: hidden;
}

.line-in-middle {
    position: absolute;
    z-index: -1;
    width: 100%;
    height: 30%;
    background-color: #100404d7;
    transition: all 1s linear;
}

.dark .line-in-middle {
    background-color: #925959d7;
}

.food-name {
    position: absolute;
    bottom: 10%;
    left: 10%;
}

.space {
    height: 30%;
    width: 100%;

    background-color: rgba(0, 0, 0, 0.8);
}

#bananeira {
    background-image: url(../../assets/cards/fibraBananeira.png);
}

#dourado {
    background-image: url(../../assets/cards/capimDourado.png);
}

#piacava {
    background-image: url(../../assets/cards/piacava.png);
}


@media only screen and (max-width: 1000px) {

    #bananeira h2,
    #dourado h2 {
        bottom: 2%;
    }
}

@media only screen and (max-width: 600px) {
    .line-in-middle {
        position: absolute;
        z-index: -1;
        width: 100%;
        height: 25%;
        background-color: #100404d7;
        transition: all 1s linear;
    }


    #bananeira h2,
    #dourado h2 {
        font-size: 18px;
        bottom: 10%;
        left: 5%;
    }

}

@media only screen and (max-width: 500px) {

    #bananeira h2,
    #dourado h2 {
        bottom: 5%;
    }
}

@media only screen and (max-width: 400px) {

    #bananeira h2,
    #dourado h2 {
        bottom: 3%;
        font-size: 15px;
    }
}
</style>