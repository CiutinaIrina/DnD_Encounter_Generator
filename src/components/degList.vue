<script setup>
import { computed, ref } from 'vue'

import degIcon from '../components/degIcon.vue'

const pageNumber = ref(4);

const props = defineProps({
  rows: {
    type: Array,
    required: true,
  },
  columns: {
    type: Array,
    required: true,
  },
  icons: {
    type: Array,
    default: () => [],
  },
  columnHeaderFormatter: {
    type: Function,
    default: () => {},
  },
  hasPagination: {
    type: Boolean,
    default: false,
  },
  numbersPerPage: {
    type: Number,
    default: 10,
  },
})

const computedColumns = computed(() => {
  return [...props.columns, ...props.icons];
});

const totalPages = computed(() => {
  return Math.ceil(props.rows.length / props.numbersPerPage);
});

const paginationArray = computed(() => {
  if (totalPages.value < 7)
    return Array.from({ length: totalPages.value }, (_, i) => i + 1);

  const pagination = Array(7);

  pagination[0] = 1;
  pagination[6] = totalPages.value;

  if (pageNumber.value <= 4) {
    pagination[1] = 2;
    pagination[2] = 3;
    pagination[3] = 4;
    pagination[4] = 5;
    pagination[5] = '...';
  } else if (pageNumber.value >= totalPages.value - 3) {
    pagination[1] = '...';
    pagination[2] = totalPages.value - 4;
    pagination[3] = totalPages.value - 3;
    pagination[4] = totalPages.value - 2;
    pagination[5] = totalPages.value - 1;
  } else {
    pagination[1] = '...';
    pagination[2] = pageNumber.value - 1;
    pagination[3] = pageNumber.value;
    pagination[4] = pageNumber.value + 1;
    pagination[5] = '...';
  }
  return pagination;
});

const getPageRows = computed(() => {
  const startIndex = (pageNumber.value - 1) * props.numbersPerPage;
  const endIndex = startIndex + props.numbersPerPage;
  return props.rows.slice(startIndex, endIndex);
});

const hasFirstPageIcon = computed(() => {
  return pageNumber.value > 2;
});

const hasPrevPageIcon = computed(() => {
  return pageNumber.value > 1;
});

const hasNextPageIcon = computed(() => {
  return pageNumber.value < totalPages.value;
});

const hasLastPageIcon = computed(() => {
  return pageNumber.value < totalPages.value - 1;
});

const updatePage = (page) => {
  pageNumber.value = page;
};

const firstPage = () => {
  updatePage(1);
};

const prevPage = () => {
  updatePage(pageNumber.value - 1);
};

const nextPage = () => {
  updatePage(pageNumber.value + 1);
};

const lastPage = () => {
  updatePage(totalPages.value);
};


</script>

<template>
  <div class="deg-list">
    <table class="deg-list-table">
      <thead>
        <tr>
          <th
            v-for="column in computedColumns"
            :key="column"
          >
            {{ columnHeaderFormatter(column) }}
          </th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="row in getPageRows"
          :key="row"
        >
          <td
            v-for="column in columns"
            :key="column"
          >
            {{ row[column] }}
          </td>
          <td v-for="icon in props.icons" :key="icon">
            <deg-icon :name="icon" />
          </td>
        </tr>
      </tbody>
    </table>
    <div
      v-if="hasPagination"
      class="deg-list-pagination"
    >
      <deg-icon
        v-if="hasFirstPageIcon"
        name="first_page"
        @click="firstPage()"
      />
      <deg-icon
        v-if="hasPrevPageIcon"
        name="prev_page"
        @click="prevPage()"

      />
      <div
        v-for="page in paginationArray"
        class="deg-list-pagination-pages"
        :key="page"
        @click="updatePage(page)"
      >
        {{ page }}
      </div>
      <deg-icon
        v-if="hasNextPageIcon"
        name="next_page"
        @click="nextPage()"
      />
      <deg-icon
        v-if="hasLastPageIcon"
        name="last_page"
        @click="lastPage()"
      />
    </div>
  </div>
</template>

<style scoped>
.deg-list {
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

        &:first-child {
          border-top-left-radius: 4px;
        }

        &:last-child {
          border-top-right-radius: 4px;
        }

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
          background-color: rgba(56, 110, 234, 0.4);
        }

        &:hover {
          background-color: rgba(56, 110, 234, 0.6);
          cursor: pointer;
        }

        &:active {
          background-color: rgba(56, 110, 234, 0.55);
          cursor: pointer;
        }

        &:not(:last-child) {
          td {
            border-bottom: 1px solid rgb(233, 218, 119);
          }
        }
      }

      tr:last-child {
        td:first-child {
          border-bottom-left-radius: 4px;
        }

        td:last-child {
          border-bottom-right-radius: 4px;
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

  &[has-pagination="true"] {
    .deg-list-table {
      color: fuchsia;
    }

    .deg-list-table tbody tr:last-child {
      td:last-child {
        border-bottom-right-radius: 0;
      }

      td:first-child {
        border-bottom-left-radius: 0;
      }
    }
  }

  .deg-list-pagination {
    background-color: rgba(23, 47, 102, 0.6);
    border: 1px solid rgb(233, 218, 119);
    border-top: none;
    border-bottom-left-radius: 4px;
    border-bottom-right-radius: 4px;
    display: flex;
    justify-content: space-evenly;
  }
}


</style>