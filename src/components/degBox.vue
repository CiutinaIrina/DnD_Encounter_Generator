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

<style lang="scss" scoped>
@import "@/css/components/degBox.scss";
</style>