<script setup lang="ts">
import type { Props } from '@/shared/types/user-menu';
import UiAvatar from '@/shared/ui/UiAvatar.vue';
import UiButton from '@/shared/ui/UiButton.vue';
import UiIcon from '@/shared/ui/UiIcon.vue';
import UiTypography from '@/shared/ui/UiTypography.vue';

const { data } = defineProps<Props>();
</script>

<template>
  <div class="user-menu">
    <UiAvatar class="user-menu__avatar" :src="data.avatar" />
    <UiTypography class="user-menu__name" tag-name="span" size="s">{{ data.name }}</UiTypography>
    <UiButton class="user-menu__button" decoration="none">
      <template v-slot:left-icon>
        <UiIcon type="chevron" />
      </template>
    </UiButton>
  </div>
</template>

<style scoped>
.user-menu {
  display: grid;
  grid-template-columns: max-content 1fr max-content;
  align-items: center;
  gap: 10px;
  padding: 8px;
}

.user-menu__avatar,
.user-menu__name,
.user-menu__button {
  cursor: pointer;
}
</style>
