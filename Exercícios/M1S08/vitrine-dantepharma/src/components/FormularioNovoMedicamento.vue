<template>
    <header>
        <slot class="cadastro-med" name="cadastro-med">
            <h2>Novo Medicamento</h2>
            <div class="input-container">
                <label for="medicamento">Medicamento</label>
                <input type="text" id="medicamento" v-model="medicamento">

                <label for="nome-lab">Laboratório</label>
                <input type="text" id="nome-lab" v-model="laboratorio" >

                <label for="preco">Preço</label>
                <input type="number" id="preco" v-model="preco">

                <button @click="$emit('registrar', medicamento, laboratorio, preco)">Registrar</button>
                
            </div>
        </slot>
    </header>
</template>

<script>
export default {
    data () {
        return {
            medicamento: "",
            laboratorio: "",
            preco: 0
        }
    }
}
</script>

<style scoped>
.cadastro-med{
    display: flex;
    flex-direction: column;
    width: 300px;
    gap: 15px;
    font-weight: bold;
}

.input-container{
    display: flex;
    gap: 15px;
    font-weight: bold;
}
</style>