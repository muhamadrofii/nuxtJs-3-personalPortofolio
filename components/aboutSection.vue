<template>
  <div class="container"></div>
    <div class="flex bg-[#0d1b2a] text-[#cbd5e1] p-6 justify-center">
      <!-- Sidebar Navigation -->
      <div class="relative flex flex-col space-y-1 mr-6">
  <!-- Adjusted vertical line -->
  <div 
    class="absolute left-0 top-[5px] w-[2px] bg-[#22313f]"
    :style="{ height: `calc(${navigationItems.length * 42}px)` }"
  ></div>
  
        <NuxtLink
          v-for="(item, index) in navigationItems"
          :key="index"
          :to="item.route"
          :class="[ 
            'text-left py-2 pl-4 pr-4 relative flex items-center w-full',
            selectedItem === index ? 'bg-[#22313f] text-[#4be0b0] active-indicator' : 'text-[#7b8794] hover:text-[#4be0b0]' 
          ]"
          @click="selectItem(index)"
        >
          <!-- Small indicator line for the active item -->
          <span
            v-if="selectedItem === index"
            class="absolute left-0 top-0 h-full w-[4px] bg-[#4be0b0] rounded"
          ></span>
  
          {{ item.name }}
        </NuxtLink>
      </div>
  
      <!-- Job Details with Transition -->
      <div class="space-y-4">
        <transition name="fade" mode="out-in">
          <div :key="selectedItem">
            <h2 class="text-xl font-semibold text-[#cbd5e1]">
              {{ navigationItems[selectedItem].title }}
              <span class="text-[#4be0b0]">@ {{ navigationItems[selectedItem].description }}</span>
            </h2>
            <p class="text-sm text-[#7b8794]">{{ navigationItems[selectedItem].date }}</p>
            <ul class="list-disc list-inside space-y-2 mt-4">
              <li v-for="(detail, index) in navigationItems[selectedItem].details" :key="index" class="text-[#cbd5e1]">
                {{ detail }}
              </li>
            </ul>
          </div>
        </transition>
      </div>
    </div>
  </template>


  
  <script setup lang="ts">
  import { ref } from 'vue'
  
  const navigationItems = [
    { name: 'Hobi', title: 'Hobi Details', description: 'Deskripsi Hobi', date: 'Tanggal: 2024', route: '/hobi', details: ['Detail tentang hobi 1', 'Detail tentang hobi 2', 'Detail tentang hobi 3'] },
    { name: 'Sekolah', title: 'Sekolah Details', description: 'Deskripsi Sekolah', date: 'Tanggal: 2024', route: '/sekolah', details: ['Detail tentang sekolah 1', 'Detail tentang sekolah 2', 'Detail tentang sekolah 3'] },
    { name: 'Kompetensi', title: 'Kompetensi Details', description: 'Deskripsi Kompetensi', date: 'Tanggal: 2024', route: '/kompetensi', details: ['Detail tentang kompetensi 1', 'Detail tentang kompetensi 2', 'Detail tentang kompetensi 3'] },
    { name: 'Experience', title: 'Pengalaman Kerja Details', description: 'Deskripsi Pengalaman Kerja', date: 'Tanggal: 2024', route: '/pengalaman-kerja', details: ['Detail tentang pengalaman kerja 1', 'Detail tentang pengalaman kerja 2', 'Detail tentang pengalaman kerja 3'] }
  ]
  
  const selectedItem = ref(0)
  
  function selectItem(index: number) {
    selectedItem.value = index;
  }
  </script>
  