<template>
    <div>
        <h2 class="text-2xl font-bold mb-4">Create a Form</h2>
        <form @submit.prevent="createForm">
            <div v-for="(question, index) in questions" :key="index" class="mb-4">
                <label class="block text-gray-700">Question {{ index + 1 }}:</label>
                <input type="text" v-model="question.text" class="border rounded w-full py-2 px-3" required />
                <select v-model="question.type" class="border rounded w-full py-2 px-3 mt-2">
                    <option value="short-answer">Short Answer</option>
                    <option value="long-answer">Long Answer</option>
                    <option value="number">Number</option>
                    <option value="radio">Radio</option>
                </select>
                <div v-if="question.type === 'radio'" class="mt-2">
                    <div v-for="(option, optIndex) in question.options" :key="optIndex" class="mb-2 flex items-center">
                        <input type="text" v-model="question.options[optIndex]" class="border rounded w-full py-2 px-3"
                            placeholder="Option" />
                        <button type="button" @click="removeOption(index, optIndex)"
                            class="bg-red-500 text-white py-2 px-4 rounded ml-2">Delete</button>
                    </div>
                    <button type="button" @click="addOption(index)"
                        class="bg-green-500 text-white py-2 px-4 rounded">Add Option</button>
                </div>
                <button type="button" @click="removeQuestion(index)"
                    class="bg-red-500 text-white py-2 px-4 rounded mt-2">Delete Question</button>
            </div>
            <button type="button" @click="addQuestion" class="bg-green-500 text-white py-2 px-4 rounded mb-4">Add
                Question</button>
            <button type="submit" class="bg-blue-500 text-white py-2 px-4 rounded">Create Form</button>
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