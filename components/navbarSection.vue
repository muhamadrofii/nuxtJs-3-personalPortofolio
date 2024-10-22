<template>
  <nav class="bg-white shadow-md"> 
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex justify-between h-16 my-4  items-center">
        <!-- Logo -->
        <div class="flex-shrink-0 flex mb-6">
          <NuxtLink to="/" class="text-xl font-bold text-gray-800">MyApp</NuxtLink>
        </div>
        <!-- Menu -->
        <div class="hidden md:flex space-x-8 mb-6">
          <NuxtLink to="/" class="text-gray-500 hover:text-gray-700">Home</NuxtLink>
          <NuxtLink to="/about" class="text-gray-500 hover:text-gray-700">About</NuxtLink>
          <NuxtLink to="/services" class="text-gray-500 hover:text-gray-700">Services</NuxtLink>
          <NuxtLink to="/contact" class="text-gray-500 hover:text-gray-700">Contact</NuxtLink>
        </div>
        <!-- Mobile Menu Button -->
        <div class="mr-2 flex items-center md:hidden">
          <button @click="toggleMenu" class="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700">
            <svg class="h-6 w-6" stroke="white" fill="none" viewBox="0 0 24 24">
              <path :class="{'hidden': isOpen, 'block': !isOpen }" class="block" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"/>
              <path :class="{'hidden': !isOpen, 'block': isOpen }" class="hidden" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>
            </svg>
          </button>
        </div>
      </div>
    </div>

    <!-- Mobile Menu -->
    <div :class="{'block': isOpen, 'hidden': !isOpen}" class="md:hidden">
      <div class="px-2 pt-2 pb-3 space-y-1">
        <NuxtLink to="/" class="block text-gray-500 hover:bg-gray-700 hover:text-white">Home</NuxtLink>
        <NuxtLink to="/about" class="block text-gray-500 hover:bg-gray-700 hover:text-white">About</NuxtLink>
        <NuxtLink to="/services" class="block text-gray-500 hover:bg-gray-700 hover:text-white">Services</NuxtLink>
        <NuxtLink to="/contact" class="block text-gray-500 hover:bg-gray-700 hover:text-white">Contact</NuxtLink>
      </div>
    </div>
  </nav>
</template>

<!-- <template>
  <nav class="bg-slate-950 shadow-md">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex justify-between h-16 my-4  items-center">
        <div class="flex-shrink-0 flex mb-6">
          <NuxtLink to="/" class="text-xl font-bold text-gray-800">MyApp</NuxtLink>
        </div>
      </div>
    </div>
  </nav>
</template> -->

<script setup>
import { ref } from 'vue'

const isOpen = ref(false)

const toggleMenu = () => {
  isOpen.value = !isOpen.value
}
</script>

<style scoped>
/* Optional: Add custom styles if needed */
</style>
