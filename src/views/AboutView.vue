<template>
  <div class="about">
    <Header></Header>
    <h1>This is an about page</h1>
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
export default class HomeView extends Vue {}
</script>
