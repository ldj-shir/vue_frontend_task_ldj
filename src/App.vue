<template>
  <img alt="LDJ logo" src="./assets/logo_ldj.png" >
  <FrontEndTest msg="Dashboard"/>
</template>

<script>
import FrontEndTest from './components/FrontEndTest.vue'

export default {
  name: 'App',
  components: {
    FrontEndTest
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 50px;
}
</style>
