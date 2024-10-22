<template>
    <nav class="bg-customNavy shadow-md">
        <div class="max-w-7xl py-0.5 px-8 sm:px-6 lg:mx-10 grid grid-cols-2 gap-4 font-sfmono">
            <div class="flex justify-self-start h-16 my-3 items-center">
                <div class="flex-shrink-0 flex">
                    <NuxtLink to="/" class="text-xl text-white">rof</NuxtLink>
                </div>
            </div>

            <div class="hidden md:flex space-x-12 flex items-center justify-center justify-self-end">
                <NuxtLink to="/" class="text-white hover:text-[#64FFDA]">Home</NuxtLink>
                <NuxtLink to="/about" class="text-white">About</NuxtLink>
                <NuxtLink to="/services" class="text-white">Services</NuxtLink>
                <NuxtLink to="/contact" class="text-white">Contact</NuxtLink>
            </div>

            <div class="mr-2 flex items-center md:hidden justify-self-end">
                <button @click="toggleMenu"
                    class="inline-flex items-center justify-center p-2 rounded-md text-white">
                    <svg class="h-6 w-6" stroke="white" fill="none" viewBox="0 0 24 24">
                        <path :class="{ 'hidden': isOpen, 'block': !isOpen }" class="block" stroke-linecap="round"
                            stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
                        <path :class="{ 'hidden': !isOpen, 'block': isOpen }" class="hidden" stroke-linecap="round"
                            stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>
            </div>
        </div>

        <div :class="{ 'block': isOpen, 'hidden': !isOpen }" class="md:hidden">
            <div class="pt-0 pb-8 px-8 space-y-4">
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


</template>

<script setup>
import { ref } from 'vue'

const isOpen = ref(false)

const toggleMenu = () => {
    isOpen.value = !isOpen.value
}
</script>