<script setup>
import degDropdownMenu from '@/components/degDropdownMenu.vue'

import { ref } from 'vue'

const selectedSkillLevel = ref('')

const skillLevelList = ref([
  "Beginner",
  "Advanced",
  "Expert"
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
