<template>
    <div>
        <nuxt-link to="/" class="text-green-500 underline mb-4 block">Back to Home</nuxt-link>
        <PollResults :pollId="1" />
    </div>
</template>

<script setup lang="ts">
import PollResults from '@/components/Poll/PollResults.vue';
</script>