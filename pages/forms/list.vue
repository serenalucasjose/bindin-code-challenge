<template>
    <div>
        <h2 class="text-2xl font-bold mb-4">Forms List</h2>
        <nuxt-link to="/" class="text-green-500 underline mb-4 block">Back to Home</nuxt-link>
        <div v-if="forms.length">
            <div v-for="form in forms" :key="form.id" class="mb-4">
                <h3 class="text-xl mb-2">Form {{ form.id }}</h3>
                <nuxt-link :to="`/forms/respond?id=${form.id}`"
                    class="text-green-500 underline mr-4">Respond</nuxt-link>
                <nuxt-link :to="`/forms/results?id=${form.id}`" class="text-green-500 underline">View
                    Responses</nuxt-link>
            </div>
        </div>
        <div v-else>
            <p>No forms available.</p>
        </div>
    </div>
</template>

<script setup lang="ts">
import { useFormStore } from '@/stores/formStore';

const formStore = useFormStore();
const forms = formStore.forms;
</script>