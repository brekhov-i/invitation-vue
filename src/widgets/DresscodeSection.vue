<template>
  <div class="dresscode-section">
      <div class="dresscode-section__wrapper">
        <h2 class="dresscode-section__title section-title">Дресс-код</h2>
        <p class="dresscode-section__text">
          Мы будет видеть вас в любом наряде, но нам будет еще приятнее, если вы поддержите общую гамму нашего торжества
        </p>
        <div class="dresscode-section__colors">
          <svg width="255" height="58" viewBox="0 0 255 58" fill="none" xmlns="http://www.w3.org/2000/svg">
            <ellipse cx="28.9773" cy="29" rx="28.9773" ry="29" fill="#D5B5A0" />
            <ellipse cx="68.3864" cy="29" rx="28.9773" ry="29" fill="#CCE2EF" />
            <ellipse cx="107.795" cy="29" rx="28.9773" ry="29" fill="#535735" />
            <ellipse cx="147.205" cy="29" rx="28.9773" ry="29" fill="#4D3832" />
            <ellipse cx="186.614" cy="29" rx="28.9773" ry="29" fill="#141728" />
            <ellipse cx="226.023" cy="29" rx="28.9773" ry="29" fill="#0E0F13" />
          </svg>

          <svg
            class="dresscode-section__colors-arrow"
            width="64"
            height="8"
            viewBox="0 0 64 8"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M63.3536 4.35356C63.5488 4.1583 63.5488 3.84171 63.3536 3.64645L60.1716 0.464471C59.9763 0.269209 59.6597 0.269209 59.4645 0.464471C59.2692 0.659733 59.2692 0.976316 59.4645 1.17158L62.2929 4.00001L59.4645 6.82843C59.2692 7.02369 59.2692 7.34028 59.4645 7.53554C59.6597 7.7308 59.9763 7.7308 60.1716 7.53554L63.3536 4.35356ZM0 4L-4.37114e-08 4.5L63 4.50001L63 4.00001L63 3.50001L4.37114e-08 3.5L0 4Z"
              fill="black"
            />
          </svg>
        </div>

        <div class="dresscode-section__women">
					<div class="dresscode-section__women-wrapper">
						<img src="/images/woman.png" alt="" />
					</div>
        
        </div>
        <div class="dresscode-section__man">
					<div class="dresscode-section__man-wrapper">
						<img src="/images/man.png" alt="" />
					</div>
        </div>
      </div>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
.dresscode-section {
  width: 100%;
  height: auto;
	padding-top: 50px;
	padding-bottom: 50px;

  &__wrapper {
    width: 100%;
    height: auto;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
  }

  &__title {
    margin-bottom: 16px;
  }

  &__text {
    max-width: 349px;
    font-size: 16px;
    text-align: center;
    margin-bottom: 62px;
  }

  &__colors {
		max-width: 349px;
    width: 100%;
    height: auto;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    gap: 40px;
		margin-bottom: 38px;

    &-arrow {
      width: 16vw;
    }
  }

	&__women, &__man {
		width: 100%;
		height: 320px;
		display: flex;
		justify-content: flex-start;
		align-items: flex-start;
		overflow-x: scroll ;

    &::-webkit-scrollbar {
      display: none;
    }

		&-wrapper {
			min-width: 678px;
			height: 100%;
			display: flex;
		}

		img {
			width: auto;
			height: 100%;
			object-fit: cover;
		}
	}

	&__women {
		&-wrapper {
			min-width: 600px;
		}
	}

	&__man {
		&-wrapper {
			min-width: 750px;
		}
	}
}
</style>
