<template>
  <div class="model-window" :class="{'model-window--open': isOpen}" @click="clickOutside">
    <div class="model-window__wrapper">
      <button class="model-window__close" @click="isOpen = false">
        <svg width="8" height="8" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
          <line x1="0.353553" y1="0.646447" x2="7.35355" y2="7.64645" stroke="black" />
          <line x1="0.646447" y1="7.64645" x2="7.64645" y2="0.646447" stroke="black" />
        </svg>
      </button>
      <p class="model-window__text">
        Что это значит? – По номеру
        <br />
        <strong><a href="tel:+79895360787">+7 (989) 536-07-87</a></strong>
        вы звоните в магазин цветов и говорите,
        <strong>что хотите заказать для Дианы и Ильи на 12.09.25</strong>
      </p>
      <p class="model-window__text">
        Цветы не будут доставлены в день свадьбы, так как это подписка, по которой Диана и Илья смогут заказать цветы
        позже, себе домой.
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">
import {ref, watch} from 'vue'
const isOpen = ref(false)

const clickOutside = (e: Event) => {
  const target = e.target as HTMLElement
  if (target.classList.contains('model-window')) {
    isOpen.value = false
  }
}

defineExpose({
  open: () => {
    isOpen.value = true
  },
  close: () => {
    isOpen.value = false
  },
})

watch(isOpen, (newVal) => {
  if (newVal) {
    document.body.style.overflow = 'hidden'
  } else {
    document.body.style.overflow = 'auto'
  }
})
</script>

<style scoped lang="scss">
.model-window {
  width: 100dvw;
  height: 100dvh;
  position: fixed;
  left: 0;
  top: 0;
  bottom: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 1000;
  display: flex;
  justify-content: center;
  align-items: center;

  opacity: 0;
  visibility: hidden;
  transition: opacity 0.3s ease-in-out, visibility 0.3s ease-in-out;

  &.model-window--open {
    opacity: 1;
    visibility: visible;

    .model-window__wrapper {
      transform: scale(1);
    }
  }

  &__wrapper {
    position: relative;
    width: 330px;
    height: auto;
    display: flex;
    flex-direction: column;
    background-color: #eeeded;
    padding: 34px 18px 20px;
    border-radius: 24px;
    transform: scale(0.9);
    transition: transform 0.3s ease-in-out;
  }

  &__close {
    position: absolute;
    top: 18px;
    right: 24px;
  }

  &__text {
    font-size: 16px;
    line-height: 120%;
    text-align: center;

    &:last-child {
      margin-top: 12px;
    }

    a {
      text-decoration: underline;
    }
  }
}
</style>
