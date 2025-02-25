<script setup lang="ts">
interface Props {
  src: string;
}

const { src } = defineProps<Props>();
</script>

<template>
  <div class="avatar">
    <img :src="src" alt="Avatar" />
  </div>
</template>

<style scoped>
.avatar {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  overflow: hidden;
}
</style>
