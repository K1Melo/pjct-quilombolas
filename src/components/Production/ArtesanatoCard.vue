<template>
    <div class="artesanato-card">
        <div class="card-container" data-aos="fade-left"  data-aos-duration="750">
            <div class="card">
                <div class="front">
                    <h2 class="food-name">Name</h2>
                    <div class="space"></div>
                </div>
                <div class="back">
                    <h2>Back of Card</h2>
                    <p>Addition info on the back</p>
                </div>
            </div>
        </div>
        <div class="card-container" data-aos="fade-left" data-aos-duration="1500">
            <div class="card">
                <div class="front">
                    <h2 class="food-name">Name</h2>
                    <div class="space"></div>
                </div>
                <div class="back">
                    <h2>Back of Card</h2>
                    <p>Addition info on the back</p>
                </div>
            </div>
        </div>
        <div class="card-container" data-aos="fade-left" data-aos-duration="3000">
            <div class="card">
                <div class="front">
                    <h2 class="food-name">Name</h2>
                    <div class="space"></div>
                </div>
                <div class="back">
                    <h2>Back of Card</h2>
                    <p>Addition info on the back</p>
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

    background-color: rgba(0, 0, 0, 0.653);
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