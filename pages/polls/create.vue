<template>
    <div>
        <PollCreator @pollCreated="onPollCreated" />
    </div>
</template>

<script setup lang="ts">
import PollCreator from '@/components/Poll/PollCreator.vue';
import { useRouter } from 'vue-router';
import { useAlert } from '@/composables/useAlert';

const router = useRouter();
const { showAlert } = useAlert();

const onPollCreated = () => {
    // User feedback
    showAlert({
        type: 'success',
        title: 'Encuesta creada',
        message: 'La nueva encuesta ha sido creada exitosamente',
    });
    // Go to list
    router.push('/polls/list');
};
</script>