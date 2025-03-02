<script setup lang="ts">
import { usePersonStore } from '@/entities/person/model/store';
import type { Props } from '@/shared/types/user-menu';
import UiAvatar from '@/shared/ui/UiAvatar.vue';
import UiButton from '@/shared/ui/UiButton.vue';
import UiIcon from '@/shared/ui/UiIcon.vue';
import UiTypography from '@/shared/ui/UiTypography.vue';
import { ref } from 'vue';

const personStore = usePersonStore();
const { setAuth } = personStore;

const { data } = defineProps<Props>();

const isOpen = ref(false);

const toggleMenu = () => {
  isOpen.value = !isOpen.value;
};

const onClickItem = (action: string) => {
  if (action === 'logout') setAuth(false);
};
</script>

<template>
  <div :class="['user-menu', `is-open_${isOpen}`]">
    <UiAvatar class="user-menu__avatar" :src="data.avatar" @click="toggleMenu" />
    <UiTypography class="user-menu__name" tag-name="span" size="s" @click="toggleMenu">{{
      data.name
    }}</UiTypography>
    <UiButton class="user-menu__button" decoration="none" @click="toggleMenu">
      <template v-slot:left-icon>
        <UiIcon type="chevron" />
      </template>
    </UiButton>
    <ul v-if="isOpen" class="user-menu__list">
      <li v-for="item in data.menu" :key="item.label" class="list__item">
        <router-link v-if="item.link" :to="item.link" class="item__link">
          <UiTypography tag-name="span" size="m" class="item__text">{{ item.label }}</UiTypography>
        </router-link>
        <UiTypography
          tag-name="span"
          size="m"
          class="item__text"
          v-else
          @click="() => onClickItem(item.action ?? '')"
          >{{ item.label }}</UiTypography
        >
      </li>
    </ul>
  </div>
</template>

<style scoped>
.user-menu {
  display: grid;
  grid-template-columns: max-content 1fr max-content;
  align-items: center;
  gap: 10px;
  padding: 8px;
  border-radius: 4px;
}

.user-menu.is-open_true {
  background-color: var(--main-surface);
  box-shadow: var(--shadow-default-s);
}

.user-menu__avatar,
.user-menu__name,
.user-menu__button {
  cursor: pointer;
}

.item__link {
  text-decoration: none;
}

.user-menu__list {
  display: grid;
  gap: 10px;
  grid-column: 1/4;
}

.list__item {
  padding: 8px;
  cursor: pointer;
  user-select: none;
}
</style>
