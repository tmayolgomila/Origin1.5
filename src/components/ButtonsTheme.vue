<template>
<div class="buttonThemes">
    <button class="buttonClassic" @click="classicMode">Classic</button>
    <button class="buttonDark" @click="darkMode">Dark</button>
    <button class="buttonEarth" @click="earthMode">Earth</button>
    <button class="buttonOcean" @click="oceanMode">Ocean</button>

</div>

</template>
<script>
export default{
    data(){
        return{

        }
    },
    methods:{
        classicMode(){
            this.classicTheme.value = true
            this.darkTheme.value = false
            this.earthTheme.value = false
            this.oceanTheme.value = false
        },
        darkMode(){
            this.darkTheme.value = true
            this.classicTheme.value = false
            this.earthTheme.value = false
            this.oceanTheme.value = false
        },
        earthMode(){
            this.earthTheme.value = true
            this.classicTheme.value = false
            this.darkTheme.value = false
            this.oceanTheme.value = false
        },
        oceanMode(){
            this.oceanTheme.value = true
            this.classicTheme.value = false
            this.darkTheme.value = false
            this.earthTheme.value = false
        }
    }
}
</script>
<style>
.buttonThemes{
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 2ch;
}

.buttonThemes button{
    margin: 0.2em;
    border-radius: 50%;
    height: 60px;
    width: 60px;
    border: 2px solid white;
}
.buttonDark{
    color: white;
    background: black;

}
.buttonEarth{
    background: #f12711;
    background: -webkit-linear-gradient(to right, #f5af19, #f12711); 
    background: linear-gradient(to right, #f5af19, #f12711); 
    color: white;
}
.buttonOcean{
    background: #1A2980;
    background: -webkit-linear-gradient(to right, #26D0CE, #1A2980);
    background: linear-gradient(to right, #26D0CE, #1A2980);
    color: white;
}
</style>