<template>
  <div class="about">
    <h1>This is an about page</h1>
     <div>
     <!-- Botonones de "error y Info"-->
    <v-btn color="error">Falla</v-btn>
    <v-btn color="info">Informacion</v-btn>
  </div>
  <v-simple-table>
    <thead>
      <tr>
        <th class="text-left">Nombre</th>
        <th class="text-left">Precio</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="item in desserts" :key="item.name">
        <td>{{ item.nombre }}</td>
        <td>{{ item.precio }}</td>
      </tr>
    </tbody>
  </v-simple-table>

  </div>
</template>

<script>
  export default {
    data () {
      return {
        desserts: [
          {
            nombre: 'Orgullo y Prejucio',
            precio: 15,
          },
          {
            nombre: 'Ice cream sandwich',
            precio: 237,
          },
          {
            nombre: 'Eclair',
            precio: 262,
          },
          {
            nombre: 'Cupcake',
            precio: 305,
          },
          {
            nombre: 'Gingerbread',
            precio: 356,
          },
          {
            nombre: 'Jelly bean',
            precio: 375,
          },
          {
            nombre: 'Lollipop',
            precio: 392,
          },
          {
            nombre: 'Honeycomb',
            precio: 408,
          },
          {
            nombre: 'Donut',
            precio: 452,
          },
          {
            nombre: 'KitKat',
            precio: 518,
          },
        ],
      }
    },
  }
</script>
