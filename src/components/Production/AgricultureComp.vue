<template>
    <div class="agriculture-comp">
        <h2 class="agricultura">Agricultura</h2>
        <h2 class="familiar">Familiar</h2>
        <div class="armando-img">
            <img src="../../assets/seu-armando.svg" alt="Homem arando terra">
        </div>
    </div>
</template>

<script>
export default {

}

</script>

<style lang="less" scoped>
.agriculture-comp {
    overflow: hidden;
    background-image: url(../../assets/background-armando.png);
    background-size: cover;
    background-repeat: no-repeat;
    background-position: bottom center;
    height: 100vh;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
}

.armando-img {
    height: 100%;
    display: flex;
    align-items: flex-end;
    justify-content: center;
    z-index: 0;

    img {
        width: calc(40vh + 30vw);
        height: auto;
    }
}

.title {
    position: absolute;
    width: 100%;
}

.agricultura {
    position: absolute;
    z-index: 1;
    // top: 210%;
    z-index: 0;
    height: calc(10% + 40vw);
}

.familiar {
    position: absolute;
    // top: 240%;
    z-index: 1;
    height: calc(5% + 10vw);
}

h2 {
    font-size: calc(15em + 1vw);
}

@media only screen and (max-width: 1450px) {
    .agricultura {
        height: calc(5% + 40vw);
    }

    .familiar {
        height: calc(10vw);
    }

    h2 {
        font-size: calc(13em + 1vw);
    }
}

@media only screen and (max-width: 1180px) {
    .armando-img {
        img {
            width: calc(40vh + 30vw);
        }
    }

    .agricultura {
        height: calc(10% + 20vw);
    }

    .familiar {
        
        height: calc(1vh + 1vw);
    }

    h2 {
        font-size: calc(10em + 1vw);
    }
}

@media only screen and (max-width: 1000px) {
    .armando-img {
        img {
            width: calc(30vh + 40vw);
        }
    }

    .agricultura {
        height: calc(15% + 20vw);
    }

    .familiar {
        
        height: calc(1vw);
    }

    h2 {
        font-size: calc(8em + 1vw);
    }
}

@media only screen and (max-width: 850px) {
    .armando-img {
        img {
            width: calc(30vh + 40vw);
        }
    }

    .agricultura {
        height: calc(13% + 20vw);
    }

    .familiar {
        
        height: calc(1vw);
    }

    h2 {
        font-size: calc(8em);
    }
}

@media only screen and (max-width: 675px) {
    .armando-img {
        img {
            width: calc(40vh + 30vw);
        }
    }

    .agricultura {
        height: calc(35vw);
    }

    .familiar {
        
        height: calc(1vw);
    }

    h2 {
        font-size: calc(5em + 1vw);
    }
}

@media only screen and (max-width: 475px) {
    .armando-img {
        img {
            width: calc(40vh + 30vw);
        }
    }

    .agricultura {
        height: calc(33vw);
    }

    .familiar {
        
        height: calc(1vw);
    }

    h2 {
        font-size: calc(4em + 1vw);
    }
}

@media only screen and (max-width: 375px) {
    .armando-img {
        img {
            width: calc(40vh + 30vw);
        }
    }

    .agricultura {
        height: calc(30vw);
    }

    .familiar {
        
        height: calc(1vw);
    }

    h2 {
        font-size: calc(3em + 1vw);
        letter-spacing: 5px;
    }
}

@media only screen and (max-width: 330px) {
    .armando-img {
        img {
            width: calc(40vh + 30vw);
        }
    }

    .agricultura {
        height: calc(40vw);
    }

    .familiar {
        
        height: calc(1vw);
    }

    h2 {
        font-size: calc(3em + 1vw);
        letter-spacing: 1px;
    }
}



</style> 