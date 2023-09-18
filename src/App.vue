<template>
  <Header></Header>
  <router-view/>
  <button @click="webSiteTheme">Mudar tema</button>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import Header from '@/components/Header.vue'; // @ is an alias to /src

@Options({
  components: {
    Header,
  },
})
export default class HomeView extends Vue {
  webSiteTheme(){
    const body = document.querySelector("body");
    if(body?.classList.contains("on")){
      body.classList.remove("on");
      console.log(body.classList)
    } else {
      body?.classList.add("on");
      console.log(body?.classList)
    }
  }
}
</script>

<style lang="less">
@import url('https://fonts.googleapis.com/css2?family=Rubik:wght@300;400&display=swap');


body {
  font-family: 'Rubik', sans-serif;
  background-color: #FFF8F8;
  p, i, a{
    color: #2A3046;
  }
  h1,h2{
      color: #000000;
      font-weight: 300;

  }
  nav, footer{
    background-color: #f0e7e78b;
  }
}

.on{
  font-family: 'Rubik', sans-serif;
  background-color: #1C1A1F;
  p, i, a{
    color: #C5B7B6;
    font-weight: 400;
  }
  h1,h2{
    color: #ffffff;
  }
  nav, footer{
  background-color: #2a272e73;
  }
}

</style>
