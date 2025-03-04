<template>
    <div>
        <h2 class="text-2xl font-bold mb-4">Respond to Poll</h2>
        <div v-if="poll">
            <h3 class="text-xl mb-2">{{ poll.question }}</h3>
            <form @submit.prevent="vote">
                <div v-for="(option, index) in poll.options" :key="index" class="mb-2">
                    <label>
                        <input type="radio" :value="index" v-model="selectedOption" />
                        {{ option.text }}
                    </label>
                </div>
                <button type="submit" class="bg-blue-500 text-white py-2 px-4 rounded">Vote</button>
            </form>
        </div>
        <div v-else>
            <p>No poll available.</p>
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