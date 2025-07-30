<template>
	<div class="plan-section">
		<h2 class="plan-section__title section-title">План вечера</h2>
		<div class="plan-section__list">
			<div class="plan-section__item">
				<div class="plan-section__item-head">
					<div class="plan-section__item-time">16:30</div>
					<div class="plan-section__item-title">Сбор гостей</div>
				</div>
				<div class="plan-section__item-content">
					<p>Время летит незаметно в компании других гостей и за бокалом игристого шампанского</p>
				</div>
			</div>

			<div class="plan-section__item">
				<div class="plan-section__item-head">
					<div class="plan-section__item-time">17:00</div>
					<div class="plan-section__item-title">Выездная церемония</div>
				</div>
				<div class="plan-section__item-content">
					<p>Захватите с собой платочки для слез счастья</p>
				</div>
			</div>

			<div class="plan-section__item">
				<div class="plan-section__item-head">
					<div class="plan-section__item-time">17:30</div>
					<div class="plan-section__item-title">Банкет</div>
				</div>
				<div class="plan-section__item-content">
					<p>На вечере будет множество танцев, веселья и поздравлений</p>
				</div>
			</div>

			<div class="plan-section__item">
				<div class="plan-section__item-head">
					<div class="plan-section__item-time">23:00</div>
					<div class="plan-section__item-title">Завершение вечера</div>
				</div>
				<div class="plan-section__item-content">
					<p>К сожалению, даже такой замечательный день неизбежно подойдет к концу</p>
				</div>
			</div>
		</div>
	</div>
</template>

<script setup lang="ts">

</script>

<style scoped lang="scss">
.plan-section {
	width: 100%;
	height: auto;
	
	display: flex;
	flex-direction: column;
	justify-content: flex-start;
	align-items: center;

	padding-top: 34px;
	padding-bottom: 34px;

	&__title {
		margin-bottom: 35px;
	}

	&__list {
		max-width: 342px;
		width: 100%;
		height: auto;

		display: flex;
		flex-direction: column;
		justify-content: flex-start;
		align-items: center;
		gap: 28px;
	}

	&__item {
		width: 100%;
		height: auto;

		display: flex;
		flex-direction: column;
		justify-content: flex-start;
		align-items: flex-start;

		&-head {
			position: relative;
			width: 100%;
			height: auto;

			display: grid;
			grid-template-columns: 84px 1fr;
			gap: 20px;

			margin-bottom: 8px;

			&::after {
				position: absolute;
				right: 0;
				bottom: -4px;
				content: '';
				width: calc(100%);
				height: 1px;
				background-color: #000;
			}

			&::before {
				content: '';
				position: absolute;
				left: 0;
				bottom: -6px;
				width: 6px;
				height: 6px;
				border-radius: 100%;
				background-color: #000;
			}
		}

		&-time, &-title {
			font-size: 24px;
			line-height: 1;
		}

		&-time {
			padding: 0 20px;
		}

		&-content {
			width: 100%;
			display: grid;
			grid-template-columns: 84px 1fr;
			gap: 20px;

			p {
				max-width: 224px;
				font-size: 12px;
				grid-column: 2;
			}
		}
	}

}
</style>