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

  if (pageNumber.value <= 4) {
    pagination[1] = 2;
    pagination[2] = 3;
    pagination[3] = '...';
  } else if (pageNumber.value >= totalPages.value - 3) {
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

const getColumnStyle = (index) => {
  return props.columnsStyling[index] ? {
    width: props.columnsStyling[index].width,
    textAlign: props.columnsStyling[index].textAlign,
  } : {} ;
};

</script>

<template>
  <div class="deg-list">
    <table class="deg-list-table">
      <thead>
        <tr>
          <th
            v-for="(column, key) in computedColumns"
            :key="key"
            :style="getColumnStyle(key)"
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
            v-for="(column, key) in columns"
            :key="column"
            :style="getColumnStyle(key)"
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

<style lang="scss" scoped>
@import "@/css/components/degList.scss";
</style>