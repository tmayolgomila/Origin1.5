<script setup>

import Navbar from '../src/components/Navbar.vue'

</script>

<template >
<div v-if="this.classicTheme.value == true" id="appMain1">

    <Navbar />

</div>
<div v-if="this.darkTheme.value == true" id="appMain2">

    <Navbar />

</div>
<div v-if="this.earthTheme.value == true" id="appMain3">

<Navbar />

</div>
<div v-if="this.oceanTheme.value == true" id="appMain4">

<Navbar />

</div>
<div v-else  id="appMain1">

<Navbar />

</div>
</template>

<style scoped>
#appMain1{
    background: white;
    height: 100vh;
}
#appMain2{
    background: black;
    height: 100vh;
    color:white;
}
#appMain3{
    background: #f12711;
    background: -webkit-linear-gradient(to right, #f5af19, #f12711); 
    background: linear-gradient(to right, #f5af19, #f12711); 
    height: 100vh;
    color:white;
}
#appMain4{
    background: #1A2980;
    background: -webkit-linear-gradient(to right, #26D0CE, #1A2980);
    background: linear-gradient(to right, #26D0CE, #1A2980);
    height: 100vh;
    color:white;
}
</style>
