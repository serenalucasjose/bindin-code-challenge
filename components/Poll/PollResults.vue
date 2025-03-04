<template>
    <div>
        <h2 class="text-2xl font-bold mb-4">Poll Results</h2>
        <div v-if="results.length">
            <div v-for="(result, index) in results" :key="index" class="mb-2">
                <p>{{ result.text }}: {{ result.votes }} votes</p>
            </div>
        </div>
        <div v-else>
            <p>No results available.</p>
        </div>
    </div>
</template>

<script setup lang="ts">
import { usePollStore } from '@/stores/pollStore';
import { useRoute } from 'vue-router';

const route = useRoute();
const pollId = parseInt(route.query.id as string, 10);
const pollStore = usePollStore();
const results = pollStore.getPollResults(pollId);
</script>