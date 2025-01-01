<template>
  <div class="min-h-screen flex flex-col">
    <!-- Hero Section -->
    <section 
      class="relative h-[90vh] flex items-center justify-center overflow-hidden bg-[url('/images/hero-bg.jpg')] bg-cover bg-center"
      aria-labelledby="hero-heading"
    >
      <!-- Overlay -->
      <div class="absolute inset-0 bg-black/50 z-10"></div>

      <!-- Content -->
      <div class="max-w-4xl mx-auto text-center relative z-20 px-4">
        <h1 
          id="hero-heading"
          class="text-5xl md:text-7xl font-bold mb-6 text-white animate-fade-in-up"
        >
          Create Stunning Trading Cards
        </h1>
        <p class="text-xl md:text-2xl mb-12 text-white/80 animate-fade-in-up delay-100">
          Design, customize, and share your unique trading cards with ease
        </p>
        <div class="flex flex-col md:flex-row gap-4 justify-center animate-fade-in-up delay-200">
          <router-link 
            to="/cards" 
            class="bg-white text-primary px-8 py-3 rounded-lg font-medium hover:bg-opacity-90 transition-all focus:ring-4 focus:ring-white focus:ring-opacity-50 shadow-lg hover:shadow-xl"
            aria-label="Get started creating trading cards"
          >
            Start Creating Now →
          </router-link>
          <router-link 
            to="/about" 
            class="border-2 border-white px-8 py-3 rounded-lg font-medium hover:bg-white hover:text-primary transition-all focus:ring-4 focus:ring-white focus:ring-opacity-50 shadow-lg hover:shadow-xl"
            aria-label="Learn more about our trading card maker"
          >
            Learn More
          </router-link>
        </div>
      </div>
    </section>

    <!-- Stats Section -->
    <section 
      class="bg-white py-16"
      aria-label="Statistics about our platform"
    >
      <div class="max-w-6xl mx-auto px-4">
        <div class="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div class="text-center">
            <h3 class="text-4xl font-bold text-primary">10,000+</h3>
            <p class="text-gray-600">Cards Created</p>
          </div>
          <div class="text-center">
            <h3 class="text-4xl font-bold text-primary">500+</h3>
            <p class="text-gray-600">Active Users</p>
          </div>
          <div class="text-center">
            <h3 class="text-4xl font-bold text-primary">4.9/5</h3>
            <p class="text-gray-600">User Rating</p>
          </div>
          <div class="text-center">
            <h3 class="text-4xl font-bold text-primary">24/7</h3>
            <p class="text-gray-600">Support Available</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Features Section -->
    <section 
      class="py-20 px-4 bg-gradient-to-b from-white to-gray-50"
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
        <div class="relative">
          <div class="overflow-hidden">
            <div 
              class="flex transition-transform duration-500 ease-in-out"
              :style="{ transform: `translateX(-${activeTestimonial * 100}%)` }"
            >
              <TestimonialCard
                v-for="(testimonial, index) in testimonials"
                :key="testimonial.id"
                :testimonial="testimonial"
                class="w-full flex-shrink-0 px-4"
                :aria-label="`Testimonial from ${testimonial.name}`"
              />
            </div>
          </div>
          <button 
            class="absolute top-1/2 left-4 transform -translate-y-1/2 bg-white p-3 rounded-full shadow-lg hover:bg-gray-100 transition-colors"
            @click="prevTestimonial"
            aria-label="Previous testimonial"
          >
            <
          </button>
          <button 
            class="absolute top-1/2 right-4 transform -translate-y-1/2 bg-white p-3 rounded-full shadow-lg hover:bg-gray-100 transition-colors"
            @click="nextTestimonial"
            aria-label="Next testimonial"
          >
            >
          </button>
        </div>
      </div>
    </section>

    <!-- Newsletter Section -->
    <section 
      class="bg-primary py-20 px-4"
      aria-labelledby="newsletter-heading"
    >
      <div class="max-w-2xl mx-auto text-center">
        <h2 
          id="newsletter-heading"
          class="text-3xl font-bold text-white mb-6"
        >
          Stay Updated
        </h2>
        <p class="text-white/80 mb-8">
          Subscribe to our newsletter for the latest features and updates
        </p>
        <form class="flex flex-col md:flex-row gap-4 max-w-md mx-auto">
          <input
            type="email"
            placeholder="Enter your email"
            class="flex-1 px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50"
            aria-label="Email address for newsletter"
          />
          <button
            type="submit"
            class="bg-white text-primary px-6 py-3 rounded-lg font-medium hover:bg-opacity-90 transition-all"
            aria-label="Subscribe to newsletter"
          >
            Subscribe
          </button>
        </form>
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

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>

<script setup>
import { ref } from 'vue'
import FeatureCard from '../components/FeatureCard.vue'
import TestimonialCard from '../components/TestimonialCard.vue'

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

const nextTestimonial = () => {
  activeTestimonial.value = (activeTestimonial.value + 1) % testimonials.value.length
}

const prevTestimonial = () => {
  activeTestimonial.value = (activeTestimonial.value - 1 + testimonials.value.length) % testimonials.value.length
}
</script>
