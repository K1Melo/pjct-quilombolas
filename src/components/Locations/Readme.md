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



