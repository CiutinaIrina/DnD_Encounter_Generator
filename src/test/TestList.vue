<script setup>
import { ref, onMounted } from 'vue'

import degList from '../components/degList.vue'
import degButton from '../components/degButton.vue'

const monsterList1 = ref([]);
const monsterList2 = ref([]);
const listIcons = ref(["info", "add"]);
const columns = ref(["name", "size", "type", "alignment", "challenge_rating"]);
const hasPagination = ref(true);
const numbersPerPage = ref(5);


onMounted(async () => {
  const response = await fetch('src/common/srdMonsters.json');
  const data = await response.json();
  monsterList1.value = data.slice(0, 14);
  monsterList2.value = data.slice(0, 2);

  console.log(monsterList1.value);
});

const columnHeaderFormatter = (column) => {
  if (column === "challenge_rating") {
    return "CR";
  };

  return column.replace(/_/g, ' ').replace(/\b\w/g, c => c.toUpperCase());
};

const togglePagination = () => {
  hasPagination.value = !hasPagination.value;
};

</script>

<template>
  <div>
    <deg-button
      label="Toggle Pagniation"
      @click="togglePagination"
    />
    <br>
    <deg-list
      :rows="monsterList1"
      :columns="columns"
      :icons="listIcons"
      :column-header-formatter="columnHeaderFormatter"
      :has-pagination="hasPagination"
      :numbers-per-page="numbersPerPage"
    />
  </div>
</template>

<style scoped>

</style>