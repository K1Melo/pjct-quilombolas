<template>
    <div class="agriculture-card">
        <div class="card-container">
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
        <div class="card-container">
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
        <div class="card-container">
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

</style>