<template>
    <div>
        <h2 class="text-2xl font-bold text-gray-900 md:text-3xl dark:text-white mb-4">
            Nuevo formulario
        </h2>
        <form @submit.prevent="createForm">
            <div v-for="(question, index) in questions" :key="index" class="mb-6">
                <label class="block text-xs font-medium text-gray-700 dark:text-gray-200">Pregunta {{ index + 1 }}:</label>
                <input
                    type="text"
                    v-model="question.text"
                    class="mt-1 px-2 py-2 w-full rounded-md border-gray-200 shadow-xs sm:text-sm dark:border-gray-700 dark:bg-gray-800 dark:text-white"
                    required
                />
                <select
                    v-model="question.type"
                    class="mt-1.5 w-full rounded-lg border-gray-200 text-white sm:text-sm px-2 py-2 dark:bg-gray-800"
                >
                    <option value="short-answer">Input</option>
                    <option value="long-answer">Textarea</option>
                    <option value="number">Number</option>
                    <option value="radio">Radio</option>
                </select>
                <div v-if="question.type === 'radio'" class="mt-2">
                    <div v-for="(option, optIndex) in question.options" :key="optIndex" class="mb-2 flex items-center">
                        <input
                            type="text"
                            v-model="question.options[optIndex]"
                            class="mt-1 px-2 py-2 rounded-md border-gray-200 shadow-xs sm:text-sm dark:border-gray-700 dark:bg-gray-800 dark:text-white"
                            placeholder="Opcion"
                        />
                        <button
                            type="button"
                            @click="removeOption(index, optIndex)"
                            class="text-white py-2 px-2 text-sm rounded ml-2">
                            Remover
                        </button>
                    </div>
                    <button 
                        type="button"
                        @click="addOption(index)"
                        class="mt-2 inline-block rounded-sm border border-blue-600 px-6 py-1 text-sm font-medium text-blue-600 hover:bg-blue-600 hover:text-white focus:ring-3 focus:outline-hidden">
                        Agregar opcion
                    </button>
                </div>
                <div class="mt-4 mb-1">
                    <button
                        type="button"
                        @click="removeQuestion(index)"
                        class="inline-block rounded-sm border border-red-500 px-6 py-1 text-sm font-medium text-red-500 hover:bg-red-500 hover:text-white focus:ring-3 focus:outline-hidden">
                        Borrar pregunta
                    </button>
                </div>
            </div>

            <div class="w-full inline-flex -space-x-px overflow-hidden rounded-md border bg-white shadow-xs dark:border-gray-800 dark:bg-gray-900">
                <button
                    type="button"
                    @click="addQuestion"
                    class="inline-block w-1/2 rounded-sm px-6 py-1 text-sm font-medium text-white hover:bg-blue-600 hover:text-white focus:ring-3 focus:outline-hidden">
                    Agregar pregunta
                </button>
                <button
                    type="submit"
                    class="w-full inline-block rounded-sm  px-12 py-3 text-sm font-medium text-white hover:bg-blue-600 hover:text-white-600 focus:ring-3 focus:outline-hidden">
                    Crear formulario
                </button>
            </div>
        </form>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useFormStore } from '@/stores/formStore';
import { useRouter } from 'vue-router';

const questions = ref([{ text: '', type: 'short-answer', options: [''] }]);
const formStore = useFormStore();
const router = useRouter();

const emit = defineEmits(['formCreated']);

const addQuestion = () => {
    questions.value.push({ text: '', type: 'short-answer', options: [''] });
};

const removeQuestion = (index: number) => {
    questions.value.splice(index, 1);
};

const addOption = (questionIndex: number) => {
    questions.value[questionIndex].options.push('');
};

const removeOption = (questionIndex: number, optionIndex: number) => {
    questions.value[questionIndex].options.splice(optionIndex, 1);
};

const createForm = () => {
    formStore.createForm(questions.value);
    questions.value = [{ text: '', type: 'short-answer', options: [''] }];
    emit('formCreated');
};
</script>