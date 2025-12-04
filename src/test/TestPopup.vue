<script setup>
import degPopup from '../components/degPopup.vue'
import degIcon from '../components/degIcon.vue'
import { ref } from 'vue'

const isPopupOpen1 = ref(false)
const isPopupOpen2 = ref(false)
const isPopupOpen3 = ref(false)

const onIconClick1 = () => {
  isPopupOpen1.value = !isPopupOpen1.value
}

const onIconClick2 = () => {
  isPopupOpen2.value = !isPopupOpen2.value
}

const onIconClick3 = () => {
  isPopupOpen3.value = !isPopupOpen3.value
}
</script>

<template>
  <div>
    <deg-icon
      ref="icon1"
      name="save"
      color="blue"
      @click="onIconClick1"
    />
    <deg-popup
      :open="isPopupOpen1"
      :anchor-el="$refs.icon1"
      :height="5"
      :width="8"
    >
    </deg-popup>
    <deg-icon
      ref="icon2"
      name="filter"
      color="green"
      @click="onIconClick2"
    />
    <deg-popup
      :anchor-el="$refs.icon2"
      :open="isPopupOpen2"
      :height="5"
      :width="8"
    />
    <deg-icon
      ref="icon3"
      name="info"
      color="red"
      @click="onIconClick3"
    />
    <deg-popup
      :anchor-el="$refs.icon3"
      :open="isPopupOpen3"
      :height="5"
      :width="8"
    />
  </div>
</template>

<style scoped></style>
