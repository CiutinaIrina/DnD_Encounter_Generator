<script setup>
import { computed } from 'vue'

const props = defineProps({
	text: {
		type: String,
		required: true,
	},
})

const componentProps = computed(() => {
  return props;
})

</script>

<template>
  <button class="deg-button">
      {{ componentProps.text }}
  </button>
</template>

<style scoped>
.deg-button {
  height: 2rem;
  font-size: 1rem;
  margin: 0.25rem;
  border: 0.5px solid rgba(245, 245, 245, 0.5);
  border-radius: 6px;
  background-color: rgba(0, 0, 0, 0.3);

  &:hover {
    background-color: rgba(0, 0, 0, 0.2);
  }

  &:active {
    background-color: rgba(0, 0, 0, 0.4);
  }
}
</style>