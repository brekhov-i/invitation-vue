<template>
  <div class="contacts-section">
    <h2 class="section-title contacts-section__title">Ваши фото – наши воспоминания!</h2>
    <div class="contacts-section__text">
      Сканируйте QR-код, чтобы добавить снимки в наш общий альбом – и просто познакомиться поближе до свадьбы
    </div>
    <div class="contacts-section__qr">
      <a class="" href="https://t.me/+HQ8Li5vyjf44N2My" target="_blank">
        <img src="/images/tg.png" alt="qr" />
      </a>
      <span>Отсканируй или нажми на qr-код</span>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
.contacts-section {
  width: 100%;

  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;

  padding-top: 32px;
  padding-bottom: 68px;

  padding-left: 30px;
  padding-right: 30px;

  align-items: center;

  &__title {
    grid-column: span 2;
    text-align: center;
  }

  &__text {
    font-size: 16px;
    line-height: 120%;
    color: #000;
    margin-bottom: 35px;
  }

  &__qr {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
    img {
      width: 140px;
      height: 140px;
      object-fit: cover;
    }

		span {
			font-size: 14px;
			text-align: center;
			margin-top: 6px;
		}
  }
}
</style>
