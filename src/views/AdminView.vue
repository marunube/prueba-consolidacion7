<template>
  <div class="admin">
    <h1 class="text-center font-weight-medium my-8">Administracion</h1>
    <v-container class="d-flex justify-center">
      <Agregador/>
    </v-container>
    <v-container>
      <Administrador></Administrador>
    </v-container> 

  </div>
</template>

<script>
import Administrador from '@/components/AdminCursos.vue'
import Agregador from '@/components/AgregarCurso.vue'

  export default {
  name: 'admin-page',
  components: {
    Administrador,
    Agregador,
  } ,
    data: () => ({
    }),
  }
</script>


