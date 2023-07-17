<template>
  <v-container  class="d-flex justify-center">
    <v-btn class="grey" @click="overlay = !overlay">Agregar curso</v-btn>
    <v-overlay :value="overlay">
      <v-container >
        <v-card width="50rem" deep-purple lighten-5>
          <v-card-title>
            <h2 class="px-5 font-weight-regular">Nuevo Projecto</h2>
          </v-card-title>
        <v-card-text>
        <v-form  ref="CursoNuevo" class="px-3">
          <v-text-field label="Nombre" v-model="nombre"> Nombre </v-text-field>
          <v-text-field label="Url" v-model="url">Url</v-text-field>
          <v-text-field label="Cupos" v-model="cupos" type="number">Cupos</v-text-field>
          <v-text-field type="number" v-model="inscritos" label="Inscritos">Inscritos</v-text-field>
          <v-text-field type="number" v-model="duracion" label="duracion">Duracion</v-text-field>
          <v-text-field label="Fecha de inicio" v-model="fecha">Fecha de inicio</v-text-field>
          <v-text-field type="number" v-model="costo" label="Costo" >Costo</v-text-field>
          <!-- <v-textarea label="Descripcion" v-model="descripcion">Descripcion</v-textarea> -->
          <v-btn class="success mx-2" @click="Agregar">Agregar</v-btn> 
          <v-btn class="warning mx-2" @click="Limpiar()">Limpiar Formulario</v-btn> 
          <v-btn class="error mx-2" @click="Cancelar()">Cancelar</v-btn>
        </v-form>
      </v-card-text> 
    </v-card>
   </v-container>
  </v-overlay>
 </v-container>
</template>

<script>

export default {
  name: "add-course",
  data: () => {
    return {
      nombre:'',
      url: '',
      cupos:'',
      inscritos:'',
      duracion:'',
      costo:'',
      fecha:'',
      overlay: false,
    };
  },
  methods: {
    Agregar() {
      var nuevoCurso = {
        nombre: this.nombre,
        url: this.url,
        cupos: this.cupos,
        inscritos: this.inscritos,
        duracion: this.duracion,
        costo: this.costo,
        fecha: this.fecha
      }
      console.log(nuevoCurso)
      this.$store.commit('agregarNuevoCurso', nuevoCurso);
      console.log(this.$store.state.cursos)
      this.overlay = false;
    },
    Cancelar () {
      this.overlay= false;
    },
    Limpiar () {
      this.$refs.CursoNuevo.reset();
    },
  },
};
</script>

<style>
</style>