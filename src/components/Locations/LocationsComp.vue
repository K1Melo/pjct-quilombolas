<template>
  <div class="locationComp" data-aos="fade-in" data-aos-easing="linear" data-aos-duration="2000">
    <div class="globe" data-aos="fade-in" data-aos-easing="linear" data-aos-duration="2000">
      <canvas id="canvas3d"></canvas>
    </div>
    <div class="title-location">
      <h2>LUGARES</h2>
    </div>
    <div class="subtitle">
      <p class="quilombo">PALMARES</p>
      <p class="state">- ALAGOAS</p>
    </div>
    <i style="z-index: 1;" class="material-icons" @click="scrollBehavior">expand_more</i>
  </div>
</template>

<script>
import { Application } from '@splinetool/runtime';
export default {
  methods: {
    scrollBehavior() {
      window.scroll({ top: window.innerHeight, behavior: "smooth" })
    }
  },
  mounted() {
    const canvas = document.getElementById('canvas3d');
    const app = new Application(canvas);
    app.load('https://prod.spline.design/w7Rslvvqr4BNvAtR/scene.splinecode');
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
  z-index: 0;
  width: 50vw;
  height: 50vw;
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;

  animation: moveUpDown 2s ease-in-out infinite;

  canvas {
    cursor: grab;

    &:active {
      cursor: grabbing;
    }
  }

}


@keyframes moveUpDown {

  0%,
  100% {
    transform: translateY(0);
    /* Inicial e estado final: sem deslocamento vertical */
  }

  50% {
    transform: translateY(-0.5rem);
    /* Estado intermediário: desloca 20px para cima */
  }
}

.title-location {
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;

  h2 {
    font-size: calc(9em + 1vw);
    letter-spacing: 10px;
    color: #f5f5f5;
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
    height: 80vw;
    width: 80vw;
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
    width: 80vw;
    height: 80vw;
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
    width: 60vw;
    height: 60vw;
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