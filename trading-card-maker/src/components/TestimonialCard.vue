<template>
  <div 
    class="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 cursor-pointer"
    :class="{ 'border-2 border-primary': isActive }"
    @click="$emit('click')"
  >
    <div class="w-16 h-16 mx-auto mb-4 rounded-full overflow-hidden">
      <img 
        :src="testimonial.avatar" 
        :alt="testimonial.name" 
        class="w-full h-full object-cover"
      >
    </div>
    <h4 class="text-lg font-semibold text-gray-800 mb-2 text-center">
      {{ testimonial.name }}
    </h4>
    <p class="text-gray-600 italic leading-relaxed text-center">
      {{ testimonial.comment }}
    </p>
  </div>
</template>

<script setup>
defineProps({
  testimonial: {
    type: Object,
    required: true
  },
  isActive: {
    type: Boolean,
    default: false
  }
})
</script>
