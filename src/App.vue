<template>
  <div style="text-align: center">
    <img alt="LDJ logo" src="./assets/logo_ldj.png" >
  <Dashboard msg="Dashboard"/>
  </div>
</template>

<script>
import Dashboard from './components/Dashboard.vue'

export default {
  name: 'App',
  components: {
    Dashboard
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: left;
  font-size: large;
  color: #2c3e50;
  margin-top: 50px;
  margin-left: 30px;
}

th, td {
  text-align: left;
  border-color: white;
  border-style: solid;
  border-width: 2px;
  background-color: white;
  width: max-content;
}

</style>
