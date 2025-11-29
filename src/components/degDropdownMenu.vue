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

<style scoped>
.deg-dropdown-menu {
  display: inline-grid;
  grid-template-columns: 1fr auto;
  grid-template-rows: auto auto;
  grid-template-areas: "label button"
                       "spacer list";

  .deg-dropdown-label {
    grid-area: label;
    align-self: center;
  }

  .deg-dropdown-menu-button {
    grid-area: button;
    text-align-last: justify;
    width: 8rem;

    .deg-icon-svg {
      margin-left: 0.5rem;
      transition: transform 0.25s ease;
      transform: rotate(90deg);
    }
  }

  .deg-dropdown-menu-bottom-container {
    position: fixed;
    display: flex;

    .deg-dropdown-menu-spacer {
      grid-area: spacer;
      visibility: hidden;
    }

    .deg-dropdown-menu-list {
      grid-area: list;
      border: 0.5px solid rgb(233, 218, 119);
      border-radius: 6px;
      background-color: rgb(72, 98, 159);
      margin: 2rem 0.25rem 0.25rem 0.25rem;
      cursor: pointer;
      width: 8rem;

      div {
        padding: 0.2rem;
        &:hover {
          background-color: rgb(79, 103, 159);

          &:first-child {
            border-top-left-radius: 6px;
            border-top-right-radius: 6px;
          }
          &:last-child {
            border-bottom-left-radius: 6px;
            border-bottom-right-radius: 6px;
          }
        }
        &:active {
          background-color: rgb(62, 91, 159);

          &:first-child {
            border-top-left-radius: 6px;
            border-top-right-radius: 6px;
          }

          &:last-child {
            border-bottom-left-radius: 6px;
            border-bottom-right-radius: 6px;
          }
        }
      }
    }
  }
}
</style>
