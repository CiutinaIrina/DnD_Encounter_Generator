<script setup>
import degDropdownMenu from '@/components/degDropdownMenu.vue'

import { ref } from 'vue'

const selectedSkillLevel = ref({}); 

const skillLevelList = ref([
  { label: "Beginner", multiplier: 0.75 },
  { label: "Average", multiplier: 1.0 },
  { label: "Advanced", multiplier: 1.25 },
  { label: "Expert", multiplier: 1.5 },
]);

const onUpdate = (value) => {
  selectedSkillLevel.value = value;
};

</script>

<template>
  <div>
    <deg-dropdown-menu
      label="Party Level :"
      :list-items="skillLevelList"
      v-model="selectedSkillLevel"
      @update:model-value="onUpdate"
    />
    <br>
    <deg-dropdown-menu
      label="Party Level (no close on select) :"
      :list-items="skillLevelList"
      v-model="selectedSkillLevel"
      :close-on-select="false"
      @update:model-value="onUpdate"
    />
  </div>
</template>

<style scoped></style>
