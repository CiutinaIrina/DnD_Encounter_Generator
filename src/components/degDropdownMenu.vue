<script setup>
import { ref, computed } from 'vue'

import degButton from '../components/degButton.vue'
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
})

const toggleDropdown = () => {
  open.value = !open.value
}

const selectValue = (item) => {
  open.value = false
  emit('update:modelValue', item)
}

const displayedLabel = computed(() => {
  return props.modelValue?.level || props.placeholder
})

</script>

<template>
  <div class="deg-dropdown-menu">
    <label class="deg-dropdown-label"> {{ props.label }} </label>
    <deg-button
      :label="displayedLabel"
      :icon="ICONS.CHEVRON"
      @click="toggleDropdown"
      class="deg-dropdown-menu-button"
    />
    <div class="deg-dropdown-menu-bottom-container">
      <div class="deg-dropdown-menu-spacer"> {{ props.label }} </div>
      <div class="deg-dropdown-menu-list" v-if="open">
        <div
          v-for="item in listItems"
          :key="item.level"
          @click="selectValue(item)"
        >
          {{ item.level }}
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "@/css/components/degDropdownMenu.scss";
</style>
