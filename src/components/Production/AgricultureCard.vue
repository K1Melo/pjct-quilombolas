<template>
    <div class="agriculture-card">
        <div class="card-container" data-aos="fade-right" data-aos-duration="3000">
            <div class="card">
                <div class="front" id="arroz">
                    <h2 class="food-name">Arroz</h2>
                    <div class="space"></div>
                </div>
                <div class="back">
                    <p>Antes da chegada dos portugueses, era cultivado pelos tupis nos alagados próximos ao litoral, mas com
                        a chegada, também foi descoberto seu uso pelos africanos, sendo um dos principais alimentos usados nos
                        navios negreiros</p>
                </div>
            </div>
        </div>
        <div class="card-container" data-aos="fade-right" data-aos-duration="1500">
            <div class="card">
                <div class="front" id="inhame">
                    <h2 class="food-name">Inhame</h2>
                    <div class="space"></div>
                </div>
                <div class="back">
                    <p>Esse tubérculo chegou ao brasil por meio dos navios portugueses que traziam pessoas escravisadas, e
                        por fazer parte da culinária africana chegou ao Brasil e que por consequencia se disseminou pelos
                        quilombos.</p>
                </div>
            </div>
        </div>
        <div class="card-container" data-aos="fade-right" data-aos-duration="750">
            <div class="card">
                <div class="front" id="milho">
                    <h2 class="food-name">Milho</h2>
                    <div class="space"></div>
                </div>
                <div class="back">
                    <p>Esse tubérculo chegou ao brasil por meio dos navios portugueses que traziam pessoas escravisadas, e
                        por fazer parte da culinária africana chegou ao Brasil e que por consequencia se disseminou pelos
                        quilombos.</p>
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

.agriculture-card {
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

    background-color: rgba(0, 0, 0, 0.915);
}

#arroz {
    background-image: url(../../assets/cards/Arroz.png);
}

#inhame {
    background-image: url(../../assets/cards/Inhame.png);
}

#milho {
    background-image: url(../../assets/cards/Milho.png);
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
}
</style>