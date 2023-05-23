<template>
    <div class="container" style="margin: 10px;">
        <table style="border-width: 1px; background-color: #96D4D4;">
            <thead>
            <tr>
                <th>Car Id</th>
                <th>Name</th>
                <th>Max Speed in KmH</th>
                <th>Colour</th>
                <th>Type</th>
            </tr>
            </thead>
            <tbody>
              <tr v-for="item in cars" :key="item.id">
                  <td>{{ item.id }}</td>
                  <td>{{ item.name }}</td>
                  <td>{{ item.maxSpeedInKmH }}</td>
                  <td>{{ item.colour }}</td>
                  <td>{{ item.type }}</td>
              </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
    export default {
        name: 'AllCars',
        props: ['cars']
     }
</script>

th, td {
    border-color: #96D4D4;
  }