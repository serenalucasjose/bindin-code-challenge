<template>
    <div>
        <h2 class="text-2xl font-bold mb-4">Create a Poll</h2>
        <form @submit.prevent="createPoll">
            <div class="mb-4">
                <label class="block text-gray-700">Question:</label>
                <input type="text" v-model="question" class="border rounded w-full py-2 px-3" required />
            </div>
            <div v-for="(option, index) in options" :key="index" class="mb-4 flex items-center">
                <input type="text" v-model="options[index]" class="border rounded w-full py-2 px-3" required />
                <button type="button" @click="removeOption(index)"
                    class="bg-red-500 text-white py-2 px-4 rounded ml-2">Delete</button>
            </div>
            <button type="button" @click="addOption" class="bg-green-500 text-white py-2 px-4 rounded mb-4">Add
                Option</button>
            <button type="submit" class="bg-blue-500 text-white py-2 px-4 rounded">Create Poll</button>
        </form>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { usePollStore } from '@/stores/pollStore';
import { useRouter } from 'vue-router';

const question = ref('');
const options = ref(['']);
const pollStore = usePollStore();
const router = useRouter();

const emit = defineEmits(['pollCreated']);

const addOption = () => {
    options.value.push('');
};

const removeOption = (index: number) => {
    options.value.splice(index, 1);
};

const createPoll = () => {
    pollStore.createPoll(question.value, options.value);
    question.value = '';
    options.value = [''];
    emit('pollCreated');
};
</script>