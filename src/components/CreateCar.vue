<template>
    <div class="container" style="margin: 10px;">
        <form>

            <table style="border-width: 2px;">
                <tbody>
                    <tr>
                        <td>Max Speed (kmH): </td>
                        <td> <input type="text" class="form-control" v-model="maxSpeedInKmH" name="maxSpeedInKmH" id="maxSpeedInKmH"  placeholder="00.00" /></td>
                    </tr>
                    <tr>
                        <td>Name: </td>
                        <td><input type="text" class="form-control" v-model="name" name="name" id="carName" placeholder="car name" /></td>
                    </tr>
                    <tr>
                        <td>Colour: </td>
                        <td><input type="text" class="form-control" v-model="colour" name="carColour" id="carColour" placeholder="paint colour" /></td>
                    </tr>
                    <tr>
                        <td>Type: </td>
                        <td>    
                            <select name="carType" id="carType" v-model="type">
                                <option value="FOUR_WHEEL">Four Wheel</option>
                                <option value="FRONT_WHEEL">Front Wheel</option>
                                <option value="REAR_WHEEL">Rear Wheel</option>
                            </select>
                        </td>
                    </tr>
                    <tr>
                        <td> </td>
                        <td><button type="button" @click='createCar()' class="btn btn-danger">Create</button></td>
                    </tr>
                </tbody>      
            </table>

        </form>
      </div>
  </template>

<script>
export default {
  name: 'CreateCar',
  data() {
    return {
      maxSpeedInKmH: '',
      name: '',
      colour: '',
      type: ''
    }
  },
  methods: {
      createCar() {
          const payload = {
              maxSpeedInKmH: this.maxSpeedInKmH,
              name: this.name,
              colour: this.colour,
              type: this.type
          }
          this.$emit('createCar', payload)
          this.clearForm();
      },
      clearForm() {
          this.maxSpeedInKmH = '';
          this.name = '';
          this.colour = '';
          this.type = '';
      }
  }
}
</script>