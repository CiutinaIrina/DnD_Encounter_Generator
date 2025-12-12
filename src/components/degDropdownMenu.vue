<script setup>
import { ref, computed } from 'vue'

import degButton from '../components/degButton.vue'
import degPopup from '../components/degPopup.vue'
import ICONS from '@/common/icons.js'

const open = ref(false)

const emit = defineEmits(['update:modelValue'])

const props = defineProps({
  modelValue: {
    type: Object,
    default: () => {},
  },
  label: {
    type: String,
    default: '',
  },
  placeholder: {
    type: String,
    default: 'Select...',
  },
  listItems: {
    type: Array,
    default: () => [],
  },
  closeOnSelect: {
    type: Boolean,
    default: true,
  },
})

const toggleDropdown = () => {
  open.value = !open.value
}

const selectValue = (item) => {
  console.log("Selected item:", item);
  if (props.closeOnSelect) open.value = false

  emit('update:modelValue', item)
}

const displayedLabel = computed(() => {
  return props.modelValue?.label || props.placeholder
})
</script>

<template>
  <div class="deg-dropdown-menu">
    <label class="deg-dropdown-label"> {{ props.label }} </label>
    <deg-button
      ref="dropdownButton"
      :text="displayedLabel"
      :icon="ICONS.CHEVRON"
      @click="toggleDropdown"
      class="deg-dropdown-menu-button"
    />
  </div>
  <deg-popup
    class="deg-dropdown-menu-popup"
    :open="open"
    :anchor-el="$refs.dropdownButton"
    :list="listItems"
    type="list"
    width="fit-content"
    @select="selectValue"
  >
  </deg-popup>
</template>

<style lang="scss" scoped>
@import '@/css/components/degDropdownMenu.scss';
</style>
