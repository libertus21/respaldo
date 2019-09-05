<!--Todo este codigo de aqui. Es de la pagina "inventario"-->

<template>
  <div class="about">
     <div>
     <!-- Botonones de "error y Info"-->
    <v-btn color="error">Falla</v-btn>
    <v-btn color="info">Informacion</v-btn>
         <!-- Botonones de "error y Info. Falta llamar un evento, cuando des click a esos botones, te salga un mensaje"-->

  </div>

  <!-- Esto es codigo de la tabla. Para modificarlo, deben ir a "script" y cambiar los titulos de los libros y precio, si van agregar algo mas deben estar dentro de {(contenido)}-->
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
  <!-- Esto es codigo de la tabla. Para modificarlo, deben ir a "script" y cambiar los titulos de los libros y precio, si van agregar algo mas deben estar dentro de {(contenido)}-->
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
            nombre: ' Cien años de soledad',
            precio: 237,
          },
          {
            nombre: 'Libro sin nombre',
            precio: 262,
          },
          {
            nombre: 'Libro con el nombre del libro sin nombre',
            precio: 305,
          },
          {
            nombre: 'Juan Avila salvador',
            precio: 356,
          },
          {
            nombre: 'Las aventuras de Nostres',
            precio: 375,
          },
          {
            nombre: 'El mago con la mascara de vidrio',
            precio: 392,
          },
          {
            nombre: 'El misterio de la altlantida: Ray sol',
            precio: 408,
          },
          {
            nombre: 'Mundo superado',
            precio: 452,
          },
          {
            nombre: 'La vuelta en mundo en 80 dias',
            precio: 518,
          },
        ],
      }
    },
  }
</script>
