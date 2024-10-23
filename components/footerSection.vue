<template>
    <nav class="bg-customNavy shadow-md">
        <div class="max-w-7xl py-0.5 px-8 sm:px-6 lg:mx-10 grid grid-cols-2 gap-4 font-sfmono">
            <div class="flex justify-self-start h-16 my-3 items-center">
                <div class="flex-shrink-0 flex">
                    <!-- <NuxtLink to="/" class="text-xl text-white">rof</NuxtLink> -->
                    <svg xmlns="http://www.w3.org/2000/svg" height="48px" viewBox="0 -960 960 960" width="48px" fill="#75FB4C"><path d="m368-592 89-147-59-98q-12-20-34.5-20T329-837l-98 163 137 82Zm387 272-89-148 139-80 64 107q11 17 12 38t-9 39q-10 20-29.5 32T800-320h-45ZM640-40 480-200l160-160v80h190l-58 116q-11 20-30 32t-42 12h-60v80Zm-387-80q-20 0-36.5-10.5T192-158q-8-16-7.5-33.5T194-224l34-56h172v160H253Zm-99-114L89-364q-9-18-8.5-38.5T92-441l16-27-68-41 219-55 55 220-69-42-91 152Zm540-342-219-55 69-41-125-208h141q21 0 39.5 10.5T629-841l52 87 68-42-55 220Z"/></svg>
                </div>
            </div>

            <div class="hidden md:flex space-x-12 flex items-center justify-center justify-self-end">
                <NuxtLink to="/" class="text-white hover:text-[#64FFDA]">Home</NuxtLink>
                <NuxtLink to="/about" class="text-white">About</NuxtLink>
                <NuxtLink to="/services" class="text-white">Services</NuxtLink>
                <NuxtLink to="/contact" class="text-white">Contact</NuxtLink>
            </div>

            <div class="mr-2 flex items-center md:hidden justify-self-end">
                <button @click="toggleMenu" class="inline-flex items-center justify-center rounded-md text-white">
      <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <!-- Hamburger icon -->
        <path
          :class="{ 'hidden': isOpen, 'block': !isOpen }"
          class="block"
          stroke="currentColor"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M4 6h16M4 12h16M4 18h16"
        />
      </svg>

      <svg
        :class="{ 'hidden': !isOpen, 'block': isOpen }"
        class="block"
        xmlns="http://www.w3.org/2000/svg"
        height="24px"
        viewBox="0 -960 960 960"
        width="24px"
        fill="#FFFFFF"
      >
        <!-- Custom close icon path -->
        <path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z" />
      </svg>
    </button>

            </div>
        </div>

        <div :class="{ 'block': isOpen, 'hidden': !isOpen }" class="md:hidden">
            <div class="pt-0 pb-0 px-8 space-y-4">
                <NuxtLink to="/" class="block text-white">Home</NuxtLink>
                <NuxtLink to="/about" class="block text-white">About</NuxtLink>
                <NuxtLink to="/services" class="block text-white">Services
                </NuxtLink>
                <NuxtLink to="/contact" class="block text-white">Contact
                </NuxtLink>
            </div>
        </div>
    </nav>

    <div class="grid grid-cols-2 gap-4">
        <!-- Left column content -->
        <div class="bg-white-200 p-4">
            Left side content
        </div>

        <!-- Right column content -->
        <div class="bg-white-300 p-4">
            Right side content
        </div>
    </div>


    <nav class="bg-customNavy font-sfmono text-white h-20">
        <div class="container mx-auto px-8 sm:px-8 lg:px-12">
            <div class="flex justify-between item-center h-16 pt-6">
                <!-- <NuxtLink to="/"  -->
                <svg xmlns="http://www.w3.org/2000/svg" height="48px" viewBox="0 -960 960 960" width="48px" fill="#75FB4C"><path d="m368-592 89-147-59-98q-12-20-34.5-20T329-837l-98 163 137 82Zm387 272-89-148 139-80 64 107q11 17 12 38t-9 39q-10 20-29.5 32T800-320h-45ZM640-40 480-200l160-160v80h190l-58 116q-11 20-30 32t-42 12h-60v80Zm-387-80q-20 0-36.5-10.5T192-158q-8-16-7.5-33.5T194-224l34-56h172v160H253Zm-99-114L89-364q-9-18-8.5-38.5T92-441l16-27-68-41 219-55 55 220-69-42-91 152Zm540-342-219-55 69-41-125-208h141q21 0 39.5 10.5T629-841l52 87 68-42-55 220Z"/></svg>
        <!-- </NuxtLink> -->

        <div class="hidden md:flex space-x-2">
          <NuxtLink
            v-for="link in links"
            :key="link.name"
            :to="link.path"
            :class="navLinkClass(link.path)"
            >{{ link.name }}</NuxtLink
          >
        </div>

        <!-- Mobile Menu Button -->
        <div class="-mr-2 flex md:hidden">
          <button
            @click="toggleMenu"
            type="button"
            class="inline-flex items-center justify-center p-2 rounded-md text-gray-800 hover: focus:outline-none">
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><path stroke-dasharray="10" stroke-dashoffset="10" d="M3 9l3 3l-3 3"><animate fill="freeze" attributeName="stroke-dashoffset" dur="0.2s" values="10;0"/></path><path stroke-dasharray="16" stroke-dashoffset="16" d="M5 5h14"><animate fill="freeze" attributeName="stroke-dashoffset" begin="0.2s" dur="0.2s" values="16;0"/></path><path stroke-dasharray="10" stroke-dashoffset="10" d="M10 12h9"><animate fill="freeze" attributeName="stroke-dashoffset" begin="0.4s" dur="0.2s" values="10;0"/></path><path stroke-dasharray="16" stroke-dashoffset="16" d="M5 19h14"><animate fill="freeze" attributeName="stroke-dashoffset" begin="0.6s" dur="0.2s" values="16;0"/></path></g></svg>
          </button>
        </div>
      </div>
    </div>

    <!-- Mobile Menu -->
    <div v-if="isOpen" class="md:hidden">
      <div class="p-8 gap-2 flex flex-col">
        <NuxtLink
          v-for="link in links"
          :key="link.name"
          :to="link.path"
          class="nav-link"
          >{{ link.name }}</NuxtLink
        >
            </div>
        </div>
    </nav>

</template>

<script setup>
import { ref } from 'vue'

const isOpen = ref(false)

const toggleMenu = () => {
    isOpen.value = !isOpen.value
}


const links = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Contact', path: '/contact' },
]

const navLinkClass = (path) => {
  return [
    'px-3 py-2 rounded-md text-sm font-medium',
    path === '/' ? 'text-white' : 'text-white',
  ]
}
</script>
<!-- 
<style scoped>
/* Optional styling */
button {
  transition: transform 0.9s ease-out;
}
</style> -->