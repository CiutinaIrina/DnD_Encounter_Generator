<script setup>

import degDot from '@/components/degDot.vue'
import CONSTANTS from '@/common/constants.js'

const emit = defineEmits(['select'])

const onClick = (theme) => {
  emit('select', CONSTANTS.THEMES[theme])
};

</script>

<template>
  <div
    class="deg-theme-selector"
  >
    <deg-dot
      v-for="(theme, index) in Object.keys(CONSTANTS.THEMES)"
      :key="index"
      :theme="theme"
      @click="onClick(theme)"
    />
  </div>

</template>

<style lang="scss" scoped>
@import "@/css/components/degThemeSelector.scss";
</style>
