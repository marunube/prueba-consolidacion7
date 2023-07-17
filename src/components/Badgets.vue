<template>
  <v-container class="d-flex flex-column">
    <v-chip color="purple" class="my-1" label outlined>Alumnos permitidos: {{ suma }}</v-chip>
    <v-chip color="blue" class="my-1" label outlined>Alumnos inscritos</v-chip>
    <v-chip color="red" class="my-1" label outlined>Cupos</v-chip>
    <v-chip color="pink" class="my-1" label outlined>Cursos Terminados</v-chip>
    <v-chip color="green" class="my-1" label outlined>Cursos Activos</v-chip>
    <v-chip color="orange" class="my-1" label outlined>Cursos total</v-chip>
  </v-container>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "my-badgets",
  data() {
    return {
      suma: 0
    };
  },
  mounted() {
    this.suma = this.GetSuma();

  },
  methods: {
    ...mapGetters(["GetSuma"]),
  },
};
</script>

<style>
</style>