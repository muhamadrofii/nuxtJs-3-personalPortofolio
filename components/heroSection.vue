<template>
  <section class="bg-customNavy">
  <div class="container mx-auto px-6 py-20 flex flex-col-reverse md:flex-row items-center">
    <!-- Text Content -->
    <div class="md:w-1/2">
      <h1 class="text-4xl font-bold text-gray-800 mb-4">Welcome to Your Product</h1>
      <p class="text-white mb-6">KULIAH SEGAN, NGULANG MATKUL PUN TAK MAU</p>
      <button class="ring-2 ring-blue-500">Create account</button>
      <button class="border-solid border-2 border-sky-500 rounded-lg p-2.5 text-white">TOMBOL LIKE</button>
      <ButtonsButton variant="primary" size="medium" @click="handleClick">Primary Button</ButtonsButton>
    <Button variant="secondary" size="small" @click="handleClick">Secondary Button</Button>
    <Button variant="danger" size="large" disabled>Danger Button</Button>
      <a href="#cta" class="bg-blue-600 text-white px-6 py-3 rounded-full hover:bg-blue-700">Get Started</a>
    </div>
    
    <!-- Image -->
    <div class="md:w-1/2 mb-10 md:mb-0">
      <img src="https://via.placeholder.com/500" alt="Product Image" class="w-full rounded-lg shadow-lg">
    </div>
  </div>
</section>

</template>

<script setup>
// import Button from '~/components/buttons/button.vue'
const handleClick = () => {
  alert('Button clicked!')
}
</script>