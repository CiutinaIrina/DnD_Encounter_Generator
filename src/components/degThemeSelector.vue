<script setup>
import degDot from '@/components/degDot.vue'
import THEMES from '@/common/themes.js'

const emit = defineEmits(['select'])

const onClick = (theme) => {
  emit('select', THEMES[theme])
}
</script>

<template>
  <div class="deg-theme-selector">
    <deg-dot
      v-for="(theme, index) in Object.keys(THEMES)"
      :key="index"
      :theme="theme"
      @click="onClick(theme)"
    />
  </div>
</template>

<style lang="scss" scoped>
@import '@/css/components/degThemeSelector.scss';
</style>
