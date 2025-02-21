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

<style scoped>
.logo {
    height: 6em;
    padding: 1.5em;
    will-change: filter;
    transition: filter 300ms;
}

.logo:hover {
    filter: drop-shadow(0 0 2em #646cffaa);
}

.logo.vue:hover {
    filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
