<template>
    <div>
        <h2>Título: {{titulo}}</h2>
        <span>Duração: {{horas}}</span>
        <span>Vagas: {{nVagas}}</span>
        <span>Nota Geral: {{nota}}</span>
    </div>
</template>

<script>
export default {
    props: ['titulo', 'horas', 'nVagas', 'nota']
}
</script>