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
  <div>
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
    <br>

    <p>We have a party of {{ partySize }} adventurers of level {{ partyLevel }}. </p>
  </div>
</template>

<style scoped>

</style>