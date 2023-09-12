<template>
  <router-view/>
</template>

<style lang="less">
@import url('https://fonts.googleapis.com/css2?family=Rubik:wght@300;400&display=swap');

:root {
  margin: 0;
  padding: 0;
  font-family: 'Rubik', sans-serif;
  background-color: #FFF8F8;
  p, i, a{
    color: #2A3046;
  }
  h1,h2{
      color: #2B9747;
  }
  nav{
    background-color: #F0E7E7;
  }
}

@media (prefers-color-scheme: dark) {
  :root {
    margin: 0;
    padding: 0;
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
    nav{
    background-color: #2A272E;
    }
  }
}


</style>
