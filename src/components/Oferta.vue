<template>
    <div>
         <h1>Dades oferta ref: {{ id }}</h1>
         <br>
         <ul>
             <li>{{ oferta.empresa }}</li>
             <li>{{ oferta.contacte }}</li>
             <li>{{ oferta.estat }}</li>
             <li>{{ oferta.perfils }}</li>
         </ul>
         <div>
             {{ oferta.caracteristiques }}
         </div>
    </div>  
</template>

<script>
export default {
  name: "Oferta",

  data() {
    return {
        id:"",
     oferta: {
        id: "088",
        empresa: "",
        perfils: [],
        caracteristiques: "",
        contacte: "",
        estat: "Activa",
      }
    };
  },

  methods: {
    async getOferta() {
      try {
        const response = await fetch(`http://localhost:3000/ofertes/${this.id}`);
        this.oferta = await response.json();
        console.log(this.oferta);
      } catch (error) {
        console.error(error);
      }
    },
  },
  mounted(){
    this.id = this.$route.params.id;
    console.log("carregant oferta..." + this.id);
    this.getOferta();
    
    //this.getOfertes();
  }
};
</script>

<style scoped>
</style>