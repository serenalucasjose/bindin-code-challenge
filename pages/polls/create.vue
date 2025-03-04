<template>
    <div>
        <PollCreator @pollCreated="redirectToList" />
    </div>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router';
import PollCreator from '@/components/Poll/PollCreator.vue';

const router = useRouter();

const redirectToList = () => {
    router.push('/polls/list');
};
</script>