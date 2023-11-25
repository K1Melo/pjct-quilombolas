## Documentation of home components

# HomeComponent File

```
<template>
  <div class="homeComp m-0 p-0">
    <!-- Seção de texto -->
    <div class="text-home">
      <div class="title" data-aos="fade-left" data-aos-duration="1500">
        <h2>Quilombolas</h2>
      </div>
      <div class="sub-title">
        <h3>Povos Originários</h3>
        <h3>do <span class="brasil">Brasil</span></h3>
      </div>
      <div class="text">
        <p>Entre na jornada onde adentramos suas origens, localizações principais, produções, e mais importante, sua cultura....</p>
      </div>
      <button class="down-button btn" @click="scrollBehavior">
        <p class="m-0">Saiba Mais</p>
        <i class="material-symbols-outlined">expand_more</i>
      </button>
    </div>

    <!-- Imagem à direita -->
    <div class="img-home">
      <img src="../../assets/mulher-quilombola.svg" alt="Mulher Quilombola">
    </div>

    <!-- Círculos de fundo -->
    <div class="circulos">
      <div class="circulo2">
        <svg xmlns="http://www.w3.org/2000/svg" width="147" height="147" viewBox="0 0 147 147" fill="none">
          <circle cx="73.5" cy="73.5" r="73.5" fill="#4A2F2F"/>
        </svg>
      </div>
      <div class="circulo1"></div>
      <div class="circulo3">
        <svg xmlns="http://www.w3.org/2000/svg" width="250" height="250" viewBox="0 0 147 147" fill="none">
          <circle cx="73.5" cy="73.5" r="73.5" fill="#4A2F2F"/>
        </svg> 
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomeComponent',
  methods: {
    // Método para rolar a página suavemente ao clicar no botão
    scrollBehavior() {
      window.scroll({top: window.innerHeight, behavior: "smooth"})
    }
  }
}
</script>

<style scoped lang="less">
/* Estilos específicos para o componente */
.homeComp {
  // Estilos para o contêiner principal
}

.text-home {
  // Estilos para a seção de texto
}

.img-home {
  // Estilos para a seção de imagem
}

.circulos {
  // Estilos para os círculos de fundo
}

/* Restante do estilo, incluindo animações e responsividade, foi mantido conforme fornecido */
</style>


```

# SwiperJs File

```
<script setup>
// Importa os componentes necessários do Swiper e os módulos adicionais
import { Swiper, SwiperSlide } from "swiper/vue";
import { Pagination, Navigation } from "swiper/modules";

// Importa os estilos necessários do Swiper
import 'swiper/css/navigation';
import "swiper/css";
import "swiper/css/pagination";

// Importa estilos personalizados
import "./Swiper.css";
</script>

<template>
  <div class="sliderView m-0 p-0">
    <!-- Swiper Component com slides -->
    <Swiper :modules="[Pagination, Navigation]" :grabCursor="true" :lazy="true" :navigation="true" :pagination="true" class="slider">
      <!-- Slide 1 -->
      <SwiperSlide class="slides slides-above" data-aos-duration="1500">
        <div class="img-slide">
          <img src="../../assets/slide1-img.svg" loading="lazy" alt="Mulher Quilombola Com pedaço de madeira">
        </div>
        <div class="text-slide" data-aos="fade-left">
          <div class="title">
            <h2>Como eles surgiram</h2>
          </div>
          <div class="text">
            <p>Originados da resistência africana contra a escravidão...</p>
          </div>
        </div>
      </SwiperSlide>

      <!-- Slide 2 -->
      <SwiperSlide class="slides slides-above">
        <div class="img-slide2">
          <img src="../../assets/slide2-img.svg" loading="lazy" alt="Grupo de quilombolas"> 
        </div>
        <div class="text-slide" data-aos="fade-left">
          <div class="title">
            <h2>Quem são eles</h2>
          </div>
          <div class="text">
            <p>Quilombolas, são pessoas autodeclaradas e que têm identificação com a cultura e tradições dessa comunidade...</p>
          </div>
        </div>
      </SwiperSlide>

      <!-- Slide 3 - Utiliza um componente personalizado SliderItem -->
      <SwiperSlide class="slides">
        <SliderItem></SliderItem>
      </SwiperSlide>
    </Swiper>
  </div>
</template>

<script>
import SliderItem from './SliderItem.vue';

export default {
  data() {
    return {
      index: 0
    }
  },
  components: {
    SliderItem
  },
}
</script>

<style scoped lang="less">
/* Estilos específicos para o componente SliderView */
.sliderView {
  // Estilos para o contêiner do carrossel
}

.slider {
  // Estilos para o carrossel
  .slides {
    // Estilos para os slides
  }
}

.img-slide {
  // Estilos para a imagem do Slide 1
}

.img-slide2 {
  // Estilos para a imagem do Slide 2
}

.text-slide {
  // Estilos para a área de texto dos slides
  .title {
    // Estilos para o título
  }

  .text {
    // Estilos para o texto
  }
}

.circulos {
  // Estilos para os círculos de fundo
}

@keyframes moveUpDown {
  // Animação para movimento dos círculos
}

.dark {
  // Estilos para o modo escuro
}

@media only screen and (max-width: 1025px) {
  // Estilos para telas menores que 1025px
}

@media only screen and (max-width: 1000px) {
  // Estilos para telas menores que 1000px
}

@media only screen and (max-width: 800px) {
  // Estilos para telas menores que 800px
}

@media screen and (max-width: 600px) {
  // Estilos para telas menores que 600px
}

@media screen and (max-width: 300px) {
  // Estilos para telas menores que 300px
}
</style>


```


