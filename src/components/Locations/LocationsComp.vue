

<template>
  <div class="locationComp" data-aos="fade-in" data-aos-easing="linear" data-aos-duration="2000">
    <!-- <dotlottie-player src="https://lottie.host/839939c7-2444-4b8d-bb0e-a26a902f01a1/PR7fWX0l8y.json"
      background="transparent" speed="1" loop autoplay></dotlottie-player> -->
    <!-- <vue-particles
            id="tsparticles"
            :particlesInit="particlesInit"
            :particlesLoaded="particlesLoaded"
            url="http://foo.bar/particles.json"
        /> -->
    <vue-particles id="tsparticles" :particlesInit="particlesInit" :particlesLoaded="particlesLoaded" :options="{
      fullScreen: {
        enable: true,
        zIndex: 0
      },
      fpsLimit: 120,
      interactivity: {
        events: {
          onClick: {
            enable: true,
            mode: 'repulse'
          },
          onHover: {
            enable: true,
            mode: 'repulse'
          },
          resize: true
        },
        modes: {
          bubble: {
            distance: 150,
            duration: 2,
            opacity: 0.4,
            size: 40
          },
          push: {
            quantity: 4
          },
          repulse: {
            distance: 200,
            duration: 0.4
          }
        }
      },
      particles: {
        color: {
          value: '#ffffff'
        },
        links: {
          color: '#ffffff',
          distance: 150,
          enable: true,
          opacity: 0.5,
          width: 1
        },
        move: {
          direction: 'none',
          enable: true,
          outMode: 'bounce',
          random: false,
          speed: 2,
          straight: false
        },
        number: {
          density: {
            enable: true,
            area: 800
          },
          value: 5
        },
        opacity: {
          value: 0.1
        },
        shape: {
          type: 'circle'
        },
        size: {
          random: true,
          value: 5
        }
      },
      detectRetina: true
    }" />

    <div class="globe">

      <canvas id="canvas3d"></canvas>
    </div>
    <!-- <iframe src='https://my.spline.design/photorealearth-febb64decf3986698e88eb49a8d9d84d/' frameborder='0' width='100%' height='100%' class="globe"></iframe>     -->
    <!-- <iframe src='https://my.spline.design/rrworld-9a8de1d9186e704256f6873e3b347394/' frameborder='0' class="globe"></iframe> -->
    <!-- <img src="../../assets/globe.png" class="globe" alt=""> -->
    <div class="title-location" data-aos="fade-up-left" data-aos-duration="1500">
      <h2>LUGARES</h2>
    </div>
    <div class="subtitle">
      <p class="quilombo">PALMARES</p>
      <p class="state">- ALAGOAS</p>
    </div>
    <i style="z-index: 1;" class="material-icons" @click="scrollBehavior">expand_more</i>
  </div>
</template>

<script setup>

//import { loadFull } from "tsparticles"; // if you are going to use `loadFull`, install the "tsparticles" package too.
import { loadSlim } from "tsparticles-slim"; // if you are going to use `loadSlim`, install the "tsparticles-slim" package too.

const particlesInit = async engine => {
  //await loadFull(engine);
  await loadSlim(engine);
};

const particlesLoaded = async container => {
  console.log("Particles container loaded", container);
};




</script>

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
    app.load('https://prod.spline.design/SH6eg2AKQ9wL4OYL/scene.splinecode');
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

  width: 50vw;
  height: 50vw;

  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;

  animation: moveUpDown 2s ease-in-out infinite;
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
    height: 50vw;
    width: 50vw;
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
    width: 50vw;
    height: 50vw;
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