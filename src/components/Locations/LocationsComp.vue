<template>
  <div class="locationComp">
    <!-- <dotlottie-player src="https://lottie.host/839939c7-2444-4b8d-bb0e-a26a902f01a1/PR7fWX0l8y.json"
      background="transparent" speed="1" loop autoplay></dotlottie-player> -->
    <img src="../../assets/globe.png" class="globe" alt="">
    <div class="title-location">
      <h2>LUGARES</h2>
    </div>
    <div class="subtitle">
      <p class="quilombo">PALMARES</p>
      <p class="state">- ALAGOAS</p>
    </div>
    <i class="material-icons" @click="scrollBehavior">expand_more</i>
</div>
</template>

<script>
  
  export default {
    name: 'LocationsComp',
    methods: {
        scrollBehavior() {
            window.scroll({top: window.innerHeight, behavior: "smooth"})
        }
    }
  }
</script>
  
<style lang="less" scoped>
.locationComp {
  background-image: url(../../assets/background-locations.png);
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100%;
}

.material-icons {
  cursor: pointer;
  color: #fff;
  position: absolute;
  font-size: 50px;
  bottom: 5%;
  animation: moveUpDown 1s ease-in-out infinite;

}

.globe {
  position: absolute;
  // width: 40vw;
  height: 40vw;
  filter: blur(3px);
  -webkit-filter: blur(3px);
  animation: moveUpDown 4s ease-in-out infinite;

}

@keyframes moveUpDown {
    0%, 100% {
      transform: translateY(0); /* Inicial e estado final: sem deslocamento vertical */
    }
    50% {
      transform: translateY(-0.5rem); /* Estado intermediário: desloca 20px para cima */
    }
}

.title-location {
  h2 {
    font-size: calc(9em + 1vw);
    letter-spacing: 10px;

  }
}

.subtitle {
  position: absolute;
  right: 5%;
  bottom: 10%;

  p {
    margin: 0;
    font-size: 18px;
  }

  .quilombo {
    color: #ffffffb5;
  }

  .state {
    color: #ffffff70;

  }
}

@media screen and (max-width: 1024px) {
  .globe {
    // width: 50vw;
    height: 50vw;
    filter: blur(3px);
    -webkit-filter: blur(3px);
  }

  .title-location {
    h2 {
      font-size: calc(8em + 1vw);
      letter-spacing: 8px;

    }
  }

  .subtitle {
    position: absolute;

    p {
      margin: 0;
      font-size: 15px;
    }
  }
}

@media screen and (max-width: 800px) {
  .globe {
    // width: 50vw;
    height: 50vw;
    filter: blur(2.5px);
    -webkit-filter: blur(2.5px);
  }

  .title-location {
    h2 {
      font-size: calc(6em + 1vw);
      letter-spacing: 8px;

    }
  }

  .subtitle {
    position: absolute;

    p {
      margin: 0;
      font-size: 13px;
    }
  }

}
@media screen and (max-width: 600px) {
  .globe {
    // width: 60vw;
    height: 60vw;
    filter: blur(1.5px);
    -webkit-filter: blur(1.5px);
  }

  .title-location {
    h2 {
      font-size: calc(3em + 1vw);
      letter-spacing: 5px;

    }
  }

  .subtitle {

    p {
      margin: 0;
      font-size: 13px;
    }
  }

}
@media screen and (max-width: 300px) {
  .globe {
    // width: 70vw;
    height: 70vw;
    filter: blur(1px);
    -webkit-filter: blur(1px);
  }

  .title-location {
    h2 {
      font-size: calc(2em + 1vw);
      letter-spacing: 5px;

    }
  }

  .subtitle {

    p {
      margin: 0;
      font-size: 12px;
    }
  }

}
</style>