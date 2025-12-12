<script setup>
import { ref, onMounted } from 'vue'
import degList from '../components/degList.vue'

const data = ref([]);
const listIcons = ref(["info", "add"]);
const columns = ref(["name", "size", "type", "alignment", "challenge_rating"]);
const columnsStyling = ref([
  { name: "name", width: "13rem", textAlign: "" },
  { name: "size", width: "6rem", textAlign: "right" },
  { name: "type", width: "6rem", textAlign: "center" },
  { name: "alignment", width: "6rem", textAlign: "left" },
  { name: "challenge_rating", width: "2.5rem", textAlign: "" },
]);

onMounted(async () => {
  const response = await fetch('src/common/srdMonsters.json');
  data.value = await response.json();
  const license = data.value.pop();

  console.log(license);
});

const columnHeaderFormatter = (column) => {
  if (column === "challenge_rating") {
    return "CR";
  };

  return column.replace(/_/g, ' ').replace(/\b\w/g, c => c.toUpperCase());
};

</script>

<template>
  <deg-list
    :rows="data"
    :columns="columns"
    :icons="listIcons"
    :columns-styling="columnsStyling"
    :has-pagination="true"
    :numbers-per-page="8"
    :column-header-formatter="columnHeaderFormatter"
  />
</template>

<style scoped>

</style>