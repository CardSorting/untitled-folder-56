<script setup lang="ts">
import { RouterView } from 'vue-router'
import AppHeader from './components/AppHeader.vue'
import AppFooter from './components/AppFooter.vue'
import Auth from './components/common/Auth.vue'
import './assets/main.css'
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
  background-color: rgb(249 250 251);
}

.container {
  margin: 0 auto;
  padding: 0 1rem;
}
</style>
