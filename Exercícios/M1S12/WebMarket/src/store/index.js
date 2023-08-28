import { createStore } from "vuex";

const store = createStore({
  state() {
    return {
      message: "ESTOU FUNCIONANDO",
      cartProd: [],
    };
  },
  mutations: {
    alterarTeste(state, value) {
      state.teste = value;
    },
    addProdCart(state, prodRecebido) {
      const prodInCart = state.cartProd.find(
        (produto) => produto.id === prodRecebido.id
      );

      if (prodInCart) {
        state.cartProd = state.cartProd.map((item) => {
          if (item.id === prodRecebido.id) {
            item.quantidade = item.quantidade + 1;
          }
          return item;
        });
      } else {
        state.cartProd = [
          ...state.cartProd,
          {
            ...prodRecebido,
            quantidade: 1,
          },
        ];
      }
    },
  },
  actions: {
    alterarNome(context, value) {
      console.log(value.nome);
      console.log("entrei no alterar nome");
      console.commit("alterarTeste", value.nome);
    },
    adicionarProduto(context, value) {
      context.commit("addProdCart", value.produto);
    },
  },
});

export default store;
