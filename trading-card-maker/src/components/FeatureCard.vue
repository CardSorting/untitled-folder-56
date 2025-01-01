<template>
  <div class="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 text-center">
    <div class="w-16 h-16 mx-auto mb-6">
      <component 
        :is="icon" 
        class="w-full h-full text-primary"
      />
    </div>
    <h3 class="text-xl font-semibold text-gray-800 mb-4">{{ title }}</h3>
    <p class="text-gray-600 leading-relaxed">{{ description }}</p>
  </div>
</template>

<script setup>
import { defineAsyncComponent } from 'vue'
import IconTooling from '../components/icons/IconTooling.vue'
import IconDocumentation from '../components/icons/IconDocumentation.vue'
import IconSupport from '../components/icons/IconSupport.vue'

defineProps({
  icon: {
    type: [String, Object],
    required: true
  },
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  }
})
</script>
