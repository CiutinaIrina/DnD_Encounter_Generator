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
  columnsStyling: {
    type: Array,
    default: () => [],
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
  if (totalPages.value < 5)
    return Array.from({ length: totalPages.value }, (_, i) => i + 1);

  const pagination = Array(5);

  pagination[0] = 1;
  pagination[4] = totalPages.value;

  if (pageNumber.value <= 3) {
    pagination[1] = 2;
    pagination[2] = 3;
    pagination[3] = '...';
  } else if (pageNumber.value >= totalPages.value - 2) {
    pagination[1] = '...';
    pagination[2] = totalPages.value - 2;
    pagination[3] = totalPages.value - 1;
  } else {
    pagination[1] = '...';
    pagination[2] = pageNumber.value;
    pagination[3] = '...';
  }
  return pagination;
});

const getPageRows = computed(() => {
  const startIndex = (pageNumber.value - 1) * props.numbersPerPage;
  const endIndex = startIndex + props.numbersPerPage;
  return totalDisplayedRows.value.slice(startIndex, endIndex);
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

const totalDisplayedRows = computed(() => {
  const fillerRowsNumber = totalPages.value * props.numbersPerPage - props.rows.length,
    fillerRows = Array.from({ length: fillerRowsNumber }, () => ({}));
  return [...props.rows, ...fillerRows];
});

const listClasses = computed(() => {
  return {
    'deg-list': true,
    'deg-list-has-pagination': props.hasPagination,
  };
});

const rowHasData = (rowKey) => {
  const rowIndex = rowKey + (pageNumber.value - 1) * props.numbersPerPage;
  return rowIndex < props.rows.length;
};

const updatePage = (page) => {
  if( page === '...' ) return;
  pageNumber.value = page;
};

const firstPage = () => {
  if (!hasFirstPageIcon.value) return;
  updatePage(1);
};

const prevPage = () => {
  if (!hasPrevPageIcon.value) return;
  updatePage(pageNumber.value - 1);
};

const nextPage = () => {
  if (!hasNextPageIcon.value) return;
  updatePage(pageNumber.value + 1);
};

const lastPage = () => {
  if (!hasLastPageIcon.value) return;
  updatePage(totalPages.value);
};

const isPageActive = (page) => {
  return page === pageNumber.value;
};

const pageClasses = (page) => {
  return {
    'deg-list-pagination-page': true,
    'deg-list-page-active': isPageActive(page),
  };
};

const getColumnStyle = (index) => {
  return props.columnsStyling[index] ? {
    width: props.columnsStyling[index].width,
    textAlign: props.columnsStyling[index].textAlign,
  } : {} ;
};

</script>

<template>
  <div :class="listClasses">
    <table class="deg-list-table">
      <thead>
        <tr>
          <th
            v-for="(column, headerKey) in computedColumns"
            :key="headerKey"
            :style="getColumnStyle(headerKey)"
          >
            {{ columnHeaderFormatter(column) }}
          </th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="(row, rowKey) in getPageRows"
          :key="rowKey"
        >
          <td
            v-for="(column, columnKey) in columns"
            :key="columnKey"
            :style="getColumnStyle(columnKey)"
          >
            {{ row[column] }}
          </td>
          <td
            v-for="(icon, iconKey) in props.icons"
            :key="iconKey"
            class="deg-list-icon-cell"
          >
            <deg-icon
              v-if="rowHasData(rowKey)"
              :name="icon"
            />
          </td>
        </tr>
      </tbody>
    </table>
    <div
      v-if="hasPagination"
      class="deg-list-pagination"
    >
      <div class="deg-list-pagination-content">
        <div class="deg-list-pagination-left-icons">
          <deg-icon
            :disabled="!hasFirstPageIcon"
            name="first_page"
            @click="firstPage()"
          />
          <deg-icon
            :disabled="!hasPrevPageIcon"
            name="prev_page"
            @click="prevPage()"

          />
        </div>
        <div class="deg-list-pagination-pages">
          <div
            v-for="page in paginationArray"
            :key="page"
            :class="pageClasses(page)"
            @click="updatePage(page)"
          >
            {{ page }}
          </div>
        </div>
        <div class="deg-list-pagination-right-icons">
          <deg-icon
            :disabled="!hasNextPageIcon"
            name="next_page"
            @click="nextPage()"
          />
          <deg-icon
            :disabled="!hasLastPageIcon"
            name="last_page"
            @click="lastPage()"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "@/css/components/degList.scss";
</style>