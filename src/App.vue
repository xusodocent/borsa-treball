<template>
  <div class="container">
    <br />

    <Menu></Menu>
    <router-view @afegir-oferta="afegirOferta" @eliminar-oferta="eliminarOferta"></router-view>
  </div>
</template>

<script>
//import HelloWorld from './components/HelloWorld.vue'
import Menu from "./components/Menu.vue";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

export default {
  name: "App",
  components: {
    Menu,
  },
  methods: {
    afegirOferta(oferta) {
      console.log("rebent l'event d'afegir oferta en la app principal");
      this.postOferta(oferta);
    },
    eliminarOferta(oferta){
      let confirmaBorrar = confirm("Estàs segur que vols esborrar l'oferta amb referència " + oferta.id + "?");
      if (confirmaBorrar){
        this.deleteOferta(oferta);
      }
      
    },
    async postOferta(oferta) {
      try {
        const response = await fetch(
          "http://localhost:3000/ofertes",
          {
            method: "POST",
            body: JSON.stringify(oferta),
            headers: { "Content-type": "application/json; charset=UTF-8" },
          }
        );

        const ofertaActualizada = await response.json();
        console.log(ofertaActualizada.caracteristiques);
        /*
        this.usuarios = this.usuarios.map((u) =>
          u.id === usuario.id ? usuarioActualizado : u
        );
        */
      } catch (error) {
        console.error(error);
      }
    },
    async deleteOferta(oferta) {
      
  try {
    await fetch(`http://localhost:3000/ofertes/${oferta.id}`, {
      method: "DELETE"
    });
    
    //this.usuarios= this.usuarios.filter(u => u.id !== usuario.id);
  } catch (error) {
    console.error(error);
  }
}
  },
  mounted() {
    console.log("app carregada");
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
