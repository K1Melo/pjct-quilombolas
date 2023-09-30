<template>
  <div class="bg-container">
    <Header></Header>
    <router-view/>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import Header from '@/components/Header.vue'; // @ is an alias to /src

@Options({
  components: {
    Header,
  },
})
export default class App extends Vue {

}
</script>

<style lang="less">
@import url('https://fonts.googleapis.com/css2?family=Rubik:wght@300;400&display=swap');

//SCROLL
body::-webkit-scrollbar {
  width: 5px;
}

body::-webkit-scrollbar-track {
  background: #bdb8b8;
}

body::-webkit-scrollbar-thumb {
  background-color: rgba(44, 44, 44, 0.692);
}

.on::-webkit-scrollbar-track {
  background: #302f2f;
}

.on::-webkit-scrollbar-thumb {
  background-color: rgba(87, 87, 87, 0.692);
}

//ANIMATED BACKGROUND
.bg-container{
  min-height: 100vh;
  background-size: 600% 600%;
  // background-image: linear-gradient(60deg, #FFF8F8 ,rgb(206, 175, 175), rgba(156, 123, 123, 0.9) );
  background-image: linear-gradient(60deg, #2E0F0F -80.88%, #e0dfdf 100% );
  transition: background 1s linear;  
  animation: bgAnimatedGradient 15s infinite linear;
}

.on{
  .bg-container{
    background-image: linear-gradient(60deg, #2E0F0F -80.88%, #0f0f0f 100%);
  }
  
  // @media only screen and (max-width: 800px) {
  //   .bg-container{
  //     background-image: linear-gradient(60deg, #1f1a1a ,#1d1717 ,rgb(24, 18, 18));
  //   }
  // }
}

@keyframes bgAnimatedGradient{
  0% {
    background-position: 0 85%;
  }
  50%{
    background-position: 100% 20%;
  }
  100%{
    background-position: 0% 85%;
  }
}
  
//GENERAL STYLES
body {
  font-family: 'Rubik', sans-serif;
  // background-color: #FFF8F8;

  p, i, a{
    color: #2A3046;
    transition: all 1s;
  }

  h1,h2,h3{
    color: #000000;
    font-weight: 300;
    transition: all 1s;  
  }

  nav, footer{
    background-color: #f0e7e78b;
  }
}

.on{
  font-family: 'Rubik', sans-serif;
  // background-color: #1C1A1F;

  p, i, a{
    color: #C5B7B6;
    font-weight: 400;
  }

  h1,h2,h3{
    color: #ffffff;
  }
  
  nav, footer{
  background-color: #2a272e73;
  }
}



</style>
