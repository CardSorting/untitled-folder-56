<template>
  <div class="min-h-screen flex flex-col">
    <!-- Hero Section -->
    <section 
      class="bg-gradient-to-r from-primary to-secondary text-white py-32 px-4"
      aria-labelledby="hero-heading"
    >
      <div class="max-w-4xl mx-auto text-center">
        <h1 
          id="hero-heading"
          class="text-5xl font-bold mb-6 animate-fade-in-up"
        >
          Create Stunning Trading Cards
        </h1>
        <p class="text-xl mb-12 animate-fade-in-up delay-100">
          Design, customize, and share your unique trading cards with ease
        </p>
        <div class="flex flex-col md:flex-row gap-4 justify-center animate-fade-in-up delay-200">
          <router-link 
            to="/cards" 
            class="bg-white text-primary px-8 py-3 rounded-lg font-medium hover:bg-opacity-90 transition-all focus:ring-4 focus:ring-white focus:ring-opacity-50"
            aria-label="Get started creating trading cards"
          >
            Get Started
          </router-link>
          <router-link 
            to="/about" 
            class="border-2 border-white px-8 py-3 rounded-lg font-medium hover:bg-white hover:text-primary transition-all focus:ring-4 focus:ring-white focus:ring-opacity-50"
            aria-label="Learn more about our trading card maker"
          >
            Learn More
          </router-link>
        </div>
      </div>
    </section>

    <!-- Features Section -->
    <section 
      class="py-20 px-4"
      aria-labelledby="features-heading"
    >
      <div class="max-w-6xl mx-auto">
        <h2 
          id="features-heading"
          class="text-3xl font-bold text-center mb-12 animate-fade-in-up"
        >
          Why Choose Our Card Maker?
        </h2>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <FeatureCard
            v-for="(feature, index) in features"
            :key="index"
            :icon="feature.icon"
            :title="feature.title"
            :description="feature.description"
            :class="`animate-fade-in-up delay-${(index + 1) * 100}`"
          />
        </div>
      </div>
    </section>

    <!-- Testimonials Section -->
    <section 
      class="bg-gray-50 py-20 px-4"
      aria-labelledby="testimonials-heading"
    >
      <div class="max-w-6xl mx-auto">
        <h2 
          id="testimonials-heading"
          class="text-3xl font-bold text-center mb-12 animate-fade-in-up"
        >
          What Our Users Say
        </h2>
        <transition-group 
          name="fade" 
          tag="div" 
          class="flex flex-col md:flex-row gap-6 justify-center"
        >
          <TestimonialCard
            v-for="(testimonial, index) in testimonials"
            :key="testimonial.id"
            :testimonial="testimonial"
            :class="`animate-fade-in-up delay-${(index + 1) * 100}`"
            @click="activeTestimonial = index"
            :aria-label="`Testimonial from ${testimonial.name}`"
          />
        </transition-group>
      </div>
    </section>

    <!-- Footer Section -->
    <footer 
      class="bg-accent text-white py-6 mt-auto"
      aria-label="Website footer"
    >
      <p class="text-center">&copy; 2023 Trading Card Maker. All rights reserved.</p>
    </footer>
  </div>
</template>

<style>
@keyframes fade-in-up {
  0% {
    opacity: 0;
    transform: translateY(20px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-fade-in-up {
  animation: fade-in-up 0.5s ease-out both;
}

.delay-100 {
  animation-delay: 0.1s;
}

.delay-200 {
  animation-delay: 0.2s;
}

.delay-300 {
  animation-delay: 0.3s;
}
</style>

<script setup>
import { ref } from 'vue'
import FeatureCard from '@/components/FeatureCard.vue'
import TestimonialCard from '@/components/TestimonialCard.vue'

// Features data
const features = ref([
  {
    icon: 'design',
    title: 'Easy Design Tools',
    description: 'Intuitive interface for creating professional cards'
  },
  {
    icon: 'templates',
    title: 'Pre-made Templates',
    description: 'Choose from a variety of ready-to-use templates'
  },
  {
    icon: 'share',
    title: 'Easy Sharing',
    description: 'Share your creations with friends and community'
  }
])

// Testimonials data
const testimonials = ref([
  {
    id: 1,
    name: 'John Doe',
    comment: 'This card maker is amazing! So easy to use and the results are professional.',
    avatar: '/avatars/john.jpg'
  },
  {
    id: 2,
    name: 'Jane Smith',
    comment: 'I love the variety of templates and customization options.',
    avatar: '/avatars/jane.jpg'
  }
])

const activeTestimonial = ref(0)
</script>

<style>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
