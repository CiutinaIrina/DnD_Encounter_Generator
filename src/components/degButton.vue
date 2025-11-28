<script setup>
import { computed } from 'vue'
import degIcon from '../components/degIcon.vue'

const props = defineProps({
	label: {
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
      {{ componentProps.label }}
      <deg-icon v-if="componentProps.icon" :name="componentProps.icon" />
  </button>
</template>

<style scoped>
.deg-button {
  height: 2rem;
  font-size: 1rem;
  margin: 0.25rem;
  border: 0.5px solid rgb(233, 218, 119);
  border-radius: 6px;
  background-color: rgba(56, 110, 234, 0.3);;

  &:hover {
    background-color: rgba(56, 110, 234, 0.2);;
  }

  &:active {
    background-color: rgba(56, 110, 234, 0.4);;
  }
}
</style>