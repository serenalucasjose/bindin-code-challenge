<template>
    <div>
        <h2 class="text-2xl font-bold mb-4">Form Responses</h2>
        <div v-if="responses.length">
            <table class="min-w-full bg-white border border-gray-300">
                <thead>
                    <tr>
                        <th v-for="(question, index) in form.questions" :key="index" class="py-2 px-4 border-b">
                            {{ question.text }}
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="(response, respIndex) in responses" :key="respIndex">
                        <td v-for="(answer, ansIndex) in response" :key="ansIndex" class="py-2 px-4 border-b">
                            {{ answer }}
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
        <div v-else>
            <p>No responses available.</p>
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