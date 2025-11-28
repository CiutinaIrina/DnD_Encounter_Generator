<script setup>
import { computed } from 'vue'

const props = defineProps({
	height: {
		type: String,
		required: true,
	},
	width: {
		type: String,
		required: true,
	},
  content: {
    type: String,
    default: "",
  }
})

const boxStyling = computed(() => ({
  "--height": props.height + "rem",
  "--width": props.width + "rem",
}))

</script>

<template>
  <div class="deg-box" :style="boxStyling">
    {{ content }}
  </div>
</template>

<style scoped>
.deg-box {
  height: var(--height);
  width: var(--width);
  border: 0.5px solid rgb(233, 218, 119);
  background-color: rgba(56, 110, 234, 0.3);
  padding: 0.25rem;
  border-radius: 6px;
}
</style>