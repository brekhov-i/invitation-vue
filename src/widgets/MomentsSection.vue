<template>
  <div class="moments-section">
    <img src="/images/moments.png" alt="" class="moments-section__image" />
    <div class="container">
      <div class="moments-section__wrapper">
        <h2 class="moments-section__title section-title">Организационные моменты</h2>
        <p class="moments-section__text">
          Мы не хотим обременять вас поиском, лучшим подарком будет конверт – исполнение наших маленьких мечт в молодой
          семье.
        </p>
        <div class="moments-section__text" @click="modelWindow?.open()">
          Вместо букета цветов в день свадьбы, мы будем рады если вы закажите по нашей <span>“подписке”</span> букет в магазине
          цветов.
        </div>
        <p class="moments-section__text">Так как у нас на вилле будет бассейн, возьмите с собой купальные костюмы</p>
      </div>
    </div>
  </div>

  <ModelWindow ref="modelWindow" />
</template>

<script setup lang="ts">
import ModelWindow from './ModelWindow.vue'
import {ref} from 'vue'

const modelWindow = ref<InstanceType<typeof ModelWindow> | null>(null)
</script>

<style lang="scss">
.moments-section {
  position: relative;
  width: 100%;
  height: auto;

  display: flex;
  padding-top: 64px;
  padding-bottom: 43px;

  &__image {
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;

    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  &__wrapper {
    position: relative;

    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
  }

  &__title {
    color: #ffffff;
    text-align: center;
    margin-bottom: 42px;
  }

  &__text {
    max-width: 342px;
    position: relative;
    font-size: 16px;
    line-height: 120%;
    color: #ffffff;
    text-align: center;
    margin-bottom: 26px;

		span {
			text-decoration: underline;
		}
  }

  .click-item {
		width: 80px;
		height: 80px;
    position: absolute;
    top: 30%;
    left: calc(40% + 60px);
    display: flex;
    justify-content: center;
    align-items: center;
    color: #ffffff;
    animation: blink 2s infinite ease-in-out;

		svg {
			width: 100%;
			height: 100%;
		}
  }
}

@keyframes blink {
  0% {
    opacity: 0.3;
  }
  50% {
    opacity: 1;
  }
  100% {
    opacity: 0.3;
  }
}
</style>
