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
  disabled: {
    type: Boolean,
    default: false,
  },
})

const iconColor = computed(() => {
  return props.disabled ? CONSTANTS.DISABLED_CONTRAST : props.color;
});

</script>

<template>
  <span
    v-html="ICONS.ICON_SVGS[name]"
    :style="{ color: iconColor }"
    class="deg-icon-svg"
  ></span>
</template>

<style lang="scss" scoped>
@import "@/css/components/degIcon.scss";
</style>