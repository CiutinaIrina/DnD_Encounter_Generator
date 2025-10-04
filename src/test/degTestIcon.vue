<script setup>
import degIcon from '../components/degIcon.vue'
import ICONS from '@/common/icons.js'
</script>

<template>
  <div
    v-for="icon in ICONS.ICON_LIST"
    :key="icon"
  >
    <h3>{{ icon }} icon</h3>
    <deg-icon :name="icon"/>
  </div>
</template>

<style scoped>
</style>