<template>
    <div class="production-comp">
        <div class="title">
            <h2>PRODUÇÃO</h2>
        </div>
        <i style="z-index: 1;" class="material-icons" @click="scrollBehavior">expand_more</i>
    </div>
</template>

<script>

export default {
    methods: {
        scrollBehavior() {
            window.scroll({ top: window.innerHeight, behavior: "smooth" })
        }
    }
}

</script>

<style lang="less" scoped>
.production-comp {
    width: 100%;
    height: 100vh;
    background-image: url("../../assets/background-production.png");
    background-position: bottom right;
    // background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    display: flex;
    align-items: center;
    justify-content: center;
}

.title {
    height: 70vh;
    width: 100%;

    h2 {
        display: flex;
        justify-content: center;
        position: absolute;
        align-items: center;
        font-size: calc(5em + 1vw);
        letter-spacing: 6px;
        width: 100%;
        height: 25%;
        background-color: #100404d7;
    }
}

.material-icons {
    cursor: pointer;
    color: #fff;
    position: absolute;
    font-size: 50px;
    bottom: 5%;
    animation: moveUpDown 1s ease-in-out infinite;
}

@keyframes moveUpDown {

    0%,
    100% {
        transform: translateY(0);
    }

    50% {
        transform: translateY(-0.5rem);
    }
}

@media screen and (max-width: 1024px) {
    .title {
        height: 70vh;

        h2 {
            font-size: calc(4em + 1vw);
        }
    }
}

@media screen and (max-width: 600px) {
    .title {
        height: 70vh;

        h2 {
            font-size: calc(3em + 1vw);
        }
    }
}

@media screen and (max-width: 300px) {
    .title {
        height: 70vh;

        h2 {
            font-size: calc(2em + 1vw);
        }
    }

}
</style>