# SliderItem File

```
<template>
  <!-- Componente que exibe um conjunto de bolas representando diferentes categorias de dificuldades -->
  <div class="item-three">
    <!-- Título do componente -->
    <div class="title">
      <h1 class="title_3">Dificuldades - Gerais</h1>
    </div>
    <!-- Bolas representando diferentes categorias de dificuldades -->
    <div class="dificuldades">
      <!-- Primeira categoria - Infraestrutura -->
      <div class="one ball" @click="toFirst">
        <h2 class="dif_1 unselectable">Infra<br>estrutu<br>ra</h2>
      </div>
      <!-- Segunda categoria - Educação -->
      <div class="two ball" @click="toSecond">
        <h2 class="dif_2 unselectable">Educa<br>ção</h2>
      </div>
      <!-- Terceira categoria - Saúde -->
      <div class="three ball" @click="toThird">
        <h2 class="dif_1 unselectable">Saúde</h2>
      </div>
      <!-- Quarta categoria - Terras -->
      <div class="four ball" @click="toFourth">
        <h2 class="dif_2 unselectable">Terras</h2>
      </div>
    </div>
  </div>
</template>

<script>
// Exporta o componente Vue
export default {
  name: 'SlideItemThree', // Nome do componente
  methods: {
    // Método para rolar até a primeira categoria
    toFirst() {
      // Obtém os elementos dos acordeões relacionados
      const firstAcord = document.getElementById("first");
      const secondAcord = document.getElementById("second");
      const thirdAcord = document.getElementById("third");
      const fourthAcord = document.getElementById("fourth");
      
      // Remove o atributo 'checked' de todos os acordeões
      firstAcord.removeAttribute('checked');
      secondAcord.removeAttribute('checked');
      thirdAcord.removeAttribute('checked');
      fourthAcord.removeAttribute('checked');
      
      // Adiciona o atributo 'checked' ao primeiro acordeão
      firstAcord.setAttribute('checked', 'checked');
      
      // Rola a página até a altura de duas janelas visíveis
      window.scroll({top: window.innerHeight*2, behavior: "smooth"});
    },
    // Métodos semelhantes para as outras categorias
    toSecond() {
      // ...
    },
    toThird() {
      // ...
    },
    toFourth() {
      // ...
    }
  }
}
</script>

<style scoped>
/* Estilos específicos para o componente */
.item-three {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 90%;
  z-index: 1;
}

.title_3 {
  font-family: 'Rubik', sans-serif;
  font-size: 5vw;
  font-weight: 700;
  text-transform: uppercase;
  color: #000000;
}

.dificuldades {
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin-top: 5rem;
  width: 100%;
  height: fit-content;
}

/* Estilos para as bolas representando as categorias de dificuldades */
.dif_2 {
  // ...
}

.dif_2:hover {
  // ...
}

.dif_1 {
  // ...
}

.dif_1:hover {
  // ...
}

/* Outros estilos do componente */
.unselectable {
  // ...
}

.dark .title_3 {
  color: #fff;
}

@media only screen and (max-width: 1250px) {
  // ...
}

@media only screen and (max-width: 1000px) {
  // ...
}

@media only screen and (max-width: 600px) {
  // ...
}

@media only screen and (max-width: 300px) {
  // ...
}
</style>

```

# DifficultiesComponent File

