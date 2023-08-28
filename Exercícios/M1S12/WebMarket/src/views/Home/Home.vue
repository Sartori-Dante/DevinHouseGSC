<template>
  <div class="home">
    <h1>Loja {{ globalMsg }}</h1>
    <v-row>
        <v-col v-for="produto of produtos" :key="produto.id" cols="12" sm="6" md="4" lg="3">
         <v-card :title=produto.nome variant="tonal" flat class="text-xs-center ma-5 pa-3" width="320" height="500">
            <v-img width="320" height="320" aspect-ratio="1/1" :src="produto.imagem"></v-img>
            <v-cart-text>
              <div class="subheading font-weight-black text-h4" >Por
                {{ new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(produto.preco) }}</div>
              <div class="grey--text">10x de
                {{ new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(produto.parcela) }}</div>
            </v-cart-text>
            <v-card-actions>
              <v-btn dark color="blue" @click="() => this.$store.dispatch('adicionarProduto' , {produto})">
                <v-icon class="" size="x-large" >mdi-cart</v-icon>
                COMPRAR
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>

  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'app',
  data () {
    return {
      produtos: [],
      globalMsg: this.$store.state.message

    }
  },
  async created() {
    try {
      const res = await axios.get('http://localhost:3000/produtos');

      this.produtos = res.data;
    } catch (e) {
      console.error(e);
      alert("Falha ao recuperar os produtos da database")
    }
  },
  computed:{
    prodRestantes() {
      return this.produtos.filler((produto) => {
        const itemExiste = this.$store.state.cartProd.find((item) => item.id === produto.id)
        if (itemExiste) return false
        return true
      })
    }
  }
}
</script>
