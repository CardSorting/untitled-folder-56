<script setup lang="ts">
const currentYear = new Date().getFullYear()
</script>

<template>
  <footer class="bg-gray-800 text-white py-8">
    <div class="container mx-auto px-4">
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        <!-- About Section -->
        <div>
          <h3 class="text-lg font-bold mb-4">About</h3>
          <p class="text-gray-400">
            Trading Card Maker is a platform for creating and managing your custom trading cards.
          </p>
        </div>

        <!-- Quick Links -->
        <div>
          <h3 class="text-lg font-bold mb-4">Quick Links</h3>
          <ul class="space-y-2">
            <li>
              <router-link 
                to="/" 
                class="text-gray-400 hover:text-white transition-colors"
              >
                Home
              </router-link>
            </li>
            <li>
              <router-link 
                to="/about" 
                class="text-gray-400 hover:text-white transition-colors"
              >
                About
              </router-link>
            </li>
          </ul>
        </div>

        <!-- Contact -->
        <div>
          <h3 class="text-lg font-bold mb-4">Contact</h3>
          <p class="text-gray-400">support@tradingcardmaker.com</p>
        </div>
      </div>

      <div class="border-t border-gray-700 mt-8 pt-8 text-center">
        <p class="text-gray-400">
          &copy; {{ currentYear }} Trading Card Maker. All rights reserved.
        </p>
      </div>
    </div>
  </footer>
</template>
