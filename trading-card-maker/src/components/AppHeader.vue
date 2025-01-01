<script setup lang="ts">
import { ref } from 'vue'

const isMenuOpen = ref(false)

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value
}
</script>

<template>
  <header class="bg-white shadow">
    <div class="container mx-auto px-4 py-6 flex justify-between items-center">
      <div class="flex items-center">
        <router-link to="/" class="text-xl font-bold text-gray-800">
          Trading Card Maker
        </router-link>
      </div>

      <nav class="hidden md:flex space-x-6">
        <router-link 
          to="/" 
          class="text-gray-600 hover:text-gray-900 transition-colors"
          active-class="text-gray-900 font-medium"
        >
          Home
        </router-link>
        <router-link 
          to="/about" 
          class="text-gray-600 hover:text-gray-900 transition-colors"
          active-class="text-gray-900 font-medium"
        >
          About
        </router-link>
      </nav>

      <button 
        @click="toggleMenu"
        class="md:hidden p-2 focus:outline-none"
      >
        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path 
            stroke-linecap="round" 
            stroke-linejoin="round" 
            stroke-width="2" 
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
      </button>
    </div>

    <!-- Mobile Menu -->
    <div 
      v-if="isMenuOpen"
      class="md:hidden bg-white border-t"
    >
      <router-link 
        to="/" 
        class="block px-4 py-2 text-gray-600 hover:bg-gray-50"
        active-class="text-gray-900 font-medium"
      >
        Home
      </router-link>
      <router-link 
        to="/about" 
        class="block px-4 py-2 text-gray-600 hover:bg-gray-50"
        active-class="text-gray-900 font-medium"
      >
        About
      </router-link>
    </div>
  </header>
</template>

<style scoped>
/* No need for custom styles since we're using Tailwind classes directly */
</style>
