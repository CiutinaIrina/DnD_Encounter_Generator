<script setup>

import CONSTANTS from '@/common/constants.js'
import { computed } from 'vue'

const props = defineProps({
  theme: {
    type: Object,
    default: () => {},
  },
})

const emit = defineEmits(['select'])

const onClick = () => (
  emit('select', props.theme)
);

const mainColor = computed(() => {
  return CONSTANTS.THEMES[props.theme].MAIN
});

const contrastColor = computed(() => {
  return CONSTANTS.THEMES[props.theme].CONTRAST
});

</script>

<template>
  <div
    class="deg-dot"
    :style="{
      'background-color': mainColor,
      'border': '2px solid ' + contrastColor,
    }"
    @click="onClick"
  />
</template>

<style lang="scss" scoped>
@import "@/css/components/degDot.scss";
</style>
