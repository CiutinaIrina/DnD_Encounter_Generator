<script setup>
import { computed } from 'vue'
import ICONS from '@/common/icons.js'
import { getCurrentTheme, getDarkenedColor } from '@/plugins/colorTheme.js'

const props = defineProps({
  name: {
    type: String,
    required: true,
  },
  color: {
    type: String,
    default: getDarkenedColor(getCurrentTheme().CONTRAST, 20),
  },
  disabled: {
    type: Boolean,
    default: false,
  },
})

const iconColor = computed(() => {
  return props.disabled ? getCurrentTheme().DISABLED_CONTRAST : props.color
})
</script>

<template>
  <span v-html="ICONS.ICON_SVGS[name]" :style="{ color: iconColor }" class="deg-icon-svg"></span>
</template>

<style lang="scss" scoped>
@import '@/css/components/degIcon.scss';
</style>
