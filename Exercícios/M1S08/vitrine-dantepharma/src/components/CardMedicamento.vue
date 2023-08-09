<template>
    <div class="card">
        <img :width="150" src="../../public/MedicamentoPlaceholder.png" alt="Imagem do Medicamento">
        <span>Nome: {{ nome }}</span>
        <span>Laboratório: {{ laboratorio }}</span>
        <span>Preço: {{"R$ " + preco + ",00"}}</span>
        <span v-if="favorito">Favorito</span>
        <button @click="$emit('favoritar', id)">Favoritar</button>
    </div>
</template>

<script>
export default {
    props: ['nome', 'laboratorio', 'preco', 'favorito', 'id']
}

</script>

<style scoped>
.card {
  display: flex;
  flex-direction: column;
  width: calc(100%/4 - 2em);
  margin: 1em;
  background-color: #C4C4C4;
}
</style>