<template>
  <Header></Header>
  <router-view/>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import Header from '@/components/Header.vue'; // @ is an alias to /src

@Options({
  components: {
    Header,
  },
})
export default class HomeView extends Vue {}
</script>

<style lang="less">
@import url('https://fonts.googleapis.com/css2?family=Rubik:wght@300;400&display=swap');

:root {
  font-family: 'Rubik', sans-serif;
  background-color: #FFF8F8;
  p, i, a{
    color: #2A3046;
  }
  h1,h2{
      color: #2B9747;
  }
  nav, footer{
    background-color: #F0E7E7;
  }
}

@media (prefers-color-scheme: dark) {
  :root {
    font-family: 'Rubik', sans-serif;
    background-color: #1C1A1F;
    p, i, a{
      color: #C5B7B6;
      font-weight: 400;
    }
    h1,h2{
      color: #7ABCB4;
      font-weight: 300;
    }
    nav, footer{
    background-color: #2A272E;
    }
  }
}

</style>
