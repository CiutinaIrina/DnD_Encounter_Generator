<script setup>
import degButton from '../components/degButton.vue'
import ICONS from '@/common/icons.js'

</script>

<template>
  <div>
    <deg-button label="Create Easy Encounter"/>
    <br>
    <deg-button label="Create Medium Encounter"/>
    <br>
    <deg-button label="Create Hard Encounter"/>
    <br>
    <deg-button label="Create BOSS Encounter"/>
    <br>
    <deg-button
      label="Create BOSS Encounter"
      :icon="ICONS.CHEVRON"
    />
  </div>
</template>

<style scoped>

</style>