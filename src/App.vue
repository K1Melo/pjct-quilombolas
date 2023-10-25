<template>
  <TheHeader></TheHeader>
  <router-view/>
  <!-- <TheFooter></TheFooter> -->
</template>

<script>
// @ is an alias to /src
import TheHeader from '@/components/TheHeader.vue'
// import TheFooter from './components/TheFooter.vue';

export default {
  name: 'AppVue',
  components: {
    TheHeader,
    // TheFooter
  }
}
</script>

<style>

/* FONT STYLE */
@import url('https://fonts.googleapis.com/css2?family=Rubik:wght@300;400&display=swap');


/* GENRAL STYLES */

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {

  /* FONT STYLE DEFINITION */

  font-family: 'Rubik', sans-serif;

  /* BACKGROUND AND ANIMATION - LIGTH */
  
  min-height: 100vh;
  background-size: 600% 600%;
  background-image: linear-gradient(60deg, #2E0F0F -80.88%, #e0dfdf 100% );
  animation: bgAnimatedGradient 15s infinite linear;

  /* BEAUTIFUL TRANSITIONS */

  transition: all 1s;
  
}

.dark {

  /* BACKGROUND AND ANIMATION - DARK */

  background-image: linear-gradient(60deg, #2E0F0F -80.88%, #0f0f0f 100%);

}

/* ANIMATION BACKGROUND */

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



p, i, a, svg {

  transition: all 1s;

}

/* GENERAL TITLES STYLE */

h1, h2, h3 {

  color: #000000;
  opacity: 0.8;

  transition: all 1s;

}

.dark h1, h2, h3 {

  color: #ffffff;

}

h1 {

  font-weight: 300;

}

h2, h3 {

  font-weight: 800;

}

header {

  transition: all 1s linear;

}

</style>
