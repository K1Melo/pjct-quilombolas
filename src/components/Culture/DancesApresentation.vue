<template>
    <div class="dances-apresentation">
        <h2>Danças e Festividades</h2>
    </div>
</template>

<style lang="less" scoped>
.dances-apresentation {
    width: 100%;
    height: 100vh;
    background-image: url(../../assets/background-dances.png);
    background-position: center right 45%;
    background-repeat: no-repeat;
    background-size: cover;
    display: flex;
    align-items: center;
    justify-content: center;
}

h2 {
    width: 95%;
    text-align: center;
    font-size: calc(5em + 1vw);
}


@media screen and (max-width: 1024px) {
    h2 {
        font-size: calc(4em + 1vw);
    }
}

@media screen and (max-width: 600px) {
    h2 {
        font-size: calc(3em + 1vw);
    }
}

@media screen and (max-width: 300px) {
    h2 {
        font-size: calc(2em + 1vw);
    }
}

</style>