<template>
    <div>
        <h2 class="text-2xl font-bold mb-4">Polls List</h2>
        <nuxt-link to="/" class="text-blue-500 underline mb-4 block">Back to Home</nuxt-link>
        <div v-if="polls.length">
            <div v-for="poll in polls" :key="poll.id" class="mb-4">
                <h3 class="text-xl mb-2">{{ poll.question }}</h3>
                <nuxt-link :to="`/polls/respond?id=${poll.id}`" class="text-blue-500 underline mr-4">Respond</nuxt-link>
                <nuxt-link :to="`/polls/results?id=${poll.id}`" class="text-blue-500 underline">View Results</nuxt-link>
            </div>
        </div>
        <div v-else>
            <p>No polls available.</p>
        </div>
    </div>
</template>

<script setup lang="ts">
import { usePollStore } from '@/stores/pollStore';

const pollStore = usePollStore();
const polls = pollStore.polls;
</script>