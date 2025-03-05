<template>
    <div>
        <h2 class="text-2xl font-bold text-gray-900 md:text-3xl dark:text-white mb-4">
            Respuestas
        </h2>
        <div v-if="responses.length">
            <div class="overflow-x-auto rounded-lg border border-gray-200 dark:border-gray-700">
                <table
                    class="min-w-full divide-y-2 divide-gray-200 bg-white text-sm dark:divide-gray-700 dark:bg-gray-900">
                    <thead class="ltr:text-left rtl:text-right">
                        <tr>
                            <th v-for="(question, index) in form.questions" :key="index"
                                class="whitespace-nowrap px-4 py-2 font-medium text-gray-900 text-left dark:text-white">
                                {{ question.text }}
                            </th>
                        </tr>
                    </thead>
                    <tbody class="divide-y divide-gray-200 dark:divide-gray-700">
                        <tr class="*:whitespace-nowrap *:px-4 *:py-2" v-for="(response, respIndex) in responses"
                            :key="respIndex">
                            <td v-for="(answer, ansIndex) in response" :key="ansIndex"
                                class="whitespace-nowrap px-4 py-2 text-gray-700 dark:text-gray-200">
                                {{ answer }}
                            </td>
                        </tr>
                    </tbody>
                </table>
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
import { useFormStore } from '@/stores/formStore';
import { useRoute } from 'vue-router';

const route = useRoute();
const formId = parseInt(route.query.id as string, 10);
const formStore = useFormStore();
const form = formStore.forms.find(f => f.id === formId);
const responses = form ? formStore.getFormResponses(form.id) : [];
</script>