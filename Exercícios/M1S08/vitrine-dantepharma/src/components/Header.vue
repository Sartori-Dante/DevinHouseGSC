<template>
    <header>
        <slot name="header">
            <img src="../../public/Dantepharma.png" alt="Dantepharma Logo" width="50">
            <h1>Dantepharma</h1>
        </slot>
    </header>
</template>

<script>
export default {

}
</script>

<style scoped>
header{
    display: flex;
    flex-direction: row;
    align-items: center;
}
</style>
