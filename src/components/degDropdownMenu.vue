<script setup>
import { ref, computed } from 'vue'

import degButton from '../components/degButton.vue'
import ICONS from '@/common/icons.js'

const open = ref(false)

const emit = defineEmits(['update:modelValue'])

const props = defineProps({
  modelValue: {
    type: [String, Number],
    default: '',
  },
  label: {
    type: String,
    default: '',
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
  console.log(item);
  emit('update:modelValue', item)
}

const displayedLabel = computed(() => {
  return props.modelValue || props.label;
})

</script>

<template>
  <div class="deg-dropdown-menu">
    <label class="deg-dropdown-label">Party Skill: </label>
    <deg-button
      :label="displayedLabel"
      :icon="ICONS.CHEVRON"
      @click="toggleDropdown"
      class="deg-dropdown-menu-button"
    />
    <div class="deg-dropdown-menu-spacer"></div>
    <div class="deg-dropdown-menu-list" v-if="open">
      <div
        v-for="(item, index) in listItems"
        :key="index"
        @click="selectValue(item)"
      >
        {{ item }}
      </div>
    </div>
  </div>
</template>

<style scoped>
.deg-dropdown-menu {
  display: grid;
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
  }

  .deg-dropdown-menu-spacer {
    grid-area: spacer;
    height: 0.25rem;
  }

  .deg-dropdown-menu-list {
    grid-area: list;
    border: 0.5px solid rgb(233, 218, 119);
    border-radius: 6px;
    background-color: rgba(56, 110, 234, 0.3);
    margin: 0rem 0.25rem 0.35rem 0.25rem;

    div {
      padding: 0.2rem;
      &:hover {
        background-color: rgba(56, 110, 234, 0.2);

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
        background-color: rgba(56, 110, 234, 0.4);

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
</style>
