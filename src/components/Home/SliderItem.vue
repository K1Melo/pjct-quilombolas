<template>
    <div class="item-three">
        <div class="title">
            <h1 class="title_3">Dificuldades - Gerais</h1>
        </div>
        <div class="dificuldades">
            <div class="one">
                <h2 class="dif_1 unselectable">Infra<br>estru<br>tura</h2>
            </div>
            <div class="two">
                <h2 class="dif_2 unselectable">Educa<br>ção</h2>
            </div>
            <div class="three">
                <h2 class="dif_1 unselectable">Saúde</h2>
            </div>
            <div class="four">
                <h2 class="dif_2 unselectable">Terras</h2>
            </div>
        </div>
    </div>
</template>

<script>

export default {
    name: 'SlideItemThree',

}

</script>

<style scoped>
.item-three {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 90%;
    z-index: 1;
}

.title_3 {
    /*Box model stuff*/
    /* margin-top: 5rem; */
    /*Typography stuff*/
    font-family: 'Rubik', sans-serif;
    font-size: 5vw;
    font-weight: 700;
    text-transform: uppercase;
    color: #fff;
}

.dificuldades {
    /*Display stuff*/
    display: flex;
    align-items: center;
    justify-content: space-around;
    /*Box model stuff*/
    margin-top: 5rem;
    width: 100%;
    height: fit-content;
}

.dif_2 {
    /*Display stuff*/
    display: inline-flex;
    align-items: center;
    justify-content: center;
    /*Box model stuff*/
    width: 30vh;
    height: 30vh;
    border: 5px solid #651e1e;
    border-radius: 100%;
    background: transparent;
    /*Typography stuff*/
    font-family: 'Rubik', sans-serif;
    font-size: 30px;
    font-weight: 300;
    text-transform: uppercase;
    color: #651e1e;
    /*Miscellaneous*/
    letter-spacing: 10px;
}

.dif_2:hover {
    /*Box model stuff*/
    border: 5px solid #651e1e;
    background-color: #651e1e;
    /*Typography stuff*/
    color: #fff;
    /*Manipulations stuff*/
    transition: all 0.5s;
}

.dif_1 {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 30vh;
    height: 30vh;
    border: 5px solid #651e1e;
    border-radius: 100%;
    background-color: #651e1e;
    font-family: 'Rubik', sans-serif;
    font-size: 30px;
    font-weight: 300;
    text-transform: uppercase;
    color: #fff;
    letter-spacing: 10px;
}

.dif_1:hover {
    /*Box model stuff*/
    border: 5px solid #651e1e;
    background-color: transparent;
    /*Typography stuff*/
    color: #651e1e;
    /*Manipulations stuff*/
    transition: all 0.5s;
}

.unselectable {
    -webkit-touch-callout: none;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
}

@media only screen and (max-width: 1025px) {

    .dif_2 {
        width: 25vh;
        height: 25vh;
        font-size: 22px;

        letter-spacing: 8px;
    }

    .dif_1 {

        width: 25vh;
        height: 25vh;
        font-size: 22px;

        letter-spacing: 8px;
    }
}

@media only screen and (max-width: 1000px) {
    .title_3 {
        font-size: 6vw;
        text-transform: uppercase;
        color: #fff;
    }

    .dificuldades {
        /*Display stuff*/
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-template-rows: 1fr 1fr 1fr 1fr;
        text-align: center;
        margin-top: 0;
        overflow: hidden;
        width: 80%;
        /* height: 70vh; */
    }

    .dif_2 {
        margin-right: 4vw;
        width: 20vh;
        height: 20vh;
        font-size: 25px;

        letter-spacing: 8px;
    }

    .dif_1 {
        margin-left: 4vw;
        width: 20vh;
        height: 20vh;
        font-size: 25px;

        letter-spacing: 8px;
    }

    .one {
        margin-bottom: -10vh;
        grid-column-start: 1;
        grid-column-end: 1;
        grid-row-start: 1;
        grid-row-end: 1;
    }

    .two {
        grid-column-start: 2;
        grid-column-end: 2;
        grid-row-start: 2;
        grid-row-end: 2;
    }

    .three {
        grid-column-start: 1;
        grid-column-end: 1;
        grid-row-start: 3;
        grid-row-end: 3;
    }

    .four {
        margin-top: -10vh;

        grid-column-start: 2;
        grid-column-end: 2;
        grid-row-start: 4;
        grid-row-end: 4;
    }
}

@media only screen and (max-width: 600px) {
    .title_3 {
        /* font-size: 40px; */
        font-weight: 700;
        text-transform: uppercase;
        color: #fff;
    }

    .dificuldades {
        text-align: center;
        width: 90%;
    }

    .dif_2 {
        margin-right: 4vw;
        width: 18vh;
        height: 18vh;
        font-size: 20px;
        letter-spacing: 4px;
    }

    .dif_1 {
        margin-left: 4vw;
        width: 18vh;
        height: 18vh;
        font-size: 20px;
        letter-spacing: 4px;
    }
}

@media only screen and (max-width: 300px) {
    .dif_2 {
        margin-right: 4vw;
        width: 15vh;
        height: 15vh;
        font-size: 15px;
        letter-spacing: 4px;
    }

    .dif_1 {
        margin-left: 4vw;
        width: 15vh;
        height: 15vh;
        font-size: 15px;
        letter-spacing: 4px;
    }
}

</style>