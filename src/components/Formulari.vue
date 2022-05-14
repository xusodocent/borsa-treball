<template>
  <div class="container mt-3">
    <h2>Afegir oferta nova</h2>
    <form @submit.prevent="enviarFormulari">
      <div class="mb-3 mt-3">
        <label for="email">Contacte:</label>
        <input
          type="email"
          class="form-control"
          id="email"
          placeholder="Enter email"
          name="email"
          v-model="oferta.contacte"
        />
      </div>
      <div class="mb-3">
        <label for="pwd">Empresa:</label>
        <input
          type="input"
          class="form-control"
          id="empresa"
          placeholder="Nom de l'empresa"
          name="empresa"
          v-model="oferta.empresa"
        />
      </div>
      <br />
      <div class="mb-3">
        <label for="" class="form-check-label">Perfils requerits</label
        ><br /><br />
        <input type="checkbox" value="ASIX" v-model="oferta.perfils" /> ASIX |
        <input type="checkbox" value="DAM" v-model="oferta.perfils" /> DAM |
        <input type="checkbox" value="DAW" v-model="oferta.perfils" /> DAW |
        <input type="checkbox" value="SMX" v-model="oferta.perfils" /> SMX |
        <input type="checkbox" value="Ciber" v-model="oferta.perfils" /> Ciber |
        <input type="checkbox" value="FPB" v-model="oferta.perfils" /> FPB
      </div>

      <div class="mb-3">
        <label for="exampleFormControlTextarea1" class="form-label"
          >Introduir dades de l'oferta</label
        >
        <textarea
          class="form-control"
          id="exampleFormControlTextarea1"
          rows="15"
          v-model="oferta.caracteristiques"
        ></textarea>
      </div>
      <div v-if="correcte" class="alert alert-success" role="alert">
          Oferta registrada correctament!
        </div>
      <button type="submit" class="btn btn-primary">Submit</button>
    </form>
  </div>
</template>

<script>
export default {
  name: "Formulari",
  data() {
    return {
      procesant: false,
      correcte: false,
      error: false,
      oferta: {
        id: "088",
        empresa: "",
        perfils: [],
        caracteristiques: "",
        contacte: "",
        estat: "Activa",
      },
    };
  },
  methods: {
    enviarFormulari() {
      this.procesant = true;
      this.resetEstat();

      // Comprovant errors
      if (
        this.empresaInvalid ||
        this.contacteInvalid ||
        this.caracteristiquesInvalid
      ) {
        this.error = true;
        return;
      }

      console.log("Funciona" + this.oferta.caracteristiques);
      this.$emit("afegir-oferta", this.oferta);

      this.error = false;
      this.correcte = true;
      this.procesant = false;

      // Restablecemos el valor de la variables
      this.oferta = {
        id: "088",
        empresa: "",
        perfils: [],
        caracteristiques: "",
        contacte: "",
        estat: "Activa",
      };
    },
    resetEstat() {
      this.correcte = false;
      this.error = false;
    },
  },
  computed: {
    empresaInvalid() {
      return this.oferta.empresa.length < 1;
    },
    contacteInvalid() {
      return this.oferta.contacte.length < 1;
    },
    caracteristiquesInvalid() {
      return this.oferta.caracteristiques.length < 1;
    },
  },
};
</script>

<style scoped>
form {
  margin-bottom: 2rem;
}
</style>