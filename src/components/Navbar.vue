<script>

import { RouterLink, RouterView } from 'vue-router'

export default {
    data() {
        return {
            showNavbar: false
        }
    },
    components: {
        RouterLink,
        RouterView
    },
    methods: {
        toggleNavbar() {
            this.showNavbar = !this.showNavbar;
        },
        hiddeNavbar() {
            this.showNavbar = !this.showNavbar
        }
    }
}

</script>


<template>

    <div class="containerNavbar">

    <div class="title">
      <h1>Origin</h1>
    </div>


        <button @click="toggleNavbar" class="menuButton">
        <div v-if="showNavbar">
           <img src="../assets/icons/close.svg" alt="" width="30">
        </div>
        <div v-else>
            <img src="../assets/icons/menu.svg" alt="" width="30">
        </div>
        
    </button>

    <div v-if="showNavbar" class="navbarItemsContainer">
        <nav>
            <RouterLink class="navbarItems" @click="hiddeNavbar" to="/">Home</RouterLink>
            <br/>
            <RouterLink class="navbarItems" @click="hiddeNavbar" to="/about">About</RouterLink>
        </nav>
    </div>

    <RouterView />

    </div>

</template>

<style>
.navbarItemsContainer {
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.navbarItems{
    margin: 10px 0; 
    font-size: 42px;
    text-decoration: none;
    color: inherit;
}

.menuButton {
  position: fixed;
  top: 10px;
  right: 10px;
  background: none;
  border: none;
}

.containerNavbar {
  position: relative;
  padding: 20px;
}

.title {
  position: fixed;
  top: 15px;
  left: 20px;
}

.title h1 {
  font-size: 1.5rem;
  margin: 0;
}


</style>