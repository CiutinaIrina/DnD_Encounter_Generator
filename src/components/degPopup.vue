<script setup>

import { computed } from 'vue'

const props = defineProps({
  open: {
    type: Boolean,
    default: false,
  },
  anchorEl: {
    type: Object,
    default: () => null,
  },
  type: {
    type: String,
    default: 'default',
  },
  height: {
    type: [String, Number],
    default: 'auto',
  },
  width: {
    type: [ String, Number],
    default: 'auto',
  },
  list: {
    type: Array,
    default: () => [],
  },
})

const emit = defineEmits(["select"])

const onClick = (item) => {
  console.log("Item clicked:", item);
  emit("select", item);
}

const heightFitsContent = computed(() => {
  return props.height === 'fit-content';
});

const autoOrCustomHeight = computed(() => {
  return props.height === "auto" ? "auto" : `${props.height}rem`;
});

const widthFitsContent = computed(() => {
  return props.width === 'fit-content';
});

const autoOrCustomWidth = computed(() => {
  return props.width === "auto" ? "auto" : `${props.width}rem`;
}); 

const popupClasses = computed(() => {
  return {
    'deg-popup': true,
    'deg-popup-default': props.type === 'default',
    'deg-popup-list': props.type === 'list',
  };
});

const positionStyles = computed(() => {
  if (!props.anchorEl) return {};

  const rect = props.anchorEl.$el.getBoundingClientRect();

  return {
    top: `${rect.bottom + window.scrollY}px`,
    left: `${rect.left + window.scrollX}px`,
    width: widthFitsContent.value ? `${rect.width}` : autoOrCustomWidth.value,
    height: heightFitsContent.value ? `${rect.height}` : autoOrCustomHeight.value,
  };
});

</script>

<template>
  <div
    v-if="open"
    :class="popupClasses"
    :style="positionStyles"
  >
    <div
      v-if="type === 'list'"
      class="deg-popup-list"
    >
      <div
        v-for="(item, index) in list"
        :key="index"
        class="deg-popup-list-item"
        @click="onClick(item)"
      >
        {{ item.label }}
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "@/css/components/degPopup.scss";
</style>