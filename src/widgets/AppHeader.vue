<script setup lang="ts">
import UiButton from '@/shared/ui/UiButton.vue';
import UiContainer from '@/shared/ui/UiContainer.vue';
import UiIcon from '@/shared/ui/UiIcon.vue';
import UiLogo from '@/shared/ui/UiLogo.vue';
</script>

<template>
  <header class="header">
    <UiContainer class="header__container">
      <UiLogo orientation="horizontal" bg-color="white" colorful with-text />
      <div class="header__catalog">
        <UiButton color="secondary">
          <template v-slot:left-icon>
            <UiIcon type="menu" />
          </template>
          Каталог</UiButton
        >
      </div>
    </UiContainer>
  </header>
</template>

<style scoped>
.header__container {
  display: flex;
  align-items: center;
  height: 72px;
}

.header {
  position: sticky;
  top: 0;
  left: 0;
  box-shadow: var(--shadow-default-s);
  background: var(--main-surface);
}

.header__catalog {
  width: 140px;
  margin-left: 40px;
}
</style>
