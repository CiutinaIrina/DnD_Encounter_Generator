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
    <table class="deg-list-table">
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
.deg-list-table {
  border: 1px solid rgb(233, 218, 119);
  border-radius: 4px;
  border-spacing: 0;

  thead {
    background-color: rgba(23, 47, 102, 0.6);
    border-top: 1px solid rgb(233, 218, 119);
    border-top-left-radius: 4px;
    border-top-right-radius: 4px;

    th {
      text-align: left;
      font-weight: bold;
      border-bottom: 1px solid rgb(233, 218, 119);

      &:not(:last-child) {
        border-right: 1px solid rgb(233, 218, 119);
      }
    }
  }

  tbody {
    tr {
      &:nth-child(even) {
        background-color: rgba(56, 110, 234, 0.3);
      }

      &:nth-child(odd) {
        background-color: rgba(56, 110, 234, 0.45);
      }

      &:hover {
        background-color: rgba(46, 91, 194, 0.3);
        cursor: pointer;
      }

      &:not(:last-child) {
        td {
          border-bottom: 1px solid rgb(233, 218, 119);
        }
      }
    }
  
    tr {
      td:not(:last-child) {
        border-right: 1px solid rgb(233, 218, 119);
      }
    }
  }

  th, td {
    padding: 0.25rem;
  }
}

</style>