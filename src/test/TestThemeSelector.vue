<script setup>
import degThemeSelector from '../components/degThemeSelector.vue'
import degButton from '@/components/degButton.vue'

import { changeColorTheme } from '@/plugins/colorTheme.js'

const onSelect = (theme) => {
  console.log('Selected theme:', theme)
  changeColorTheme(theme)
}
</script>

<template>
  <div>
    <deg-theme-selector @select="onSelect" />
    <br />
    <deg-button text="Sample Button" icon="info" />
    <deg-button text="Affirmative Button" icon="save" type="affirmative" />
    <deg-button text="Negative Button" icon="delete" type="negative" />
    <deg-button text="Disabled Button" icon="filter" type="disabled" />
  </div>
</template>
