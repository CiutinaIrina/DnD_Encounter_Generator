<script setup>

import degTitleScreen from './components/degTitleScreen.vue'

</script>

<template>
  <div class="main">
    <degTitleScreen/>
  </div>

</template>

<style scoped>
.main {
  height: 100vh;
  width: 100%;
  display: flex;          
  justify-content: center;   
  align-items: center;        
  background: url('@/assets/images/BlueDragonBackground.png');
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
}

</style>
