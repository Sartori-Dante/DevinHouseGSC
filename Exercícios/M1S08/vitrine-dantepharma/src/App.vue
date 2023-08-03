<template>
  <Header>

  </Header>
  
  <FormularioNovoMedicamento>

  </FormularioNovoMedicamento>

  <main>
    <div ></div>
  </main>
</template>

<script>
import Header from './components/Header.vue';
import FormularioNovoMedicamento from './components/FormularioNovoMedicamento.vue'
export default {
  components: {
    Header,
    FormularioNovoMedicamento
  },
  data(){
    return{
      ListaMedicamentos: [

      ]
    }
  }
}
</script>

<style scoped>
</style>
