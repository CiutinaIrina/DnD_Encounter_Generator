<script setup>

import { ref, computed } from 'vue'

const props = defineProps({
  open: {
    type: Boolean,
    default: false,
  },
  anchorEl: {
    type: Object,
    default: () => null,
  },
})

const positionStyles = computed(() => {
  if (!props.anchorEl) return {};

  const rect = props.anchorEl.$el.getBoundingClientRect();
  return {
    position: 'absolute',
    top: `${rect.bottom + window.scrollY}px`,
    left: `${rect.left + window.scrollX}px`,
  };
});

</script>

<template>
  <div
  v-if="open"
  class="deg-popup"
  :style="positionStyles"
  >
      This is a popup
  </div>
</template>

<style lang="scss" scoped>
@import "@/css/components/degPopup.scss";
</style>