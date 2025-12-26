<script setup>
import degTitleScreen from './components/degTitleScreen.vue'
</script>

<template>
  <div class="main">
    <degTitleScreen />
  </div>
</template>

<style scoped>
.main {
  display: flex;
  justify-content: center;
  align-items: center;
  background: url('@/assets/images/BlueDragonBackground.png');
  height: 100vh; /* Full viewport height */
  width: 100%;
  position: relative;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  animation: slideLeftRight 10s ease-in-out infinite;
}

@keyframes slideLeftRight {
  0% {
    background-position: left center; /* Start from the left */
  }
  50% {
    background-position: right center; /* Move to the right */
  }
  100% {
    background-position: left center; /* Return to the left */
  }
}
</style>
