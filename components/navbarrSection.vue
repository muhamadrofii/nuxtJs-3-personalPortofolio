<template>
  <div class="bg-customNavy font-sfmono text-white py-3.5 px-6 shadow md:flex justify-between items-center">
    <div class="flex items-center">
      <!-- Logo Icon -->
      <span class="text-white">
        <svg xmlns="http://www.w3.org/2000/svg" height="48px" viewBox="0 -960 960 960" width="48px" fill="#75FB4C">
          <path d="M368-592l89-147-59-98q-12-20-34.5-20T329-837l-98 163 137 82Zm387 272-89-148 139-80 64 107q11 17 12 38t-9 39q-10 20-29.5 32T800-320h-45ZM640-40L480-200l160-160v80h190l-58 116q-11 20-30 32t-42 12h-60v80Zm-387-80q-20 0-36.5-10.5T192-158q-8-16-7.5-33.5T194-224l34-56h172v160H253Zm-99-114L89-364q-9-18-8.5-38.5T92-441l16-27-68-41 219-55 55 220-69-42-91 152Zm540-342-219-55 69-41-125-208h141q21 0 39.5 10.5T629-841l52 87 68-42-55 220Z"/>
        </svg>
      </span>

      
      <!-- Mobile Menu Toggle Button -->
      <button
        @click="isOpen = !isOpen"
        class="ml-auto md:hidden block text-xl"
      >
      <svg v-if="isOpen" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path fill="none" stroke="#ffffff" stroke-dasharray="12" stroke-dashoffset="12" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 12l7 7M12 12l-7 -7M12 12l-7 7M12 12l7 -7"><animate fill="freeze" attributeName="stroke-dashoffset" dur="0.3s" values="12;0"/></path></svg>
      <svg v-else xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><path stroke-dasharray="10" stroke-dashoffset="10" d="M3 9l3 3l-3 3"><animate fill="freeze" attributeName="stroke-dashoffset" dur="0.2s" values="10;0"/></path><path stroke-dasharray="16" stroke-dashoffset="16" d="M5 5h14"><animate fill="freeze" attributeName="stroke-dashoffset" begin="0.2s" dur="0.2s" values="16;0"/></path><path stroke-dasharray="10" stroke-dashoffset="10" d="M10 12h9"><animate fill="freeze" attributeName="stroke-dashoffset" begin="0.4s" dur="0.2s" values="10;0"/></path><path stroke-dasharray="16" stroke-dashoffset="16" d="M5 19h14"><animate fill="freeze" attributeName="stroke-dashoffset" begin="0.6s" dur="0.2s" values="16;0"/></path></g></svg>
      </button>
    </div>


    <!-- Navbar Links -->
    <transition name="slide-fade">
      <ul v-if="isOpen" class="md:flex md:items-center duration-700 ease-in">
        <li v-for="link in links" :key="link.name" class="md:mx-4 my-2 md:my-0">
          <NuxtLink :to="link.to" class="text-md hover:text-gray-300">
            {{ link.name }}
          </NuxtLink>
        </li>
      </ul>
      <!-- Always display links on large screens -->
      <ul v-else class="hidden md:flex md:items-center">
        <li v-for="link in links" :key="link.name" class="md:mx-4 my-2 md:my-0">
          <NuxtLink :to="link.to" class="text-md hover:text-gray-300">
            {{ link.name }}
          </NuxtLink>
        </li>
      </ul>
    </transition>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const isOpen = ref(false)
const links = [
  { name: 'Home', to: '/' },
  { name: 'About', to: '/about' },
  { name: 'Services', to: '/services' },
  { name: 'Contact', to: '/contact' }
]
</script>

<style scoped>
/* Tombol toggle */


/* Efek animasi untuk ul */
.slide-fade-enter-active,
.slide-fade-leave-active {
  transition: opacity 0.5s ease, transform 0.5s ease;
}

.slide-fade-enter-from {
  opacity: 0;
  transform: translateX(-20px); /* Muncul dari kiri */
}

.slide-fade-leave-to {
  opacity: 0;
  transform: translateX(-20px); /* Menghilang ke kiri */
}
</style>


    <!-- <ul class="hidden lg:flex md:flex">
        <li v-for="link in links" :key="link.name" class="md:mx-4 my-2 md:my-0">
          <NuxtLink :to="link.href" class="text-md hover:text-gray-300">
            {{ link.name }}
          </NuxtLink>
        </li>
      </ul> -->
