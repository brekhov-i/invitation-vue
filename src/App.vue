<template>
  <main>
    <MainSection />
    <PlaceSection />
    <PlanSection />
    <DresscodeSection />
    <MomentsSection />
    <ContactsSection />
    <FormSection />
  </main>
</template>

<script setup lang="ts">
import MainSection from './widgets/MainSection.vue'
import PlaceSection from './widgets/PlaceSection.vue'
import PlanSection from './widgets/PlanSection.vue'
import DresscodeSection from './widgets/DresscodeSection.vue'
import MomentsSection from './widgets/MomentsSection.vue'
import ContactsSection from './widgets/ContactsSection.vue'
import FormSection from './widgets/FormSection.vue'
</script>

<style lang="scss" scoped>
main {
  background-color: var(--primary-color);
}
</style>