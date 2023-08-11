<template>
    <h1 class="title">Cadastro de Novos Talentos</h1>

    <div class="form">
        <label for="name">Nome</label>
        <input id="name" v-model="name"/>

        <label for="email">E-mail</label>
        <input id="email" v-model="email"/>

        <label for="data">Data de Nascimento</label>
        <input id="data" type="date" v-model="bday"/>

        <label for="phone">Telefone</label>
        <input id="phone" v-model="phone"/>

        <label for="area">Área de Interesse</label>
        <select id="area" v-model="area">
            <option value="frontend">Frontend</option>
            <option value="backend">Backend</option>
            <option value="fullstack">Fullstack</option>
        </select>

        <label for="nivel">Nível</label>
        <select id="nivel" v-model="nivel">
            <option value="junior">Júnior</option>
            <option value="pleno">Pleno</option>
            <option value="senior">Sênior</option>    
        </select>


        <p>Selecione suas habilidades</p>
        <div class="options" v-if="area === 'frontend' || area === 'fullstack'">
            <label><input type="checkbox" v-model="skills" value="HTML"/>HTML</label>
            <label><input type="checkbox" v-model="skills" value="CSS"/>CSS</label>
            <label><input type="checkbox" v-model="skills" value="JS"/>JS</label>
            <label><input type="checkbox" v-model="skills" value="VUE"/>VUE</label>
        </div>
               
        <div class="options" v-if="area === 'backend' || area === 'fullstack'">
            <label><input type="checkbox" v-model="skills" value="NODE"/>NODE</label>
            <label><input type="checkbox" v-model="skills" value="PHP"/>PHP</label>
            <label><input type="checkbox" v-model="skills" value="LARAVEL"/>LARAVEL</label>
            <label><input type="checkbox" v-model="skills" value="JAVA"/>JAVA</label>
        </div>

        <label for="carta">Carta de Apresentação</label>
        <textarea id="carta" cols="30" rows="10" v-model="carta"></textarea>
    </div>
</template>

<script>
export default {
    data (){
        return {
            name: '',
            email: '',
            bday: '',
            phone: '',
            area: '',
            nivel:'',
            skills: [],
            carta: ''

        }
    },
    methods: {
        mostrarValores(){
            console.log(this.skills);
        }
    },
    watch: {
        area(newValue, oldValue) {
            if(newValue !== oldValue) {
                this.skills = []
            }
        }
    }
}
</script>

<style>
.title {
    font-size: 32px;
    font-weight: bold;
    color: #999;
    text-align: center;
}

.form{
    display: flex;
    flex-direction: column;
    width: 300px;
    justify-content: center;
}

.options{
    display: flex;
    flex-direction: column;
    width: 300px;
    justify-content: center;
}

</style>