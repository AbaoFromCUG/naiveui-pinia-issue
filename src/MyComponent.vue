<script setup lang="ts">
import { NButton } from 'naive-ui';

import { useBarStore } from './store';

const barStore = useBarStore()

</script>
<template>
    <div>
        <NButton @click="barStore.notify">Notify</NButton>
        <NButton @click="barStore.message">Message</NButton>
    </div>
</template>


<style scoped></style>
