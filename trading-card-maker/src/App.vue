<script setup lang="ts">
import { RouterView } from 'vue-router'
import AppHeader from './components/AppHeader.vue'
import AppFooter from './components/AppFooter.vue'
import Auth from './components/common/Auth.vue'
</script>

<template>
  <div class="min-h-screen flex flex-col">
    <AppHeader />
    <main class="flex-grow">
      <RouterView />
    </main>
    <AppFooter />
  </div>
</template>

<style>
/* Global styles */
body {
  @apply bg-gray-50;
}

.container {
  @apply mx-auto px-4;
}
</style>
