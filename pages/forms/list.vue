<template>
    <div>
        <h2 class="text-2xl font-bold text-gray-900 md:text-3xl dark:text-white mb-4">
            Formularios
        </h2>
        <div v-if="forms.length">
            <div v-for="form in forms" :key="form.id" class="mb-4">
                <h4 class="text-xl mb-2 text-white">Form {{ form.id }}</h4>
                <nuxt-link
                    :to="`/forms/respond?id=${form.id}`"
                    class="inline-block rounded-sm border border-blue-600 px-6 py-1 text-sm font-medium text-blue-600 hover:bg-blue-600 hover:text-white focus:ring-3 focus:outline-hidden">
                    Responder
                </nuxt-link>
                <nuxt-link
                    :to="`/forms/results?id=${form.id}`"
                    class="inline-block rounded-sm border border-blue-600 px-6 py-1 ml-2 text-sm font-medium text-blue-600 hover:bg-blue-600 hover:text-white focus:ring-3 focus:outline-hidden">
                    Ver respuestas
                </nuxt-link>
            </div>
        </div>
        <div v-else>
            <h4 class="text-lg font-bold text-gray-900 md:text-lg dark:text-white">
                No hay formularios disponibles
            </h4>
        </div>
    </div>
</template>

<script setup lang="ts">
import { useFormStore } from '@/stores/formStore';

const formStore = useFormStore();
const forms = formStore.forms;
</script>