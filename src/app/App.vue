<script setup lang="ts">
import { useScreenStore } from '@/entities/screen';
import { onMounted, onUnmounted } from 'vue';
import { RouterView } from 'vue-router';

const screenStore = useScreenStore();
const { setPlatform } = screenStore;

const onRisize = () => {
  setPlatform(window.innerWidth);
};

onMounted(() => {
  window.addEventListener('resize', onRisize);
});

onUnmounted(() => {
  window.removeEventListener('resize', onRisize);
});
</script>

<template>
  <RouterView />
</template>
