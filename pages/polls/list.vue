<template>
    <div>
        <h2 class="text-2xl font-bold text-gray-900 md:text-3xl dark:text-white mb-4">
            Encuestas
        </h2>
        <div v-if="polls.length">
            <div v-for="poll in polls" :key="poll.id" class="mb-4">
                <h4 class="text-xl mb-2 text-white">{{ poll.question }}</h4>
                <nuxt-link
                    :to="`/polls/respond?id=${poll.id}`"
                    class="inline-block rounded-sm border border-blue-600 px-6 py-1 text-sm font-medium text-blue-600 hover:bg-blue-600 hover:text-white focus:ring-3 focus:outline-hidden">
                    Responder
                </nuxt-link>
                <nuxt-link
                    :to="`/polls/results?id=${poll.id}`"
                    class="inline-block rounded-sm border border-blue-600 px-6 py-1 text-sm font-medium text-blue-600 hover:bg-blue-600 hover:text-white focus:ring-3 focus:outline-hidden ml-2">
                    Ver resultados
                </nuxt-link>
            </div>
        </div>
        <div v-else>
            <h4 class="text-lg font-bold text-gray-900 md:text-lg dark:text-white">
                No hay encuestas disponibles
            </h4>
        </div>
    </div>
</template>

<script setup lang="ts">
import { usePollStore } from '@/stores/pollStore';

const pollStore = usePollStore();
const polls = pollStore.polls;
</script>