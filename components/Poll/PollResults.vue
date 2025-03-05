<template>
    <div>
        <h2 class="text-2xl font-bold text-gray-900 md:text-3xl dark:text-white mb-4">
            Respuestas
        </h2>
        <div v-if="results.length">
            <div v-for="(result, index) in results" :key="index" class="mb-2 text-white">
                <p><strong>{{ result.text }}</strong>: {{ result.votes }} votos</p>
            </div>
        </div>
        <div v-else>
            <h4 class="text-lg font-bold text-gray-900 md:text-lg dark:text-white">
                No hay informacion disponible
            </h4>
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