<template>
<div class="home">
<h1 class="text-center font-weight-medium my-8" >Lista de cursos</h1>
<v-container>
  <Cards> </Cards>
</v-container>
</div>

</template>

<script>
import Cards from '@/components/Vcards.vue'

  export default {
    name: 'my-home',
    components: {Cards,
    },
  }
</script>
