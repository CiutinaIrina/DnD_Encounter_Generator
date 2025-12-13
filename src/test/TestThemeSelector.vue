<script setup>
import degThemeSelector from '../components/degThemeSelector.vue'
import degButton from '@/components/degButton.vue'

import { changeColorTheme } from '@/plugins/colorTheme.js'

const onSelect = (theme) => {
  console.log('Selected theme:', theme);
  changeColorTheme(theme)
};

</script>

<template>
  <div>
    <deg-theme-selector @select="onSelect"/>
    <br>
    <deg-button text="Sample Button" icon="info"/>
    <deg-button text="Affirmative Button" icon="save"/>
    <deg-button text="Negative Button" icon="delete"/>
    <deg-button text="Disabled Button" icon="filter"/>
  </div>
</template>
