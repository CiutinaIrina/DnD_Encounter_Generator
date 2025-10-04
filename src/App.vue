<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header>
    <div>
      <nav>
        <RouterLink class="router-link" to="/test">Test</RouterLink>
        <RouterLink class="router-link" to="/">Main</RouterLink>
      </nav>
    </div>
  </header>

  <RouterView />
</template>

<style scoped>
body {
  height: 100%;
  width: 100%;
}

nav {
  background: url('@/assets/images/BORDER3.bmp');
  background-size: cover;
  background-position: center;
  justify-content: space-evenly;
  display: flex;
  
  .router-link {
    color: rgb(55, 34, 8);
    text-decoration: none;
  }
}

</style>
