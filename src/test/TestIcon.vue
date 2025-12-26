<script setup>
import degIcon from '../components/degIcon.vue'
import degButton from '../components/degButton.vue'
import ICONS from '@/common/icons.js'
import CONSTANTS from '@/common/themes.js'
import { ref } from 'vue'

const disabled = ref(false)

const toggleDisabled = () => {
  disabled.value = !disabled.value
}
</script>

<template>
  <deg-button label="Toggle disabled" @click="toggleDisabled" />
  <br />
  <div v-for="icon in ICONS.ICON_LIST" :key="icon">
    <h3>{{ icon }} icon</h3>
    <deg-icon :name="icon" :color="CONSTANTS.CONTRAST" :disabled="disabled" />
  </div>
</template>

<style scoped></style>
