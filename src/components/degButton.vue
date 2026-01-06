<script setup>
import { computed } from 'vue'
import degIcon from '../components/degIcon.vue'
import { getCurrentTheme } from '@/plugins/colorTheme.js'

const props = defineProps({
	text: {
		type: String,
		required: true,
	},
  icon: {
    type: String,
    default: null,
  },
  type: {
    type: String,
    default: 'default',
  },
})

const componentProps = computed(() => {
  return props;
})

const iconColor = computed(() => {
  if (props.type === 'affirmative') return getCurrentTheme().SUCCESS;
  if (props.type === 'negative') return getCurrentTheme().ERROR;
  if (props.type === 'disabled') return getCurrentTheme().DISABLED_CONTRAST;
  return getCurrentTheme().CONTRAST;
});

</script>

<template>
  <button class="deg-button">
      {{ componentProps.text }}
      <deg-icon v-if="componentProps.icon" :name="componentProps.icon" :color="iconColor" />
  </button>
</template>

<style lang="scss" scoped>
@import "@/css/components/degButton.scss";
</style>
