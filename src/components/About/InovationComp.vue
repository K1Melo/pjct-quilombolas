<template>
    <div class="inovation-comp">
        <div class="txt-inovation">
            <h2>Inovação</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore totam, expedita fugiat ea iure repellendus
                illum ipsa sapiente a laborum necessitatibus similique mollitia ratione, non aperiam, laboriosam delectus
                nobis nemo?</p>
        </div>
        <div class="cube-inovation">
            <div class="top"></div>
            <div>
                <span style="--i: 0"></span>
                <span style="--i: 1"></span>
                <span style="--i: 2"></span>
                <span style="--i: 3"></span>
            </div>
        </div>
    </div>
</template>

<style lang="less" scoped>
.inovation-comp {
    width: 100%;
    height: 70vh;
    display: flex;
    justify-content: center;
    align-items: center;
}

.cube-inovation {
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    width: 50%;
    height: 100%;
    transform-style: preserve-3d;
    transform: rotateX(-30deg);
    animation: animate 10s linear infinite;
}

@keyframes animate {
    0% {
        transform: rotateX(-30deg) rotateY(0deg);
    }

    0% {
        transform: rotateX(-30deg) rotateY(360deg);
    }
}

.cube-inovation div {
    position: absolute;

    width: 300px;
    height: 300px;
    transform-style: preserve-3d;
}

.cube-inovation div span {
    position: absolute;

    width: 100%;
    height: 100%;
    background: linear-gradient(#151515, rgb(93, 49, 49));
    transform: rotateY(calc(90deg * var(--i))) translateZ(150px);
}

.top {
    position: absolute;
    width: 300px;
    height: 300px;
    background: #222;
    transform: rotateX(90deg) translateZ(150px);
}

.top::before {
    content: '';
    position: absolute;
    width: 300px;
    height: 300px;
    background: rgb(217, 131, 131);
    transform: translateZ(-300px);
    filter: blur(20px);
}

.txt-inovation {
    width: 50%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    border-right: 2px solid rgb(0, 0, 0);

    h2,
    p {
        color: #000;
        width: 80%;
    }
}

.dark {
    .txt-inovation {
        border-right: 2px solid rgba(255, 255, 255, 0.822);

        h2 {
            color: #ffffffde;
        }

        p {
            color: #fff;
        }
    }
}

@media only screen and (max-width: 1000px) {
    .cube-inovation div {
        width: 200px;
        height: 200px;
    }

    .cube-inovation div span {
        transform: rotateY(calc(90deg * var(--i))) translateZ(100px);
    }

    .top {
        width: 200px;
        height: 200px;
        transform: rotateX(90deg) translateZ(100px);
    }

    .top::before {
        width: 200px;
        height: 200px;
        transform: translateZ(-200px);
    }
}

@media only screen and (max-width: 800px) {
    .inovation-comp {
        flex-direction: column;
        height: 80vh;

    }

    .cube-inovation {
        height: 50%;
        width: 100%;
    }


    .txt-inovation {
        height: 50%;
        width: 90%;
        border-right: none;
        border-bottom: 2px solid rgb(0, 0, 0);

        h2,
        p {
            color: #000;
            width: 100%;
        }
    }

    .dark {
        .txt-inovation {
            border-right: none;

            border-bottom: 2px solid rgba(255, 255, 255, 0.822);
        }
    }
}

@media only screen and (max-width: 500px) {
    .inovation-comp {
        height: 90vh;

    }

    .cube-inovation div {
        width: 150px;
        height: 150px;
    }

    .cube-inovation div span {
        transform: rotateY(calc(90deg * var(--i))) translateZ(75px);
    }

    .top {
        width: 150px;
        height: 150px;
        transform: rotateX(90deg) translateZ(75px);
    }

    .top::before {
        width: 150px;
        height: 150px;
        transform: translateZ(-150px);
    }
}
</style>