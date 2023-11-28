## Location Page

# Location Componente

```
<script setup>
// Importando os componentes do Swiper e os estilos necessários
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';
import 'swiper/css/effect-cards';
import './LocationSwiper.css';

// Importando módulos necessários do Swiper
import { EffectCards, Pagination } from 'swiper/modules';
</script>

<template>
  <div class="slider-locations">
    <div class="title" data-aos="fade-in">
      <h2>Conheça outros:</h2>
    </div>
    <!-- Configuração do Swiper com slides -->
    <swiper :effect="'cards'" :pagination="{ dynamicBullets: true }" :grabCursor="true" :modules="[EffectCards, Pagination]" class="mySwiper" data-aos="fade-left">
      <!-- Slide 1 -->
      <swiper-slide id="grotao">
        <div class="name">
          <h3 class="state-card">Niterói - RJ</h3>
          <h3>Quilombo do Grotão</h3>
        </div>
      </swiper-slide>
      <!-- Slide 2 -->
      <swiper-slide id="tapera">
        <div class="name">
          <h3 class="state-card">Petrópolis - RJ</h3>
          <h3>Quilombo da Tapera</h3>
        </div>
      </swiper-slide>
      <!-- Slide 3 -->
      <swiper-slide id="mimbo">
        <div class="name">
          <h3 class="state-card">Amarante - PI</h3>
          <h3>Quilombo Mimbó</h3>
        </div>
      </swiper-slide>
      <!-- Slide 4 -->
      <swiper-slide id="alcantara">
        <div class="name">
          <h3 class="state-card">Alcântara - MA</h3>
          <h3>Quilombo de Alcântara</h3>
        </div>
      </swiper-slide>
    </swiper>
  </div>
</template>

<script>
// Exportando o componente
export default {
  components: {
    Swiper,
    SwiperSlide,
  },
};
</script>

<style lang="less" scoped>
/* Estilos para o componente */
/* ... */
</style>

```

# Locations Componente

```
<template>
  <!-- Componente principal -->
  <div class="locationComp" data-aos="fade-in" data-aos-easing="linear" data-aos-duration="2000">
    <!-- Globo 3D -->
    <div class="globe" data-aos="fade-in" data-aos-easing="linear" data-aos-duration="2000">
      <canvas id="canvas3d"></canvas>
    </div>
    <!-- Título -->
    <div class="title-location" data-aos="fade-up-left" data-aos-duration="1500">
      <h2>LUGARES</h2>
    </div>
    <!-- Subtítulo -->
    <div class="subtitle">
      <p class="quilombo">PALMARES</p>
      <p class="state">- ALAGOAS</p>
    </div>
    <!-- Ícone para rolar para baixo -->
    <i style="z-index: 1;" class="material-icons" @click="scrollBehavior">expand_more</i>
  </div>
</template>

<script>
// Importando a classe Application do pacote '@splinetool/runtime'
import { Application } from '@splinetool/runtime';

export default {
  methods: {
    // Função para rolar suavemente para baixo quando o ícone é clicado
    scrollBehavior() {
      window.scroll({ top: window.innerHeight, behavior: "smooth" });
    }
  },
  mounted() {
    // Inicializando o aplicativo Spline 3D no elemento canvas
    const canvas = document.getElementById('canvas3d');
    const app = new Application(canvas);
    // Carregando o cenário Spline 3D
    app.load('https://prod.spline.design/w7Rslvvqr4BNvAtR/scene.splinecode');
  }
}
</script>
  
<style lang="less" scoped>
/* Estilos do componente */
/* ... */
</style>

```

# Map Componente

```

```

# Maps Componente

```

```

# Palmares Componente

```

```

# Spread Componente

```

```



