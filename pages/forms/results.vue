<template>
    <div>
        <nuxt-link to="/" class="text-green-500 underline mb-4 block">Back to Home</nuxt-link>
        <FormResults :formId="1" />
    </div>
</template>

<script setup lang="ts">
import FormResults from '@/components/Form/FormResults.vue';
</script>