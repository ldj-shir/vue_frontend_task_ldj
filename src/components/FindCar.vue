<template>
    <div class="container" style="margin: 10px;">
        <form>
            <table>
                <tbody>
                    <tr>
                        <td>Input Car ID: </td>
                        <td><input type="text" class="form-control" v-model="id" name="carID" id="carID"  placeholder="00" /></td>
                        <td> <button type="button" @click='findCar()' class="btn btn-primary">Search</button></td>
                    </tr>
                </tbody>
            </table>

            <table style="border-width: 2px;" v-show="carSearchResult.id != null && this.id != null">
                <tbody >
                    <tr>
                        <td>ID: </td>
                        <td> <label v-text="carSearchResult.id"></label> </td>
                    </tr>
                    <tr>
                        <td>Name: </td>
                        <td> <label v-show="this.editing == false" v-text="carSearchResult.name"></label>
                             <input v-show="this.editing == true" type="text" class="form-control" v-model="name" name="carName" id="carName"/> </td>
                    </tr>
                    <tr>
                        <td>Max Speed (kmH): </td>
                        <td> <label v-show="this.editing == false" v-text="carSearchResult.maxSpeedInKmH"></label>
                             <input v-show="this.editing == true" type="text" class="form-control" v-model="maxSpeedInKmH" name="maxSpeedInKmH" id="maxSpeedInKmH"/> </td>
                    </tr>
                    <tr>
                        <td>Colour: </td>
                        <td> <label v-show="this.editing == false" v-text="carSearchResult.colour"></label>
                             <input v-show="this.editing == true" type="text" class="form-control" v-model="colour" name="carColour" id="carColour"/> </td>
                    </tr>
                    <tr>
                        <td>Type: </td>
                        <td> <label v-show="this.editing == false" v-text="carSearchResult.type"></label> 
                            <select name="carType" id="carType" v-model="type" v-show="this.editing == true">
                                <option value="FOUR_WHEEL">Four Wheel</option>
                                <option value="FRONT_WHEEL">Front Wheel</option>
                                <option value="REAR_WHEEL">Rear Wheel</option>
                            </select>
                        </td>
                    </tr>
                    <tr>
                        <td> </td>
                        <td> <button v-show="this.editing == false" type="button" @click='callDeleteCar()' class="btn btn-danger">Delete</button>
                             <button v-show="this.editing == true" type="button" @click='toggleEditing()' class="btn btn-danger">Cancel</button>    </td>
                        <td> <button v-show="this.editing == false" type="button" @click='toggleEditing()' 
                                class="btn btn-danger" style="padding-left: 12px; padding-right: 12px;">Edit</button>
                             <button v-show="this.editing == true" type="button" @click='callEditCar()' class="btn btn-danger">Save</button>        </td>
                    </tr>
                </tbody>
            </table>

        </form>
      </div>
  </template>

<script>
import {editCar, deleteCar } from '../ApiConnector'

export default {
  name: 'FindCar',
  props: ['carSearchResult'],
  data() {
    return {
      id: '',
      maxSpeedInKmH: '',
      name: '',
      colour: '',
      type: '',
      editing: false
    }
  },
  methods: {
    toggleEditing(){
        this.editing = !this.editing;

        if(this.editing){
            this.maxSpeedInKmH = this.carSearchResult.maxSpeedInKmH,
            this.name = this.carSearchResult.name,
            this.colour = this.carSearchResult.colour,
            this.type = this.carSearchResult.type
        }
    },

    findCar() {
          const payload = {
              id: this.id
          }
          this.$emit('findCar', payload);
    },

    clearForm() {
          this.id = '';
    },

    callEditCar(){
        const data = {
            id: this.id,
            maxSpeedInKmH: this.maxSpeedInKmH,
            name: this.name,
            colour: this.colour,
            type: this.type
        } 
        editCar(data).then(response => {
            console.log('editCarResponse:::', response);
      });
        this.$emit('editedCar', data);
        this.toggleEditing();
    },

    callDeleteCar(){
      deleteCar(this.id).then(response => {
        console.log('deleteCarResponse:::', response);
      });
      this.$emit('deletedCar', this.id);
      this.clearForm();
      this.toggleEditing();
    }
  }
}
</script>