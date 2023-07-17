<template>
  <v-container>
    <v-row justify="space-around">
      <v-card v-for="(curso, index) in cursos " :key='index' class="mx-5 my-5" width="18.75rem">
        <v-img contain width="320px" height="18.75rem" :src="curso.img" > </v-img>
            <v-spacer></v-spacer>
            <v-card-title >{{curso.nombre}}</v-card-title>
        <v-card-text>
          <div class="font-weight-bold ml-8 mb-2">
            Informacion
          </div>
          <v-timeline align-top dense>
            <v-timeline-item color="purple" small>
              <div>
                <div class="font-weight-normal">
                  <strong>Costo: ${{ curso.costo }}</strong> 
                </div>
              </div>
            </v-timeline-item>
            <v-timeline-item color="green" small>
              <div>
                <div class="font-weight-normal"> 
                <strong>Cupos: {{ curso.cupos }}</strong>
              </div>
              </div>
              </v-timeline-item>
              <v-timeline-item color="purple" small>
              <div>
              <strong>Fecha de registro: {{ curso.fecha_registro }}</strong>
              </div>
              </v-timeline-item>
              <v-timeline-item  color="green" small>
              <div>
              <strong>{{ curso.descripcion }}</strong>
              </div>
              </v-timeline-item>
          </v-timeline>
        </v-card-text>
      </v-card>
    </v-row>
  </v-container>
</template>


<script>
export default
{name:'my-cards',
data () {
  return{
    cursos: [
      {nombre:'hola',}
    ]
  }
},
mounted() {
  console.log(this.$store.cursos),
  this.cursos = this.$store.state.cursos
}

}
</script>

<style>

</style>