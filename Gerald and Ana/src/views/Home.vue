<!--Aqui es la vista Router del Login. No tiene nada, porque use un componente que es "<Login/>" para llamar todo el codigo que esta adentro de Diseño pagina/login.vue-->

<template>
  <login/>
</template>


<!-- Esta parte de aqui. Sirve para importar el login.vue de Diseño pagina. Lo pueden copiar y meter en otro archivo.vue en "views" para crear otra vista o componente. Lo importante es:"import (nombre-componente) from './direccion_del_archivo' y con eso ya pueden importar cualquier cosa de Components o alguna otra carpeta-->
<script lang="ts">
import Vue from 'vue'
import login from '../components/Diseño pagina/login.vue'

export default Vue.extend({
  components: {
   login
  }
})
</script>
'../components/login.vue'