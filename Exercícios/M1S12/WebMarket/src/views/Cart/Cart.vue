<template>
    <div class="cart ma-5">
        <h1>Carrinho</h1>

      <v-table class="pb-5">
        <thead>
          <tr>
            <th class="text-left">Imagem</th>
            <th class="text-left">Nome</th>
            <th class="text-left">Quantidade</th>
            <th class="text-left">Preço</th>
            <th class="text-left">Subtotal</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in this.$store.state.cartProd" :key="item.id">
            <td><img :src="item.imagem" width="30" /></td>
            <td>{{ item.nome }}</td>
            <td>{{ item.quantidade }}</td>
            <td>{{ item.preco }}</td>
            <td>
              {{
                  new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(
                      item.quantidade * item.preco
                  )
              }}
            </td>
          </tr>
        </tbody>
      </v-table>
      <v-btn class="pt-pb-4" dark color="blue" to="/pay">
        <v-icon class="" size="x-large" >mdi-credit-card</v-icon>
        COMPRAR
      </v-btn>
    </div>
</template>

<script>
</script>