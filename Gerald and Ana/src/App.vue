<template>
  <v-app>
    <v-app-bar app>
      <v-toolbar-title class="headline text-uppercase">
        <span>Vuetify</span>
        <span class="font-weight-light">MATERIAL DESIGN</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn
        text
        href="https://github.com/vuetifyjs/vuetify/releases/latest"
        target="_blank"
      >
        <span class="mr-2">Latest Release</span>
      </v-btn>
    </v-app-bar>
<!-- Esto es codigo viejo, lo he dejado porque este tiene una barra de navegacion. Esta fea pero si quieren verla. entonces borren  <diseño/> y vean la anterior barra de navegacion. Para volver a poner el mismo diseño, solo hace falta volver a poner la etiqueta "<diseño/>-->
    <v-content>
    <!-- Esta estiqueta "diseño" llama el codigo de diseño pagina/diseño.Vue Si borran esta etiqueta. No se vera el codigo-->
      <diseño/>
    </v-content>
  </v-app>
</template>


<script lang="ts">
import Vue from 'vue'
import diseño from './components/Diseño pagina/diseño.vue'

export default Vue.extend({
  name: 'App',
  components: {
    diseño
  },
  data: () => ({
    //
  })
})
</script>
