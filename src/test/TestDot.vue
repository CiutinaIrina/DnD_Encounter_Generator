<script setup>
import degDot from '../components/degDot.vue'

import CONSTANTS from '@/common/themes.js'
</script>

<template>
  <div v-for="(theme, index) in Object.keys(CONSTANTS.THEMES)" :key="index">
    <p>{{ theme }}</p>
    <deg-dot :theme="theme" />
  </div>
</template>

<style scoped></style>
