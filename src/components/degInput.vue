<script setup>
import { ref, computed } from 'vue'

const props = defineProps({
	modelValue: {
		type: [String, Number],
		default: "",
	},
  validatorCallback: {
    type: Function,
    default: () => {},
  },
  label: {
    type: String,
    default: "",
  },
})

const emit = defineEmits(["update:modelValue"])

const inputValue = ref(props.modelValue);

const componentProps = computed(() => {
  return props;
})

const onInput = () => {
  emit("update:modelValue", inputValue.value);
}
</script>

<template>
  <div class="deg-input">
      <span class="deg-input-label"> {{ componentProps.label }} </span>
      <input
        class="deg-input-field"
        v-model="inputValue"
        @keydown="onKeydown"
        @input="onInput"
      />
  </div>
</template>

<style lang="scss" scoped>
@import "@/css/components/degInput.scss";
</style>