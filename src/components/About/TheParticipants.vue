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
                <div class="github-participants">
                    <h3>Github: </h3>
                    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 16 16"
                        @click="openParticipantGitHub('https://github.com/K1Melo/')">
                        <path
                            d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59c.4.07.55-.17.55-.38c0-.19-.01-.82-.01-1.49c-2.01.37-2.53-.49-2.69-.94c-.09-.23-.48-.94-.82-1.13c-.28-.15-.68-.52-.01-.53c.63-.01 1.08.58 1.23.82c.72 1.21 1.87.87 2.33.66c.07-.52.28-.87.51-1.07c-1.78-.2-3.64-.89-3.64-3.95c0-.87.31-1.59.82-2.15c-.08-.2-.36-1.02.08-2.12c0 0 .67-.21 2.2.82c.64-.18 1.32-.27 2-.27c.68 0 1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82c.44 1.1.16 1.92.08 2.12c.51.56.82 1.27.82 2.15c0 3.07-1.87 3.75-3.65 3.95c.29.25.54.73.54 1.48c0 1.07-.01 1.93-.01 2.2c0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
                    </svg>
                </div>
            </div>
            <div class="participant" id="lima-description">
                <h2>Mateus Lima</h2>
                <div class="github-participants">
                    <h3>Github: </h3>
                    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 16 16"
                        @click="openParticipantGitHub('https://github.com/mateuslima0/')">
                        <path
                            d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59c.4.07.55-.17.55-.38c0-.19-.01-.82-.01-1.49c-2.01.37-2.53-.49-2.69-.94c-.09-.23-.48-.94-.82-1.13c-.28-.15-.68-.52-.01-.53c.63-.01 1.08.58 1.23.82c.72 1.21 1.87.87 2.33.66c.07-.52.28-.87.51-1.07c-1.78-.2-3.64-.89-3.64-3.95c0-.87.31-1.59.82-2.15c-.08-.2-.36-1.02.08-2.12c0 0 .67-.21 2.2.82c.64-.18 1.32-.27 2-.27c.68 0 1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82c.44 1.1.16 1.92.08 2.12c.51.56.82 1.27.82 2.15c0 3.07-1.87 3.75-3.65 3.95c.29.25.54.73.54 1.48c0 1.07-.01 1.93-.01 2.2c0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
                    </svg>
                </div>
            </div>
            <div class="participant" id="mizuno-description">
                <h2>Matheus Mizuno</h2>
                <div class="github-participants">
                    <h3>Github: </h3>
                    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 16 16"
                        @click="openParticipantGitHub('https://github.com/matmizuno/')">
                        <path
                            d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59c.4.07.55-.17.55-.38c0-.19-.01-.82-.01-1.49c-2.01.37-2.53-.49-2.69-.94c-.09-.23-.48-.94-.82-1.13c-.28-.15-.68-.52-.01-.53c.63-.01 1.08.58 1.23.82c.72 1.21 1.87.87 2.33.66c.07-.52.28-.87.51-1.07c-1.78-.2-3.64-.89-3.64-3.95c0-.87.31-1.59.82-2.15c-.08-.2-.36-1.02.08-2.12c0 0 .67-.21 2.2.82c.64-.18 1.32-.27 2-.27c.68 0 1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82c.44 1.1.16 1.92.08 2.12c.51.56.82 1.27.82 2.15c0 3.07-1.87 3.75-3.65 3.95c.29.25.54.73.54 1.48c0 1.07-.01 1.93-.01 2.2c0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
                    </svg>
                </div>
            </div>
            <div class="participant" id="araujo-description">
                <h2>Matheus Araújo</h2>
                <div class="github-participants">
                    <h3>Github: </h3>
                    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 16 16"
                        @click="openParticipantGitHub('https://github.com/mths0303s/')">
                        <path
                            d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59c.4.07.55-.17.55-.38c0-.19-.01-.82-.01-1.49c-2.01.37-2.53-.49-2.69-.94c-.09-.23-.48-.94-.82-1.13c-.28-.15-.68-.52-.01-.53c.63-.01 1.08.58 1.23.82c.72 1.21 1.87.87 2.33.66c.07-.52.28-.87.51-1.07c-1.78-.2-3.64-.89-3.64-3.95c0-.87.31-1.59.82-2.15c-.08-.2-.36-1.02.08-2.12c0 0 .67-.21 2.2.82c.64-.18 1.32-.27 2-.27c.68 0 1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82c.44 1.1.16 1.92.08 2.12c.51.56.82 1.27.82 2.15c0 3.07-1.87 3.75-3.65 3.95c.29.25.54.73.54 1.48c0 1.07-.01 1.93-.01 2.2c0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
                    </svg>
                </div>
            </div>
            <div class="participant" id="udiel-description">
                <h2>Udiel Inácio</h2>
                <div class="github-participants">
                    <h3>Github: </h3>
                    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 16 16"
                        @click="openParticipantGitHub('https://github.com/UdielOliveira/')">
                        <path
                            d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59c.4.07.55-.17.55-.38c0-.19-.01-.82-.01-1.49c-2.01.37-2.53-.49-2.69-.94c-.09-.23-.48-.94-.82-1.13c-.28-.15-.68-.52-.01-.53c.63-.01 1.08.58 1.23.82c.72 1.21 1.87.87 2.33.66c.07-.52.28-.87.51-1.07c-1.78-.2-3.64-.89-3.64-3.95c0-.87.31-1.59.82-2.15c-.08-.2-.36-1.02.08-2.12c0 0 .67-.21 2.2.82c.64-.18 1.32-.27 2-.27c.68 0 1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82c.44 1.1.16 1.92.08 2.12c.51.56.82 1.27.82 2.15c0 3.07-1.87 3.75-3.65 3.95c.29.25.54.73.54 1.48c0 1.07-.01 1.93-.01 2.2c0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
                    </svg>
                </div>
            </div>
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
        },
        openParticipantGitHub(url) {
            window.open(url);
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
}

.participant {
    width: 100%;
    height: 100%;
    position: absolute;
    opacity: 0;
    transition: opacity 1.5s linear;
    background-color: aqua;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    z-index: -1;

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
    z-index: 1;
    opacity: 1;
}

.github-participants {
    display: flex;

    svg {
        fill: #ffffff;
        margin-left: 1%;
        cursor: pointer;
        transition: transform .2s linear;

        &:hover {
            transform: scale(1.1);
        }

        &:active {
            transform: scale(.9);

        }
    }

}


#kaua-description {
    background-position: center right 45%;

    background-image: url(https://i.imgur.com/ETBK3vs.jpg);
}
#lima-description {
    background-image: url(../../assets/background-lima.png);
}
#mizuno-description {
    background-image: url(../../assets/background-mizuno.png);
}
#araujo-description {
    background-position: center right 45%;

    background-image: url(https://i.imgur.com/ETBK3vs.jpg);
}
#udiel-description {
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
            height: 25%;
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
            height: 28%;
            font-size: 46px;
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
            height: 30%;
            font-size: 40px;
        }
    }
}
</style>