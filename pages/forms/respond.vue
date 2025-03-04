<template>
    <div>
        <nuxt-link to="/" class="text-green-500 underline mb-4 block">Back to Home</nuxt-link>
        <FormResponder :formId="1" />
    </div>
</template>

<script setup lang="ts">
import FormResponder from '@/components/Form/FormResponder.vue';
</script>