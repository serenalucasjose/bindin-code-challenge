<template>
    <div v-if="isVisible" role="alert" :class="['rounded-xl border p-4 absolute bottom-2 right-2', alertClasses]">
        <div class="flex items-start gap-4">
            <span :class="['text-green-600', iconClasses]">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                    stroke="currentColor" class="size-6">
                    <path stroke-linecap="round" stroke-linejoin="round" :d="iconPath" />
                </svg>
            </span>

            <div class="flex-1">
                <strong class="block font-medium" :class="textClasses">
                    {{ title }}
                </strong>

                <p class="mt-1 text-sm" :class="textClasses">
                    {{ message }}
                </p>
            </div>

            <button class="text-gray-500 transition hover:text-gray-600 dark:text-gray-400 dark:hover:text-gray-500"
                @click="closeAlert">
                <span class="sr-only">Dismiss popup</span>

                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                    stroke="currentColor" class="size-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
            </button>
        </div>
    </div>
</template>

<script setup lang="ts">
// v-if="isVisible"
import { computed } from 'vue';
import { useAlert } from '@/composables/useAlert';

const { isVisible, closeAlert, type, title, message } = useAlert();

const alertClasses = computed(() => {
    switch (type.value) {
        case 'success':
            return 'border-green-100 bg-white dark:border-gray-800 dark:bg-gray-900';
        case 'info':
            return 'border-blue-100 bg-blue-50 dark:border-gray-800 dark:bg-gray-900';
        case 'warning':
            return 'border-yellow-100 bg-yellow-50 dark:border-gray-800 dark:bg-gray-900';
        case 'error':
            return 'border-red-100 bg-red-50 dark:border-gray-800 dark:bg-gray-900';
        default:
            return 'border-gray-100 bg-white dark:border-gray-800 dark:bg-gray-900';
    }
});

const iconClasses = computed(() => {
    switch (type.value) {
        case 'success':
            return 'text-green-600';
        case 'info':
            return 'text-blue-600';
        case 'warning':
            return 'text-yellow-600';
        case 'error':
            return 'text-red-600';
        default:
            return 'text-gray-600';
    }
});

const textClasses = computed(() => {
    switch (type.value) {
        case 'success':
        case 'info':
        case 'warning':
        case 'error':
            return 'text-gray-900 dark:text-white';
        default:
            return 'text-gray-900 dark:text-white';
    }
});

const iconPath = computed(() => {
    switch (type.value) {
        case 'success':
            return 'M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z';
        case 'info':
            return 'M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z';
        case 'warning':
            return 'M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z';
        case 'error':
            return 'M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z';
        default:
            return 'M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z';
    }
});
</script>