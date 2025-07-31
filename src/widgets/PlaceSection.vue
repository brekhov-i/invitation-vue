<template>
  <section id="place-section" class="place-section">
    <div class="container place-section__wrapper">
      <p class="place-section__text">
        Приглашаем Вас на нашу камерную свадьбу, чтобы разделить с нами радость особенного дня
      </p>

      <div class="place-section__timer">
        <div class="section-title place-section__timer-text">До торжества осталось</div>
        <div class="place-section__timer-times">
          <div class="time">
            <span class="number">{{ timer.days }}</span>
            <span>дней</span>
          </div>
          <div class="separator">:</div>
          <div class="time">
            <span class="number">{{ timer.hours }}</span>
            <span>часов</span>
          </div>
          <div class="separator">:</div>
          <div class="time">
            <span class="number">{{ timer.minutes }}</span>
            <span>минут</span>
          </div>
          <div class="separator">:</div>
          <div class="time">
            <span class="number">{{ timer.seconds }}</span>
            <span>секунд</span>
          </div>
        </div>
      </div>

      <div class="place-section__grid">
        <div class="place-section__villa">
          <div class="section-subtitle place-section__villa-name">Villa</div>
          <div class="place-section__villa-address">Ростовская область, х. Большой Лог, ул. Центральная д. 42</div>
          <a href="https://yandex.ru/maps/-/CHTTjCkg" class="place-section__villa-link">Посмотреть на карте</a>
          <div class="place-section__villa-image">
            <img src="/images/image1.png" />
          </div>
        </div>
        <div class="place-section__image">
          <img src="/images/VillaImage.png" />
        </div>
        <div class="place-section__image">
          <img src="/images/EsteticImage.png" />
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'

interface Timer {
  days: number
  hours: number
  minutes: number
  seconds: number
}

const timer = ref<Timer>({
  days: 0,
  hours: 0,
  minutes: 0,
  seconds: 0
})

let intervalId: number | null = null

const calculateTimeLeft = (): Timer => {
  const targetDate = new Date('2025-09-12T00:00:00')
  const now = new Date()
  const difference = targetDate.getTime() - now.getTime()

  if (difference <= 0) {
    return {
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0
    }
  }

  const days = Math.floor(difference / (1000 * 60 * 60 * 24))
  const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
  const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60))
  const seconds = Math.floor((difference % (1000 * 60)) / 1000)

  return {
    days,
    hours,
    minutes,
    seconds
  }
}

const startTimer = () => {
  // Обновляем таймер сразу
  timer.value = calculateTimeLeft()
  
  // Запускаем интервал для обновления каждую секунду
  intervalId = setInterval(() => {
    timer.value = calculateTimeLeft()
  }, 1000)
}

onMounted(() => {
  startTimer()
})

onUnmounted(() => {
  if (intervalId) {
    clearInterval(intervalId)
  }
})
</script>

<style scoped lang="scss">
.place-section {
  width: 100%;
  height: auto;
  padding-top: 46px;
	padding-bottom: 50px;

  &__wrapper {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
  }

  &__text {
    max-width: 343px;
    font-weight: 500;
    font-size: 20px;
    text-align: center;
    align-self: center;
    margin-bottom: 23px;
  }

  &__timer {
    width: 100%;
    height: auto;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 11px;

    border: 1px solid;
    border-radius: 12px;

    padding: 26px 0;
		margin-bottom: 24px;

    background-color: #ffffff;

    &-text {
      max-width: 324px;
      text-align: center;
    }

    &-times {
      width: auto;
      height: auto;

      display: flex;
      justify-content: space-between;
      align-items: center;
      gap: 9px;

      .time {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;

        span {
          font-weight: 500;
          font-size: 13px;
          line-height: 1;

          &.number {
            font-size: 32px;
          }
        }
      }

      .separator {
        font-size: 32px;
        font-weight: 500;
        line-height: 1;
      }
    }
  }

  &__grid {
    width: 100%;
    height: auto;

    display: grid;
    grid-template-columns: repeat(2, 1fr);
		gap: 16px;
  }

  &__villa {
    grid-column: 1;
    grid-row: span 2;

    border: 1px solid;
    background-color: #ffffff;
    border-radius: 12px;

    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
		gap: 12px;

    padding: 12px 0;

    &-image {
      width: auto;
      height: 120px;

      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }

    &-address {
      max-width: 124px;
      text-align: center;

      font-size: 12px;
      line-height: 1;
    }

    &-link {
			font-size: 12px;
			text-decoration: underline;
    }
  }

	&__image {
		width: 100%;
		height: 100%;
		border-radius: 12px;
		overflow: hidden;
		border: 1px solid;
	}
}
</style>
