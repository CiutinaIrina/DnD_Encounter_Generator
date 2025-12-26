<script setup>
import THEMES from '@/common/themes.js'
import { computed } from 'vue'

const props = defineProps({
  theme: {
    type: String,
    default: '',
  },
})

const emit = defineEmits(['select'])

const onClick = () => emit('select', props.theme)

const mainColor = computed(() => {
  return THEMES[props.theme].MAIN
})

const contrastColor = computed(() => {
  return THEMES[props.theme].CONTRAST
})
</script>

<template>
  <div
    class="deg-dot"
    :style="{
      'background-color': mainColor,
      border: '2px solid ' + contrastColor,
    }"
    @click="onClick"
  />
</template>

<style lang="scss" scoped>
@import '@/css/components/degDot.scss';
</style>
