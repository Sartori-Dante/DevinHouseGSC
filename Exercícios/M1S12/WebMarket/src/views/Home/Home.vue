<template>
  <div class="home">
    <h1>Loja</h1>
    <!-- <ul>
      <li v-for="produto of produtos" :key="produto.id">
        {{ produto.imagem }}
        {{ produto.nome }}
        {{ produto.preco }}
        {{ produto.parcela }}
      </li>
    </ul> -->

    <!-- <v-layout row wrap>
      <v-flex v-for="produto of produtos" :key="produto.id">
        <v-card variant="tonal" flat class="text-xs-center ma-3">
          <v-responsive class="pt-4">
            <v-img :width="320" :height="320" aspect-ratio="1/1" :src="produto.imagem"></v-img>
          </v-responsive>
          <v-cart-text>
            <div class="subheading">{{ produto.nome }}</div>
            <div class="grey--text">{{ produto.preco }}</div>
            <div class="grey--text">{{ produto.parcela }}</div>
          </v-cart-text>
          <v-card-actions>
            <v-btn dark color="blue">COMPRAR</v-btn>
          </v-card-actions>
        </v-card>
      </v-flex>
    </v-layout> -->

    <v-row>
        <v-col v-for="produto of produtos" :key="produto.id" cols="12" sm="6" md="4" lg="3">
         <v-card :title=produto.nome variant="tonal" flat class="text-xs-center ma-5 pa-3" width="320" height="500">
            <v-img width="320" height="320" aspect-ratio="1/1" :src="produto.imagem"></v-img>
            <!-- <v-responsive class="pt-4">
              
            </v-responsive> -->
            <v-cart-text>
              <div class="subheading font-weight-black text-h4" >Por {{ new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(produto.preco) }}</div>
              <div class="grey--text">10x de {{ new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(produto.parcela) }}</div>
            </v-cart-text>
            <v-card-actions>
              <v-btn dark color="blue">
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
      produtos: [
        // {
        //   id: 1,
        //   nome: 'Funko 01'
        // },
        // {
        //   id: 2,
        //   nome: 'Funko 02'
        // }
      ],
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
  }
}
</script>
