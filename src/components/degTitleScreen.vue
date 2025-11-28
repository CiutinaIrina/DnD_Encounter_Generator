<script setup>
import { ref } from 'vue'

import degInput from '../components/degInput.vue'

const partySize = ref(0);
const partyLevel = ref(0);

const updatePartySize = (e) => {
  partySize.value = e;
}

const updatePartyLevel = (e) => {
  partyLevel.value = e;
}

const partySizeValidator = size => {
  if (!Number.isInteger(Number(size))) return false;

  if (size < 3) return false;
  else if (size > 6) return false;
  else return true;
}

const partyLevelValidator = level => {
  if (!Number.isInteger(Number(level))) return false;

  if (level > 20 || level < 1) return false;
  else return true;
}

</script>

<template>
  <div class="deg-title-screen">
    <p>Welcome to the Dungeons and Dragons Encounter Generator. Hope you have a great stay!</p>
    <br>
    <deg-input
      v-model="partySize"
      label="Party Size :"
      :validator-callback="partySizeValidator"
      @update:model-value="updatePartySize"
    />
    <br>
    <deg-input
      v-model="partyLevel"
      label="Party Level :"
      :validator-callback="partyLevelValidator"
      @update:model-value="updatePartyLevel"
    />
  </div>
</template>

<style scoped>
.deg-title-screen {
  height: 75%;
  width: 75%;
  background: rgba(0, 0, 0, 0.5);
}
</style>
