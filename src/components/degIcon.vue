<script setup>
import { computed } from 'vue'
import ICONS from '@/common/icons.js'

const props = defineProps({
  name: {
    type: String,
    required: true,
  },
  color: {
    type: String,
    default: '#000000',
  },
})

const svgHtml = computed(() =>
  ICONS.ICON_SVGS[props.name]?.replace(/fill=['"][^'"]*['"]/g, "fill='currentColor'"),
)
</script>

<template>
  <span v-html="svgHtml" :style="{ color: props.color }" class="deg-icon-svg"></span>
</template>

<style scoped>
.deg-icon-svg {
  margin: 0.25rem;
  height: 1rem;
  width: 1rem;
  display: inline-block;
  vertical-align: middle;
  fill: currentColor;
}
</style>
