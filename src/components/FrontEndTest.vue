<template>
    <div class="hello">
      <Header />
      <h1>{{ msg }}</h1>
      <div class="container mrgnbtm">
            <div class="row">
              <!-- <div class="col-md-8">
                  <CreateCar @createCar="carCreate($event)" />
              </div> -->
              <!-- <div class="col-md-4">
                  <DisplayBoard :numberOfCars="numberOfCars" @getAllCars="getAllCars()" />
              </div> -->
            </div>
      </div>
      <!-- <div class="row mrgnbtm">
          <Users v-if="cars.length > 0" :cars="cars" />
      </div> -->
    </div>
  </template>

  <!-- <template>
    <div class="hello">
      <h1>{{ msg }}</h1>
      <h3>Installed CLI Plugins</h3>
      <ul>
        <li><a href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-babel" target="_blank" rel="noopener">babel</a></li>
        <li><a href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-eslint" target="_blank" rel="noopener">eslint</a></li>
      </ul>
    </div>
  </template> -->

<script>
export default {
  name: 'FrontEndTest',
  props: {
    msg: String
  }
}
</script>