```
<template>
  <!-- Componente que exibe uma lista de dificuldades em um formato de acordeão -->
  <div class="dif">
    <!-- Título do componente -->
    <div class="title">
      <h2>Dificuldades</h2>
    </div>
    <!-- Lista de acordeões representando diferentes categorias de dificuldades -->
    <ul class="accordion" data-aos="fade-left" data-aos-duration="500">
      <!-- Primeiro acordeão - Infraestrutura -->
      <li>
        <input type="radio" name="accordion" id="first">
        <label for="first">Infraestrutura</label>
        <div class="content">
          <p>Como base para todos os outros problemas,
            a infraestrutura se entende como os
            serviços fundamentais para o desenvolvimento do povo
            em questões físicas de acessibilidade.</p>
        </div>
      </li>
      <!-- Segundo acordeão - Educação -->
      <li>
        <input type="radio" name="accordion" id="second">
        <label for="second">Educação</label>
        <div class="content">
          <p>Um dos principais desafios sociais enfrentado pelos
            quilombolas, já que a maioria das estruturas educacionais
            apresenta falta de docentes qualificados para a formação
            de uma boa grade curricular.</p>
        </div>
      </li>
      <!-- Terceiro acordeão - Saúde -->
      <li>
        <input type="radio" name="accordion" id="third">
        <label for="third">Saúde</label>
        <div class="content">
          <p>Assim como na educação, quando falamos dos quilombolas é muito
            importante falar da saúde, por vários fatores, tanto a sua localidade
            desprivilegiada, quanto fatores raciais e acesso a estruturas que deviam
            ter por direito.</p>
        </div>
      </li>
      <!-- Quarto acordeão - Terras -->
      <li style="border: none;">
        <input type="radio" name="accordion" id="fourth">
        <label for="fourth">Terras</label>
        <div class="content">
          <p>Juntamente com os projetos governamentais, a pavimentação se torna um grande prejuízo para os
            quilombolas, já que ela muitas vezes força a saída dos moradores do seu lugar de origem. Relacionado
            a isso nós temos a demarcação de terras, que, da mesma forma, tira moradores de suas terras de
            origem.</p>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
// Exporta o componente Vue
export default {
  name: 'DifficultiesComp', // Nome do componente
}
</script>

<style lang="less" scoped>
/* Estilos específicos para o componente */
.dif {
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  height: 100vh;
  width: 100%;
}

.title {
  width: 40%;
  height: 50vh;

  h2 {
    display: flex;
    justify-content: center;
    position: absolute;
    align-items: center;
    font-size: calc(4em + 1vw);
    padding-right: 50%;
    width: 100%;
    height: 25%;
    background-color: #100404d7;
  }
}

/* Estilos para a lista de acordeões */
.accordion {
  z-index: 1;
  margin: 60px auto;
  width: calc(40vw + 10vh);
  background-color: #555;
  border-radius: 20px;
  overflow: hidden;
  box-shadow: 6px 6px 10px 10px rgba(0, 0, 0, 0.15);

  li {
    list-style: none;
    width: 100%;
    padding: 30px;
    border-bottom: #555 1px solid;
    background-color: #F0DBDB;
    opacity: 0.88;

    label {
      display: flex;
      align-items: center;

      padding: 10px;
      margin: 0;
      font-size: 18px;
      font-weight: 500;
      cursor: pointer;
    }

    label::before {
      content: '+';
      margin-right: 10px;
      font-size: 24px;
    }

    input[type="radio"] {
      display: none;
    }
  }

  .content {
    color: #555;
    padding: 0 10px;
    line-height: 26px;
    max-height: 0;
    overflow: hidden;
    transition: max-height 1s ease-in-out, padding 1s ease-in-out;
  }

  input[type="radio"]:checked+label+.content {
    max-height: 300px;
    padding: 10px 10px 20px;
  }

  input[type="radio"]:checked+label::before {
    content: '-';
  }
}

/* Estilos para o modo escuro */
.dark {
  .title {
    h2 {
      background-color: #4c2626d7;
    }
  }

  .accordion {
    box-shadow: 6px 6px 10px 5px rgba(255, 255, 255, 0.15);
  }
}

/* Estilos para resoluções de tela específicas */
@media screen and (max-height: 800px) {
  /* ... Estilos específicos para telas com altura máxima de 800px ... */
}

@media screen and (max-width: 1000px) {
  /* ... Estilos específicos para telas com largura máxima de 1000px ... */
}

@media screen and (max-width: 600px) {
  /* ... Estilos específicos para telas com largura máxima de 600px ... */
}

@media screen and (max-width: 300px) {
  /* ... Estilos específicos para telas com largura máxima de 300px ... */
}
</style>


```