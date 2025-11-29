<script setup>
import { ref } from 'vue'

import degList from '../components/degList.vue'

const rows = ref([
  {name: "Gnoll", type: "Humanoid", CR: 0.5, icon: "info"},
  {name: "Ogre", type: "Humanoid", CR: 2, icon: "info"},
  {name: "Knight", type: "Humanoid", CR: 3, icon: "info"},
  {name: "Roper", type: "Abberation", CR: 3, icon: "info"},
  {name: "Spider", type: "Beast", CR: 0.5, icon: "info"},
  {name: "Your Mom", type: "Indescribable", CR: 666, icon: "info"},
])

const columns = ref(["name", "type", "CR", "icon"]);

const compendiumColumns = ref(["name", "type", "CR"]);

</script>

<template>
  <div>
    <deg-list
      :rows="rows"
      :columns="columns"
    />
  </div>
</template>

<style scoped>

</style>