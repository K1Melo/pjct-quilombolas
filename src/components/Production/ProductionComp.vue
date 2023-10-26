<template>
    <div class="production-comp">
        <div class="title">
            <h2>PRODUÇÃO</h2>
        </div>
    </div>
</template>

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
}

.title {
    height: 70vh;

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