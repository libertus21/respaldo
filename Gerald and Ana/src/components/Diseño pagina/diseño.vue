<!-- TODO esto es el codigo del diseño de la pagina web.--> 

<template>
  
  <v-app id="inspire">
    <v-navigation-drawer
      v-model="drawer"
      app
    >

      <!-- Parte donde esta el menu de navegacion-->
    <v-list dense>
        <!-- Esta parte de aqui. Corresponde cuando abres el menu y te sale los vinculos para moverse entre paginas.--> 
        <v-list-item @click="">
          <v-list-item-action>
          <!-- Esta parte pone color, y la imagen de los iconos-->
             <v-icon large color="orange darken-2">mdi-arrow-up-bold-box-outline</v-icon>

          <!-- Esta parte pone color, y la imagen de los iconos-->
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>
       <!-- Esta etiqueta ROuter-link es la que dirigue a la pagina Carro. Basicamente es un vinculo.--> 
             <router-link to="/carro">
               <a>Compra</a></router-link>
            

            </v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        </v-list dense>
   
      <!-- Parte del menu de Login en la barra de navegacion--> 
      <v-list dense>
        <v-list-item @click="">
          <v-list-item-action>
            <v-icon large color="teal darken-2">mdi-account </v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>
       
              <router-link to="/">Login</router-link> 
            

            </v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        <!-- Barra de navegacion. Seccion del "Inventario vinculo".--> 
        <v-list-item @click="">
          <v-list-item-action>
            <v-icon large color="green darken-2">mdi-contact-mail</v-icon>
          </v-list-item-action>

          <v-list-item-content>
            
            <v-list-item-title>
            
            
          |
       <router-link to="/about">Inventario</router-link>
            
        
            </v-list-item-title>
          </v-list-item-content>




          <!--<p>aqui esta algo</p>-->
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
  <div id="app">
    <div id="nav">

     <!-- Aqui se mostrara contenido dentro de la pagina
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
      |
      <router-link to="/carro">carrito</router-link>-->
               
            </router-link>           
    </div>
    <router-view/>
  </div>

   <!-- Esta parte especifica el modelo y color que tendra la barra navegadora-->
    <v-app-bar
      app
      color="indigo"
      dark
    >
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
      <v-toolbar-title>Compra y venta</v-toolbar-title>
    </v-app-bar>

    <v-content>
      <v-container
        class="fill-height"
        fluid
      >
        <v-row
          align="center"
          justify="center"
        >
          <v-col class="text-center">
            
          </v-col>
        </v-row>
      </v-container>
    </v-content>
    <v-footer
      color="indigo"
      app
    >
      <span class="white--text">&copy; 2019</span>
    </v-footer>
  </v-app>
</template>

<script>
  export default {
    props: {
      source: String,
    },
    data: () => ({
      drawer: null,
    }),
  }
</script>
