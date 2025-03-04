<template>
    <div>
        <FormCreator @formCreated="redirectToList" />
    </div>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router';
import FormCreator from '@/components/Form/FormCreator.vue';

const router = useRouter();

const redirectToList = () => {
    router.push('/forms/list');
};
</script>