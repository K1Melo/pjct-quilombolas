<template>
    <div class="participants">
        <div class="choose-participant">
            <div class="participant-img" id="kaua" @click="participantDiv('kaua')"></div>
            <div class="participant-img" id="lima" @click="participantDiv('lima')"></div>
            <div class="participant-img" id="mizuno" @click="participantDiv('mizuno')"></div>
            <div class="participant-img" id="araujo" @click="participantDiv('araujo')"></div>
            <div class="participant-img" id="udiel" @click="participantDiv('udiel')"></div>
        </div>
        <div class="participant-description">
            <div class="participant participant-active" id="kaua-description">
                <h2>Kauã Fernandes</h2>
                <h3>Github: </h3>
            </div>
            <div class="participant" id="lima-description"></div>
            <div class="participant" id="mizuno-description"></div>
            <div class="participant" id="araujo-description"></div>
            <div class="participant" id="udiel-description"></div>
        </div>
    </div>
</template>

<script>

export default {
    methods: {
        participantDiv(id) {
            const buttons = document.querySelectorAll(".participant-img");
            const descriptions = document.querySelectorAll(".participant");

            buttons.forEach((participant) => {

                if (participant.id == id) {

                    let descriptionId = participant.id + "-description";

                    descriptions.forEach((description) => {

                        description.classList.remove("participant-active");

                        if (description.id == descriptionId) {
                            description.classList.add("participant-active");
                        }
                    })

                }
            })
        }
    }
}

</script>

<style lang="less" scoped>
.participants {
    width: 100%;
    height: 100vh;
    position: relative;
    display: flex;
    justify-content: flex-end;
    align-items: flex-end;
}

.choose-participant {
    z-index: 1;
    position: absolute;
    height: 80%;
    width: 10%;
    left: 5%;
    display: grid;
    grid-template-rows: 1fr 1fr 1fr 1fr 1fr;
    align-items: center;
    justify-content: center;
}

.participant-img {
    width: calc(80px + 1vw);
    height: calc(80px + 1vw);
    border-radius: 50%;
    cursor: pointer;
    transition: all .2s linear;

    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;

    &:hover {
        transform: scale(1.1);
        box-shadow: 10px 5px 5px #000;
    }

    &:active {
        transform: scale(0.9);
    }
}

.dark {
    .participant-img {

        &:hover {
            box-shadow: 0px 2px 10px #ffffff;
        }
    }
}

#kaua {
    background-image: url(../../assets/github-kaua.gif);
}

#lima {
    background-image: url(../../assets/github-lima.jpg);
}

#mizuno {
    background-image: url(../../assets/github-mizuno.jpg);
}

#araujo {
    background-image: url(../../assets/github-araujo.jpg);
}

#udiel {
    background-image: url(../../assets/github-udiel.png);
}

.participant-description {
    width: 80%;
    height: 100%;
    position: relative;
    overflow: hidden;
    z-index: 0;
}

.participant {
    width: 100%;
    height: 100%;
    position: absolute;
    opacity: 0;
    transition: opacity .8s linear;
    background-color: aqua;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;

    h2 {
        display: flex;
        align-items: flex-end;
        height: 23%;
        padding-left: 5%;
        font-size: 60px;
    }

    h3 {
        padding-left: 5%;
    }
}

.participant-active {
    opacity: 1;
}

#kaua-description {
    background-position: center right 45%;

    background-image: url(https://i.imgur.com/ETBK3vs.jpg);
}

@media only screen and (max-width: 1000px) {
    .choose-participant {
        position: absolute;
        height: 10%;
        width: 100%;
        left: 0;
        top: 10%;
        display: flex;
        justify-content: space-evenly;
    }

    .participant-img {
        background-color: bisque;
        border-radius: 50%;
        width: calc(70px + 1vw);
        height: calc(70px + 1vw);
    }

    .participant-description {
        width: 100%;
        height: 90%;
        background-color: rgb(255, 0, 0);
    }

    .participant {
        h2 {
            display: flex;
            height: 50%;
            padding-left: 5%;
            font-size: 55px;
        }
    }
}

@media only screen and (max-width: 600px) {
    .choose-participant {
        position: absolute;
        height: 10%;
        width: 100%;
        left: 0;
        top: 10%;
        display: flex;
        justify-content: space-evenly;
    }

    .participant-img {
        background-color: bisque;
        border-radius: 50%;
        width: calc(60px + 1vw);
        height: calc(60px + 1vw);
    }

    .participant {
        h2 {
            height: 25%;
            font-size: 50px;
        }
    }
}

@media only screen and (max-width: 320px) {
    .choose-participant {
        position: absolute;
        height: 10%;
        width: 100%;
        left: 0;
        top: 10%;
        display: flex;
        justify-content: space-evenly;
    }

    .participant-img {
        background-color: bisque;
        border-radius: 50%;
        width: calc(40px + 1vw);
        height: calc(40px + 1vw);
    }

    .participant {
        h2 {
            height: 24%;
            font-size: 40px;
        }
    }
}
</style>