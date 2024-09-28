<template>
  <div id="app">
    <img src="./assets/logo.png">
    <Header></Header>
    <router-link to="/">Go to Homepage</router-link>
    <router-link to="/001">Go to 001</router-link>
    <router-link to="/about_me">About Me</router-link>
    <router-link to="/vue_playground">Vue PlayGround</router-link>
    <router-view/>
    <Footer></Footer>
  </div>
</template>

<script>
import Header from './components/Header'
import Footer from './components/Footer'

export default {
  name: 'App',
  components: {
    Header,
    Footer,
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
