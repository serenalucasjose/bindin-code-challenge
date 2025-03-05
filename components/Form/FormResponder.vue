<template>
    <div>
        <h2 class="text-2xl font-bold text-gray-900 md:text-3xl dark:text-white mb-4">
            Responder formulario
        </h2>
        <div v-if="form">
            <form @submit.prevent="respond">
                <div
                    v-for="(question, index) in form.questions"
                    :key="index"
                    class="mb-8"
                >
                    <label class="block text-xs font-medium text-gray-700 dark:text-gray-200">{{ question.text }}</label>
                    <input
                        v-if="question.type === 'short-answer'"
                        type="text"
                        v-model="responses[index]"
                        class="mt-1 w-full px-2 py-2 rounded-md border-gray-200 shadow-xs sm:text-sm dark:border-gray-700 dark:bg-gray-800 dark:text-white"
                    />
                    <textarea
                        v-else-if="question.type === 'long-answer'"
                        v-model="responses[index]"
                        class="mt-1 w-full px-2 py-2 rounded-md border-gray-200 shadow-xs sm:text-sm dark:border-gray-700 dark:bg-gray-800 dark:text-white">
                    </textarea>
                    <input
                        v-else-if="question.type === 'number'"
                        type="number"
                        v-model="responses[index]"
                        class="mt-1 px-2 py-2 rounded-md border-gray-200 shadow-xs sm:text-sm dark:border-gray-700 dark:bg-gray-800 dark:text-white"
                    />
                    <div v-else-if="question.type === 'radio'">
                        <div v-for="(option, optIndex) in question.options" :key="optIndex" class="mb-2">
                            <label>
                                <input type="radio" :value="option" v-model="responses[index]" />
                                <span class="ml-2 text-xs font-medium text-gray-700 dark:text-gray-200">{{ option }}</span>
                            </label>
                        </div>
                    </div>
                </div>
                <button
                    type="submit"
                    class="w-full inline-block rounded-sm border border-blue-600 bg-blue-600 px-12 py-3 text-sm font-medium text-white hover:bg-transparent hover:text-white-600 focus:ring-3 focus:outline-hidden">
                    Enviar
                </button>
            </form>
        </div>
        <div v-else>
            <h4 class="text-lg font-bold text-gray-900 md:text-lg dark:text-white">
                No hay un formulario disponible
            </h4>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useFormStore } from '@/stores/formStore';
import { useRoute, useRouter } from 'vue-router';

const route = useRoute();
const router = useRouter();
const formId = parseInt(route.query.id as string, 10);
const formStore = useFormStore();
const form = formStore.forms.find(f => f.id === formId);
const responses = ref<any[]>([]);

const respond = () => {
    if (form) {
        formStore.respondForm(form.id, responses.value);
        responses.value = [];
        router.push(`/forms/results?id=${form.id}`);
    }
};
</script>