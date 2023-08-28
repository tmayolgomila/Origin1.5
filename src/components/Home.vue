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
            <h1>Welcome to <span> Origin </span></h1>
            <p>A marketing website theme built with <a href="https://react.dev/" target="_blank">React</a> and carefully crafted for startups and businesses.</p>
            
            <div>
              <button>Get Started</button>
              <button>Style Guide </button>
    </div>
    <ButtonsTheme/>
  </div>
</template>
