<script>
import ButtonsTheme from './ButtonsTheme.vue';
export default{
  data(){
    return{

    }

  },
  components: {
      ButtonsTheme
    }
}
</script>

<template>
  <div>
  <div id='containerHome'>
            <h1 id='containerHomeTitle'>Welcome to <span id='homeText'> Origin </span></h1>
            <p id='principalParagraph'>A marketing website theme built with <a id='reactLink' href="https://react.dev/" target="_blank">React</a> and carefully crafted for startups and businesses.</p>
            
            <div id='homeContainerButtons'>
              <button id='getStartedButton'>Get Started</button>
              <button id='styleGuideButton'>Style Guide </button>
            </div>
    
            <ButtonsHome currentStyle={currentStyle} handleStyleChange={handleStyleChange} />

            <div id='foto1Container'>
            <img id='foto1' src={foto1}/>
            </div>
            
          </div>
    <ButtonsTheme/>
  </div>
</template>
<style>

</style>
