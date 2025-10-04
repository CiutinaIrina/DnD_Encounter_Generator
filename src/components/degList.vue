<script setup>
import { computed } from 'vue'

import degIcon from '../components/degIcon.vue'

const props = defineProps({
  rows: {
    type: Array,
    required: true,
  },
  columns: {
    type: Array,
    required: true,
  }
})

const hasIcon = computed(() => {
  return props.columns.includes("icon");
});

const computedColumns = computed(() => {
  return hasIcon.value ? props.columns.filter(column => column !== "icon") : props.columns;
})

</script>

<template>
  <div>
    <table>
      <thead>
        <tr>
          <th
            v-for="column in columns"
            :key="column"
          >
            {{ column }}
          </th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="row in rows"
          :key="row"
        >
          <td
            v-for="column in computedColumns"
            :key="column"
          >
            {{ row[column] }}
          </td>
          <td v-if="hasIcon">
            <deg-icon :name="row.icon" />
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<style scoped>

</style>