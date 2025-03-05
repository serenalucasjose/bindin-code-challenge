<template>
    <div>
        <FormCreator @formCreated="onFormCreated" />
    </div>
</template>

<script setup lang="ts">
import FormCreator from '@/components/Form/FormCreator.vue';
import { useRouter } from 'vue-router';
import { useAlert } from '@/composables/useAlert';

const router = useRouter();
const { showAlert } = useAlert();

const onFormCreated = () => {
    // User feedback
    showAlert({
        type: 'success',
        title: 'Formulario creado',
        message: 'El nuevo formulario ha sido creado exitosamente',
    });
    // Go to list
    router.push('/forms/list');
};
</script>