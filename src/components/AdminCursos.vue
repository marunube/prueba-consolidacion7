<template>
  <v-container>
    <v-simple-table>
      <template v-slot:default>
        <thead>
          <tr>
            <th class="text-left">Nombres</th>
            <th class="text-left">Cupos</th>
            <th>Incritos</th>
            <th>Duracion</th>
            <th class="text-left">Costo</th>
            <th>Terminado</th>
            <th>Fecha de inicio</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="curso in cursos" :key="curso.name">
            <td>{{ curso.nombre }}</td>
            <td>{{ curso.cupos }}</td>
            <td>{{ curso.inscritos }}</td>
            <td>{{ curso.duracion }}</td>
            <td>
              <v-chip class="ma-2" color="green" text-color="white"
                >${{ curso.costo }}</v-chip
              >
            </td>
            <td>
              <v-chip
                class="ma-2"
                :color="curso.completado ? 'pink lighten-2' : 'grey'"
                text-color="white"
                >{{ curso.completado ? "Si" : "No" }}</v-chip
              >
            </td>
            <td>{{ curso.fecha_registro }}</td>
          </tr>
        </tbody>
      </template>
    </v-simple-table>
    <v-container>
      <badgets />
    </v-container>
  </v-container>
</template>

<script>
import Badgets from "./Badgets.vue";

export default {
  data() {
    return {
      cursos: [{ nombre: "lala" }],
    };
  },
  components: {
    Badgets,
  },
  mounted() {
    this.cursos = this.$store.state.cursos;
  },
};
</script>

<style>
</style>