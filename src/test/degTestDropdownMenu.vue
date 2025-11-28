<script setup>
import degDropdownMenu from '@/components/degDropdownMenu.vue'

import { ref } from 'vue'

const selectedSkillLevel = ref('')

const skillLevelList = ref([
  { level: "Beginner", multiplier: 0.5 },
  { level: "Advanced", multiplier: 1.0 },
  { level: "Expert", multiplier: 1.5 },
  { level: "Master", multiplier: 2.0 },
]);

const onUpdate = (value) => {
  selectedSkillLevel.value = value;
}

</script>

<template>
  <div>
    <deg-dropdown-menu
        label="Pick Skill Level"
        :list-items="skillLevelList"
        v-model="selectedSkillLevel"
        @update:model-value="onUpdate"
    />
  </div>
</template>

<style scoped></style>
