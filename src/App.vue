<template>
  <template v-if="isValidAccess">
    <MainSection />
    <PlaceSection />
    <PlanSection />
    <DresscodeSection />
    <MomentsSection />
    <ContactsSection />
    <FormSection />
  </template>
  <div v-else class="empty-page">
    <div class="empty-content">
      <h1>{{ ACCESS_CONFIG.MESSAGES.ACCESS_DENIED }}</h1>
      <p>{{ ACCESS_CONFIG.MESSAGES.ACCESS_DENIED_DESCRIPTION }}</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import {ref, onMounted} from 'vue'
import MainSection from './widgets/MainSection.vue'
import PlaceSection from './widgets/PlaceSection.vue'
import PlanSection from './widgets/PlanSection.vue'
import DresscodeSection from './widgets/DresscodeSection.vue'
import MomentsSection from './widgets/MomentsSection.vue'
import ContactsSection from './widgets/ContactsSection.vue'
import FormSection from './widgets/FormSection.vue'
import {ACCESS_CONFIG, verifyPassword} from './shared/config/access'

const isValidAccess = ref(false)

onMounted(async () => {
  // Получаем пароль из URL (без символа #)
  const inputPassword = window.location.hash.slice(1)

  if (inputPassword) {
    // Проверяем пароль с помощью bcrypt
    const isValid = await verifyPassword(inputPassword, ACCESS_CONFIG.SECRET_HASH)
    isValidAccess.value = isValid
  } else {
    // Если пароль отсутствует, показываем пустую страницу
    isValidAccess.value = false
  }
})
</script>

<style lang="scss" scoped>
main {
  background-color: var(--primary-color);
}

.empty-page {
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #f5f5f5;
  font-family: Arial, sans-serif;
}

.empty-content {
  text-align: center;
  padding: 2rem;

  h1 {
    color: #333;
    margin-bottom: 1rem;
    font-size: 2rem;
  }

  p {
    color: #666;
    font-size: 1.1rem;
  }
}
</style>
