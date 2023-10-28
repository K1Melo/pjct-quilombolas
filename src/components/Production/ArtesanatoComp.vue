<template>
    <div class="artesanato">
        <h2>Artesanato</h2>
    </div>
</template>

<script>

export default {

}

</script>

<style scoped>
.artesanato {
    height: 100vh;
    width: 100%;
    background-image: url(../../assets/background-artesanato.webp);
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    display: flex;
    align-items: center;
    justify-content: center;
}

h2 {
    font-size: calc(15em + 1vw);
    opacity: 0.8;
}

@media only screen and (max-width: 1450px) {
    h2 {
        font-size: calc(13em + 1vw);
    }
}


@media only screen and (max-width: 1180px) {
    h2 {
        font-size: calc(10em + 1vw);
    }
}

@media only screen and (max-width: 1000px) {
    h2 {
        font-size: calc(8em + 1vw);
    }
}

@media only screen and (max-width: 850px) {
    h2 {
        font-size: calc(8em);
    }
}

@media only screen and (max-width: 675px) {
    h2 {
        font-size: calc(5em + 1vw);
    }
}

@media only screen and (max-width: 475px) {
    h2 {
        font-size: calc(4em + 1vw);
    }
}

@media only screen and (max-width: 375px) {
    h2 {
        font-size: calc(3em + 1vw);
        letter-spacing: 3px;
    }
}

@media only screen and (max-width: 330px) {
    h2 {
        font-size: calc(3em + 1vw);
        letter-spacing: 1px;
    }
}

</style>