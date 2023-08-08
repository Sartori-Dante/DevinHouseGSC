<template>
    <header>
        <slot class="cadastro-med" name="cadastro-med">
            <h2>Novo Medicamento</h2>
            <div class="input-container">
                 <label for="nome-med">Medicamento</label>
                <input name="nome-med" type="text"
                >
                <label for="nome-lab">Laboratório</label>
                <input name="nome-lab" type="text">

                <label for="valor">Preço</label>
                <input name="valor" type="number">

                <button type="submit">Registrar</button>
                <!-- <button @click="$emit('cadastrar', medicamento, laboratorio, preco)">Cadastrar</button> -->
            </div>
        </slot>
    </header>
</template>

<script>
export default {

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