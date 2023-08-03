<template>
  <div>
    <!-- <h1>Subject: {{ name }}</h1>
    <p>Id Number: {{ id }}</p>
    <p>Curent Energy Balance: {{ balance }}</p>
    <p>New Energy Balance: {{ balance + balance/5 }}</p>

    <h2>Consumption Factor Calculator</h2>
    <input type="number" placeholder="set energy usage in Kw/h" v-model="energyUsage">
    <input type="number" placeholder="set time of surge in seconds" v-model="timeSurge">
    <button @click="calculate()">Calculate</button> -->
    <!-- tb funciona >>> v-on:click -->
    <!-- <p>Consumption Average: {{ consumption }} ECA</p> -->

    <h1>Lista de Cursos</h1>
    <Card 
      :titulo="listaCursos[0].titulo"
      :horas="listaCursos=[0].horas"
      :nVagas="listaCursos=[0].nVagas"
      :notas="listaCursos=[0].nota"
    />
  </div>
</template>

<script>
import Card from './components/Card.vue';
export default {
  components: {
    Card
  },
  data() {
    return {
      listaCursos: [
        {
          titulo: "HTML e CSS",
          horas: "30",
          nVagas: 40,
          nota: 9.13
        },
        {
          titulo: "PHP",
          horas: 20,
          nVagas: 40,
          nota: 8.19
        },
        {
          titulo: "VUE.JS",
          horas: 50,
          nVagas: 20,
          nota: 7.43
        },
      ]
    }
  }
}

// export default {
//   data(){
//     return{
//       name: "Dante_Mcleod",
//       id: 238794,
//       balance: 100,
//       consumption: "",
//       energyUsage: 0,
//       timeSurge: 0

//     }
//   },
//   methods: {
//     calculate(){
//       if(this.energyUsage == 0 || this.timeSurge == 0){
//         alert("Pleas fill both fields")
//         return
//       }

//       this.consumption = (this.energyUsage/this.timeSurge)
//     }
//   }
// }
</script>

<style scoped>

</style>
