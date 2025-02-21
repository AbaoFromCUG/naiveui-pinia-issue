<script setup lang="ts">
import { NNotificationProvider, NMessageProvider } from 'naive-ui';
import MyComponent from './MyComponent.vue';

</script>

<template>
    <NMessageProvider>
        <NNotificationProvider>
            <div>
                <MyComponent />
            </div>
        </NNotificationProvider>
    </NMessageProvider>
</template>

<style scoped></style>
