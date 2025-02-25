<script setup lang="ts">
import type { Props } from '@/shared/types/navigation';
import UiIcon from '@/shared/ui/UiIcon.vue';
import UiTypography from '@/shared/ui/UiTypography.vue';

const { data } = defineProps<Props>();
</script>

<template>
  <nav class="header__navigation">
    <ul class="header__navigation-list">
      <li v-for="item in data" :key="item.label" class="item__list">
        <router-link :to="item.link" class="item">
          <UiIcon :type="item.icon" />
          <UiTypography tag-name="span" size="xs">{{ item.label }}</UiTypography>
          <span class="item__count" v-if="item.count > 0">{{ item.count }}</span>
        </router-link>
      </li>
    </ul>
  </nav>
</template>

<style scoped>
.header__navigation-list {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 24px;
}

.item {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  text-decoration: none;
  color: var(--main-surface-text);
}

.item__count {
  position: absolute;
  top: -6px;
  right: 6px;
  padding: 2px 4px;
  font-size: 12px;
  color: var(--main-primary-text);
  background-color: var(--main-primary);
  border-radius: 4px;
}
</style>
