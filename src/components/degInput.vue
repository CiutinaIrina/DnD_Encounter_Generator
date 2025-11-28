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
  if (props.validatorCallback(inputValue.value)) {
    emit("update:modelValue", inputValue.value);
  } else {
    inputValue.value = props.modelValue;
    
  }
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

<style scoped>
.deg-input {
  .deg-input-label {
    color:rgb(233, 218, 119);
    margin-right: 0.25rem;
  }

  .deg-input-field {
    background-color: rgba(56, 110, 234, 0.3);
    outline: none;
    border: none;
    box-shadow: inset 0 0 0 0.5px rgb(233, 218, 119);
    border-radius: 6px;
    height: 1.5rem;
    padding: 0.25rem;
  }
}
</style>