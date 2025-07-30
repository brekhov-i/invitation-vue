<template>
  <section class="main-section">
    <img src="/images/main.png" alt="" class="main-section__bg" />
    <h1 class="main-section__title">
      <span class="main-section__title-first">Диана</span>
      <span class="main-section__title-two">& Илья</span>
    </h1>

    <div class="main-section__date">12.09.2025</div>
    <svg
      class="main-section__arrow"
      width="12"
      height="46"
      viewBox="0 0 12 46"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      @click="scrollToPlaceSection"
      style="cursor: pointer;"
    >
      <path
        d="M6 45.9438L11.7735 35.9438H0.226497L6 45.9438ZM6 0L5 0L5 22.9719H6H7L7 0L6 0ZM6 22.9719H5V36.9438H6H7V22.9719H6Z"
        fill="black"
      />
    </svg>
  </section>
</template>

<script setup lang="ts">
const scrollToPlaceSection = () => {
  const placeSection = document.getElementById('place-section')
  if (placeSection) {
    placeSection.scrollIntoView({ 
      behavior: 'smooth',
      block: 'start'
    })
  }
}
</script>

<style scoped lang="scss">
.main-section {
  width: 100%;
  height: 100vh;
  position: relative;
  display: flex;
  flex-direction: column;
  padding: 100px 0 60px;

  & > * {
    position: relative;
    z-index: 2;
  }

  &__bg {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: 1;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  &__title {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    font-size: 64px;
    line-height: 1;

    &-first {
      margin-right: 120px;
    }

    &-two {
      margin-left: 120px;
    }
  }

  &__date {
    font-size: 64px;
    line-height: 1;
    align-self: center;
    margin-top: auto;
  }

  &__arrow {
    align-self: center;
    margin-top: 30px;
    animation: arrowBounce 1.5s ease-in-out infinite;
    will-change: transform;
  }
}

@keyframes arrowBounce {
  0% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(55px);
  }
  100% {
    transform: translateY(0);
  }
}
</style>
