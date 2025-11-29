<script setup>
import { ref, onMounted } from 'vue'

import degList from '../components/degList.vue'

const shortMonsterList = ref([]);
const listIcons = ref(["info", "add"]);
const columns = ref(["name", "size", "type", "alignment", "challenge_rating"]);


onMounted(async () => {
  const response = await fetch('src/common/srdMonsters.json');
  const data = await response.json();
  shortMonsterList.value = data.slice(0, 14);

  console.log(shortMonsterList.value);
});

const columnHeaderFormatter = (column) => {
  if (column === "challenge_rating") {
    return "CR";
  };

  return column.replace(/_/g, ' ').replace(/\b\w/g, c => c.toUpperCase());
};

</script>

<template>
  <div>
    <deg-list
      :rows="shortMonsterList"
      :columns="columns"
      :icons="listIcons"
      :column-header-formatter="columnHeaderFormatter"
    />
  </div>
</template>

<style scoped>

</style>