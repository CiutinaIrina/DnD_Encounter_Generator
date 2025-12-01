<script setup>
import { computed } from 'vue'
import ICONS from '@/common/icons.js'
import CONSTANTS from '@/common/constants.js'

const props = defineProps({
  name: {
    type: String,
    required: true,
  },
  color: {
    type: String,
    default: CONSTANTS.CONTRAST,
  },
})

const svgHtml = computed(() =>
  ICONS.ICON_SVGS[props.name]?.replace(/fill=['"][^'"]*['"]/g, "fill='color'")
)
</script>

<template>
  <span v-html="svgHtml" :style="{ color: props.color }" class="deg-icon-svg"></span>
</template>

<style lang="scss" scoped>
@import "@/css/components/degIcon.scss";
</style>