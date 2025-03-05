<template>
    <div>
        <h2 class="text-2xl font-bold text-gray-900 md:text-3xl dark:text-white mb-4">
            Respuesta encuesta
        </h2>
        <div v-if="poll">
            <h4 class="text-xl mb-2 text-white">{{ poll.question }}</h4>
            <form @submit.prevent="vote">
                <div v-for="(option, index) in poll.options" :key="index" class="mb-2">
                    <label>
                        <input type="radio" :value="index" v-model="selectedOption" />
                        <span class="text-white text-sm ml-2">{{ option.text }}</span>
                    </label>
                </div>
                <button
                    type="submit"
                    class="inline-block rounded-sm border border-blue-600 px-6 py-1 text-sm font-medium text-blue-600 hover:bg-blue-600 hover:text-white focus:ring-3 focus:outline-hidden">
                    Votar
                </button>
            </form>
        </div>
        <div v-else>
            <h4 class="text-lg font-bold text-gray-900 md:text-lg dark:text-white">
                No hay una encuesta disponible
            </h4>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { usePollStore } from '@/stores/pollStore';
import { useRoute, useRouter } from 'vue-router';

const route = useRoute();
const router = useRouter();
const pollId = parseInt(route.query.id as string, 10);
const pollStore = usePollStore();
const poll = pollStore.polls.find(p => p.id === pollId);
const selectedOption = ref<number | null>(null);

const vote = () => {
    if (selectedOption.value !== null && poll) {
        pollStore.votePoll(poll.id, selectedOption.value);
        selectedOption.value = null;
        router.push(`/polls/results?id=${poll.id}`);
    }
};
</script>