<template>
  <h1>Conteúdo principal</h1>
  <p>Este é o conteúdo principal da página.</p>
  <p id="bem_vindo_usuario"></p>
  <p>Nome: <span id="nome"></span> </p>
  <p>Username: <span id="username"></span> </p>
  <p>Qtd de seguidores: <span id="qtd_seguidores"></span> </p>
  <p>Qtd de publicações: <span id="qtd_publicacoes"></span> </p>

  <v-form ref="form" @submit.prevent="handleSubmit">
    <v-text-field
    label="Nome"
    variant="outlined"
    :rules="[!!v || 'Nome é obrigatório']"
    ></v-text-field>

    <v-text-field
      label="Email"
      variant="outlined"
      :rules="[!!v || 'E-mail é obrigatório']"
      ></v-text-field>

  </v-form>

   <v-snackbar
      v-model="snackbar"
      :timeout="timeout"
    >
      {{ text }}

      <template v-slot:actions>
        <v-btn
          color="red"
          variant="text"
          @click="snackbar = false"
        >
          Fechar
        </v-btn>
      </template>
    </v-snackbar>

 
</template>

<script>
export default {
  data() {
    return {
      snackbar: false,
      timeout: 2000,
      text: "",
      nome: "",
      email: "",
    }
  },
  methods: {
    async handleSubmit() {
      const { valid } = await this.$refs.form.validate()
 
      if 
      
      
      
      
      
      
      
      
      (valid) {
        this.text = 'Usuário cadastrado com sucesso!'
        this.snackbar = true
      }
    }
  }
}
</script>
