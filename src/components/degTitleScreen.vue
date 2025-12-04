<script setup>
import { ref, computed } from 'vue'

import degInput from '../components/degInput.vue'
import degDropdownMenu from '../components/degDropdownMenu.vue'
import XP from '@/common/xp.js'

const partySize = ref(4);
const partyLevel = ref(1);
const partySkill = ref({ level: "Advanced", multiplier: 1.0 });

const skillLevelList = ref([
  { label: "Beginner", multiplier: 0.75 },
  { label: "Average", multiplier: 1.0 },
  { label: "Advanced", multiplier: 1.25 },
  { label: "Expert", multiplier: 1.5 },
]);

const updatePartySize = (e) => {
  partySize.value = e;
}

const updatePartyLevel = (e) => {
  partyLevel.value = e;
}

const updatePartySkill = (e) => {
  partySkill.value = e;
}

// const partySizeValidator = size => {
//   if (!Number.isInteger(Number(size))) return false;

//   if (size < 3) return false;
//   else if (size > 6) return false;
//   else return true;
// }

// const partyLevelValidator = level => {
//   if (!Number.isInteger(Number(level))) return false;

//   if (level > 20 || level < 1) return false;
//   else return true;
// }

const partyXpPerDay = computed(() => {
  return XP.XP_PER_LEVEL[partyLevel.value]?.daily * partySize.value * partyLevel.value * partySkill.value?.multiplier;
})

</script>

<template>
  <div class="deg-title-screen">
    <p>Welcome to the Dungeons and Dragons Encounter Generator. Hope you have a great stay!</p>
    <br>
    <deg-input
      v-model="partySize"
      label="Party Size :"
      @update:model-value="updatePartySize"
    />
    <br>
    <deg-input
      v-model="partyLevel"
      label="Party Level :"
      @update:model-value="updatePartyLevel"
    />
    <br>
    <deg-dropdown-menu
      v-model="partySkill"
      label="Party Skill :"
      placeholder="Select Skill"
      :list-items="skillLevelList"
      @update:model-value="updatePartySkill"
    />
    <br>
    <p> A party of {{ partySize }} Level {{ partyLevel }} {{ partySkill?.level }} advenurers can handle {{ partyXpPerDay }} XP points per day.</p>
  </div>
</template>

<style scoped>
.deg-title-screen {
  height: 75%;
  width: 75%;
  background: rgba(0, 0, 0, 0.5);
}
</style>
