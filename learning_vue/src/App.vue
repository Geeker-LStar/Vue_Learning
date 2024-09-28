<script setup>
import HelloWorld from './components/HelloWorld.vue'
import Header from './components/Header.vue'
import Footer from './components/Footer.vue';

import { ref } from 'vue'

const router_class = ref('bar')
</script>

<template>
  <div>
    <Header></Header>
    <!-- <a href="https://vitejs.dev" target="_blank">
      <img src="/vite.svg" class="logo" alt="Vite logo" />
    </a>
    <a href="https://vuejs.org/" target="_blank">
      <img src="./assets/vue.svg" class="logo vue" alt="Vue logo" />
    </a> -->
    <router-link to="/" :class="router_class">Homepage</router-link>
    <router-link to="/001" :class="router_class">Go to 001</router-link>
    <router-link to="/about" :class="router_class">About Me</router-link>
    <router-link to="/playground" :class="router_class">PlayGround</router-link>
    <router-link to="/todo" :class="router_class">Todo List</router-link>
    <router-view></router-view>
  </div>
  <!-- <HelloWorld msg="Vite + Vue" /> -->
  <Footer></Footer>
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}

.bar {
  margin: 10px
}
</style>
