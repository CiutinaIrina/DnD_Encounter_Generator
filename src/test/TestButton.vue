<script setup>
import degButton from '../components/degButton.vue'
import ICONS from '@/common/icons.js'

</script>

<template>
  <div>
    <deg-button text="Create Easy Encounter"/>
    <br>
    <deg-button text="Create Medium Encounter"/>
    <br>
    <deg-button text="Create Hard Encounter"/>
    <br>
    <deg-button text="Create BOSS Encounter"/>
    <br>
    <deg-button
      text="Create BOSS Encounter"
      :icon="ICONS.CHEVRON"
    />
  </div>
</template>

<style scoped>

</style>