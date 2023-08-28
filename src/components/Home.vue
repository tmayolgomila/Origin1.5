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
              <button id='getStartedButton'>Get Started ></button>
              <button id='styleGuideButton'>Style Guide </button>
            </div>

            <div id='foto1Container'>
            <img id='foto1' src='../assets/img/img1.jpg' width="340"/>
            </div>
            
          </div>
    <ButtonsTheme/>
  </div>
</template>
<style>
#containerHome{
  display: flex;
  flex-direction: column;
  margin-top: 20px;
}
#containerHomeTitle{
  font-size: 44px;
}
#principalParagraph{
  max-width: 340px;
  margin: 1em;
}
#homeContainerButtons{
  display:flex ;
  justify-content : space-around;
}
#homeContainerButtons button{
  width: 150px;
  height: 50px;
  border-radius: 9px;
  border: none;
}
#getStartedButton{
  background:black;
  color: white;
}
#styleGuideButton {
  background:none;
  color:white;
}
#foto1Container{
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
}
#foto1{
  max-width: 100%;
  height: auto;
  border-radius: 9px;
}
</style>
