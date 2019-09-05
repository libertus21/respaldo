<!-- Esto es un componente. Tiene el codigo de  "Carro.Vue" pero lo pueden borrar. Este esta para agregar otro componente y llamarlo a la pagina. Modificalo como ustedes quieran y hasta cambiale el nombre. Pero especificen que hace-->

<template>
  <template>
    <section>
        <productos></productos>
        <carro></carro>
    </section>
</template>
<script>
    import Productos from './components/Productos.vue';
    import Carro from './components/Carro.vue';
    export default {
        components: {Productos, Carro}
    }
</script>
