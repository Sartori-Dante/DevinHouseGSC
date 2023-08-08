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
      
    }
  },
  AdicionarMedicamento(nome, lab, preco) {
    if (nome == "" || laboratorio == "" || preco == 0) {
      alert("Preencha todos os dados")
      return
    }

    const novoMedicamento = {
      id: uuiddv4(),
      nome: nome,
      laboratorio: lab,
      preco: preco,
      favorito: false
    }
  }
}
</script>

<style scoped>
</style>


export default {
  components: {
    Header,
    FormularioNovoMedicamento,
    CardMedicamento
  },
  data() {
    return {
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
    FavoritarMedicamento(id) {
      // editar o medicamento e marcar como favorito
      this.listaMedicamentos = this.listaMedicamentos.map(item => {
        if(item.id == id){
          item.favorito = !item.favorito
        }
      })
    }
  }
}