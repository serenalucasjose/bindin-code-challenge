<template>
    <div>
        <h2 class="text-2xl font-bold mb-4">Respond to Form</h2>
        <div v-if="form">
            <form @submit.prevent="respond">
                <div v-for="(question, index) in form.questions" :key="index" class="mb-4">
                    <label class="block text-gray-700">{{ question.text }}</label>
                    <input v-if="question.type === 'short-answer'" type="text" v-model="responses[index]"
                        class="border rounded w-full py-2 px-3" />
                    <textarea v-else-if="question.type === 'long-answer'" v-model="responses[index]"
                        class="border rounded w-full py-2 px-3"></textarea>
                    <input v-else-if="question.type === 'number'" type="number" v-model="responses[index]"
                        class="border rounded w-full py-2 px-3" />
                    <div v-else-if="question.type === 'radio'">
                        <div v-for="(option, optIndex) in question.options" :key="optIndex" class="mb-2">
                            <label>
                                <input type="radio" :value="option" v-model="responses[index]" />
                                {{ option }}
                            </label>
                        </div>
                    </div>
                </div>
                <button type="submit" class="bg-blue-500 text-white py-2 px-4 rounded">Submit</button>
            </form>
        </div>
        <div v-else>
            <p>No form available.</p>
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