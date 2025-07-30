<template>
  <div class="form-section">
    <h2 class="section-title form-section__title">У нас к вам осталось несколько вопросов</h2>
    <form class="form-section__form">
      <input v-model="formData.name" required type="text" placeholder="Имя" class="form-section__form-input" />

      <div class="form-section__form-alcogol">
        <span>Какой алкоголь вы предпочитаете?</span>
        <div class="form-section__form-alcogol__inputs">
          <div class="form-section__form-alcogol__item">
            <input v-model="formData.alcogol" type="checkbox" id="alcogol-1" value="Вино" class="form-section__form-alcogol-button" />
            <label for="alcogol-1">Вино</label>
          </div>

          <div class="form-section__form-alcogol__item">
            <input v-model="formData.alcogol" type="checkbox" id="alcogol-2" value="Шампанское" class="form-section__form-alcogol-button" />
            <label for="alcogol-2">Шампанское</label>
          </div>

          <div class="form-section__form-alcogol__item">
            <input v-model="formData.alcogol" type="checkbox" id="alcogol-3" value="Водка" class="form-section__form-alcogol-button" />
            <label for="alcogol-3">Водка</label>
          </div>

          <div class="form-section__form-alcogol__item">
            <input v-model="formData.alcogol" type="checkbox" id="alcogol-4" value="Коньяк" class="form-section__form-alcogol-button" />
            <label for="alcogol-4">Коньяк</label>
          </div>

          <div class="form-section__form-alcogol__item">
            <input v-model="formData.alcogol" type="checkbox" id="alcogol-5" value="Виски" class="form-section__form-alcogol-button" />
            <label for="alcogol-5">Виски</label>
          </div>
        </div>
      </div>

      <button 
        class="form-section__form-button" 
        @click.prevent="sendForm"
        :disabled="isLoading"
      >
        {{ isLoading ? 'Отправляем...' : 'Отправить' }}
      </button>

			<small class="form-section__form-error">{{ error }}</small>
    </form>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { telegramService } from '../shared/services/telegramService';

const formData = ref({
	name: '',
	alcogol: [],
})

const error = ref<string | null>(null)
const isLoading = ref(false)

const sendForm = async () => {
	if(formData.value.name === '') {
		error.value = 'Пожалуйста, введите ваше имя'
		return;
	}

	if(formData.value.alcogol.length === 0) {
		error.value = 'Пожалуйста, выберите алкоголь'
		return;
	}

	error.value = null;
	isLoading.value = true;

	try {
		const success = await telegramService.sendFormData(formData.value);
		
		if (success) {
			// Очищаем форму после успешной отправки
			formData.value.name = '';
			formData.value.alcogol = [];
			alert('Спасибо! Ваша заявка отправлена.');
		} else {
			error.value = 'Ошибка при отправке формы. Попробуйте еще раз.';
		}
	} catch (err) {
		error.value = 'Произошла ошибка. Попробуйте еще раз.';
		console.error('Form submission error:', err);
	} finally {
		isLoading.value = false;
	}
};
</script>

<style scoped lang="scss">
.form-section {
  width: 100%;
  padding-bottom: 70px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  &__title {
    text-align: center;
    margin-bottom: 30px;
  }

  &__form {
    max-width: 70%;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

		&-error {
			font-weight: 700;
			font-size: 12px;
			color: red;
			margin-top: 10px;
		}

    &-input {
      width: 100%;
      height: 32px;
      border: 1px solid #000000;
      border-radius: 8px;
      padding: 0 10px;
      margin-bottom: 12px;
    }

    &-alcogol {
      width: 100%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: flex-start;
      gap: 12px;
      margin-bottom: 12px;

      &__inputs {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 10px;
        justify-content: center;
        align-items: center;
      }

      &__item {
        display: flex;
        align-items: center;
        gap: 10px;
      }
    }

    &-button {
      width: 100%;
      height: 40px;
      background-color: #000000;
      color: #ffffff;
      border-radius: 10px;
      border: none;
      cursor: pointer;
      transition: all 0.3s ease;

      &:hover:not(:disabled) {
        background-color: #333333;
      }

      &:disabled {
        background-color: #666666;
        cursor: not-allowed;
        opacity: 0.7;
      }
    }
  }
}
</style>
