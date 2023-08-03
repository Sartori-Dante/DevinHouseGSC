<template>
    <header>
        <slot class="cadastro-med" name="cadastro-med">
            <h2>Novo Medicamento</h2>
            <label for="nome-med">Medicamento</label>
            <input name="nome-med" type="text">
            <label for="nome-lab">Laboratório</label>
            <input name="nome-lab" type="text">
            <label for="valor">Preço</label>
            <input name="valor" type="number">
            <button type="submit">Registrar</button>
        </slot>
    </header>
</template>

<script>
export default {

}
</script>