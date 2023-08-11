<template>
    <ul class="menu">
        <router-link to="/" class="item-menu">
            <li >
                <img width="50" height="50" src="https://img.icons8.com/ios-filled/50/cottage--v1.png" alt="Home" />
                <h2>Home</h2>
            </li>
        </router-link>

        <router-link to="/talentos/novo" class="item-menu">
            <li>
                <img width="50" height="50" src="https://img.icons8.com/ios-filled/50/clipboard.png" alt="Talentos" />
                <h2>Talentos</h2>
            </li>
        </router-link>

        <router-link to="/sobre" class="item-menu">
            <li>
                <img width="48" height="48" src="https://img.icons8.com/sf-regular/48/about.png" alt="Sobre" />
                <h2>Sobre</h2>
            </li>
        </router-link>
    </ul>
</template>

<style >
.menu {
    display: flex;
    justify-content: space-between;
    list-style: none;
}

.item-menu {
    display: flex;
    border: 1px solid #000;
    padding: 5px;
    width: 33%;
}

.item-menu li {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 10px;
    width: 33%;
}
</style>