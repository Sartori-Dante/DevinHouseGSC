<template>
  <Header />
  <FormularioNovoMedicamento @registrar="AdicionarMedicamento"/>
  <div class="=container">
    <CardMedicamento
      v-for="medicamento in listaMedicamentos"
      :key="medicamento.id"
      @favoritar="FavoritarMedicamento"
      :nome="medicamento.nome"
      :laboratorio="medicamento.laboratorio"
      :preco="medicamento.preco"
      :id="medicamento.id"
    />
  </div>
</template>

<script>
import {v4 as uuidv4} from 'uuid';
import Header from './components/Header.vue';
import FormularioNovoMedicamento from './components/FormularioNovoMedicamento.vue'
import CardMedicamento from './components/CardMedicamento.vue';

export default {
  components: {
    Header,
    FormularioNovoMedicamento,
    CardMedicamento
  },
  data(){
    return{
      listaMedicamentos: []
    }
  },
  methods: {
    AdicionarMedicamento(nome, laboratorio, preco) {
      if (nome == "" || laboratorio == "" || preco == 0) {
        alert("Preencha todos os dados")
        return
      }

      const novoMedicamento = {
        id: uuidv4(),
        nome: nome,
        laboratorio: laboratorio,
        preco: preco,
        favorito: false
      }

      this.listaMedicamentos.push(novoMedicamento)
    },
    FavoritarMedicamento (id) {
      this.listaMedicamentos = this.listaMedicamentos.map(item => {
        if(item.idd == id){
          item.favorito = !item.favorito
        }
      })
    }
  }
  
}
</script>

<style scoped>
.container {
  display: flex;
  flex-wrap: wrap;
  widows: 100vw;
  padding: 1em;
}
</style>