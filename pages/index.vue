<template>
  <div class="flex flex-col items-center justify-center min-h-screen bg-gray-100">
    <h1 class="text-4xl font-bold mb-8">Welcome to Poll and Form Builder</h1>
    <div class="space-y-4">
      <nuxt-link to="/polls/create" class="block text-center text-white bg-blue-500 py-2 px-4 rounded">
        Create a Poll
      </nuxt-link>
      <nuxt-link to="/polls/list" class="block text-center text-white bg-blue-500 py-2 px-4 rounded">
        Encuestas existentes
      </nuxt-link>
      <nuxt-link to="/forms/create" class="block text-center text-white bg-green-500 py-2 px-4 rounded">
        Create a Form
      </nuxt-link>
      <nuxt-link to="/forms/list" class="block text-center text-white bg-green-500 py-2 px-4 rounded">
        Formularios existentes
      </nuxt-link>
    </div>
  </div>
</template>

<script setup lang="ts">
</script>

<style scoped>
</style>
