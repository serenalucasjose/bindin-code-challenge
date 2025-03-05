<template>
    <div>
        <h2 class="text-2xl font-bold text-gray-900 md:text-3xl dark:text-white mb-4">
            Nueva encuesta
        </h2>
        <form @submit.prevent="createPoll">
            <div class="mb-4">
                <label class="block text-xs font-medium text-gray-700 dark:text-gray-200">
                    Pregunta:
                </label>
                <input
                    type="text"
                    v-model="question"
                    class="mt-1 px-2 py-2 w-full rounded-md border-gray-200 shadow-xs sm:text-sm dark:border-gray-700 dark:bg-gray-800 dark:text-white"
                    required
                />
            </div>
            <div v-for="(option, index) in options" :key="index" class="mb-4 flex items-center">
                <input
                    type="text"
                    v-model="options[index]"
                    class="mt-1 px-2 py-2 w-full rounded-md border-gray-200 shadow-xs sm:text-sm dark:border-gray-700 dark:bg-gray-800 dark:text-white"
                    required
                />
                <button
                    type="button"
                    @click="removeOption(index)"
                    class="text-white py-2 px-2 text-sm rounded ml-2">
                    Remover
                </button>
            </div>
            <button
                type="button"
                @click="addOption"
                class="inline-block rounded-sm border border-blue-600 px-6 py-1 text-sm font-medium text-blue-600 hover:bg-blue-600 hover:text-white focus:ring-3 focus:outline-hidden">
                Agregar opcion
            </button>
            <div class="mt-4">
                <button
                    type="submit"
                    class="w-full inline-block rounded-sm border border-blue-600 bg-blue-600 px-12 py-3 text-sm font-medium text-white hover:bg-transparent hover:text-white-600 focus:ring-3 focus:outline-hidden">
                    Crear encuesta
                </button>
            </div>
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