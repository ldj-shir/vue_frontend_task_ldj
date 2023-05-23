<template>
    <div class="hello">
      <MainHeader />
      <h1 style="margin-bottom: 40px;">{{ msg }}</h1>
      <div class="container-fluid" style="background-color: azure; border-color: black; border-style: solid; border-radius: 15px; border-width: 2px; padding: 15px;">
        <div style="text-align: left">
        <details style="margin: 5px; background-color: white; border-radius: 10px; padding: 10px;" >
          <summary>Show All Cars</summary>
          <AllCars :cars = "cars"/>
        </details>

        <details style="margin: 5px; background-color: white; border-radius: 10px; padding: 10px;" >
          <summary>Search/Edit Car</summary>
          <FindCar @findCar="callGetCarById($event)" @editedCar="$event => getAllCars()" :carSearchResult = "carSearchResult" />
        </details>
        
        <details style="margin: 5px; background-color: white; border-radius: 10px; padding: 10px;" >
          <summary>Add Car</summary>
          <CreateCar @createCar="callCreateCar($event)" />
        </details>

        </div>        
      </div>

    </div>
  </template>

<script>
import MainHeader from './MainHeader.vue'
import AllCars from './AllCars.vue'
import CreateCar from './CreateCar.vue'
import FindCar from './FindCar.vue'
import { createCar, getAllCars, getCarById} from '../ApiConnector'

export default {
  name: 'FrontEndTest',
  components: {
    MainHeader,
    AllCars,
    FindCar,
    CreateCar
  },
  data() {
    return {
      cars: [],
      ships: [],
      carSearchResult: []
    }
  },
  props: {
    msg: String
  },
  methods: {
    getAllCars(){
      getAllCars().then( response => {
        console.log('allCarsResponse:::', response)
        this.cars = response
      });
    },
    callCreateCar(data){
      console.log('createCarSent:::', data)
      createCar(data).then(response => {
        console.log('createCarResponse:::',response);
        this.getAllCars();
      })
    },
    callGetCarById(data){
      getCarById(data).then( response => {
        console.log('getCarByIdResponse:::', response);
        this.carSearchResult = response;
      })
    },
    callEditedCars(data){
      this.getAllCars();
      getCarById(data.id);
    }
  }, 
  mounted () {
    this.getAllCars();
    // this.getAllShips();
  }
}
</script>