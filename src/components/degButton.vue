<script setup>
import { computed } from 'vue'
import degIcon from '../components/degIcon.vue'

const props = defineProps({
	text: {
		type: String,
		required: true,
	},
  icon: {
    type: String,
    default: null,
  },
})

const componentProps = computed(() => {
  return props;
})

</script>

<template>
  <button class="deg-button">
      {{ componentProps.text }}
      <deg-icon v-if="componentProps.icon" :name="componentProps.icon" />
  </button>
</template>

<style lang="scss" scoped>
@import "@/css/components/degButton.scss";
</style>