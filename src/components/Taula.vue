<template>
  <div id="taula-ofertes">
    <table class="table">
      <thead>
        <tr>
          <th>Ref</th>
          <th>Empresa</th>
          <th>Contacte</th>
          <th>Estat</th>
          <th>Perfils</th>
          <th>Veure</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="oferta in ofertes" :key="oferta.id">
          <td>{{ oferta.id }}</td>
          <td>{{ oferta.empresa }}</td>
          <td>{{ oferta.contacte }}</td>
          <td>{{ oferta.estat }}</td>
          <td>{{ oferta.perfils }}</td>
          <td><router-link :to="{ name: 'Oferta', params: { id: oferta.id }}">Veure</router-link></td>
          <td>
              <button class="btn btn-danger" @click="$emit('eliminar-oferta', oferta)">🗑️ Eliminar</button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: "Taula",

  data() {
    return {
      ofertes: [],
    };
  },
  methods: {
    async getOfertes() {
      try {
        const response = await fetch("http://localhost:3000/ofertes");
        this.ofertes = await response.json();
        console.log(this.ofertes);
      } catch (error) {
        console.error(error);
      }
    },
  },
  mounted(){
    console.log("carregant ofertes...");
    this.getOfertes();
  }
};
</script>

<style scoped>
</style>