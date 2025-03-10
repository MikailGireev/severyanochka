<script setup lang="ts">
import { usePersonStore } from '@/entities/person/model';
import AppNavigation from '@/features/header/AppNavigation.vue';
import UserMenu from '@/features/header/UserMenu.vue';
import UiButton from '@/shared/ui/UiButton.vue';
import UiContainer from '@/shared/ui/UiContainer.vue';
import UiIcon from '@/shared/ui/UiIcon.vue';
import { storeToRefs } from 'pinia';
import { reactive } from 'vue';

const personStore = usePersonStore();
const { person, isAuth } = storeToRefs(personStore);

const navItem = reactive([
  { label: 'Каталог', icon: 'menu', count: 0, link: '/favorites' },
  { label: 'Избранное', icon: 'favorite', count: 0, link: '/favorites' },
  { label: 'Заказы', icon: 'orders', count: 0, link: '/orders' },
  { label: 'Корзина', icon: 'cart', count: 1, link: '/cart' },
]);

const userMenu = reactive({
  avatar: person.value.avatar,
  name: person.value.name || 'Guest',
  menu: [
    { label: 'Профиль', link: '/profile' },
    { label: 'Выход', action: 'logout' },
  ],
});
</script>

<template>
  <div class="bottom-tab-navigarot">
    <UiContainer>
      <div class="bottom-tab-navigator__content">
        <AppNavigation :data="navItem" />
        <UserMenu v-if="isAuth" :data="userMenu" />
        <UiButton @click="onLogin" class="bottom-tab-navigarot__login-user" v-else color="primary">
          <template v-slot:right-icon>
            <UiIcon type="login" />
          </template>
          Войти
        </UiButton>
      </div>
    </UiContainer>
  </div>
</template>

<style scoped>
.bottom-tab-navigarot {
  position: fixed;
  bottom: 0;
  left: 0;
  display: none;
  width: 100%;
  padding: 0 16px;
  height: 56px;
  background-color: var(--main-surface);
  box-shadow: var(--shadow-default-s);
}

.bottom-tab-navigator__content {
  display: grid;
  padding-top: 3px;
  grid-template-columns: 1fr max-content;
  align-items: center;
  gap: 7%;
}

.bottom-tab-navigarot:deep(.header__navigation-list) {
  justify-content: space-between;
}

.bottom-tab-navigarot:deep(.header__navigation-list path) {
  fill: var(--main-surface-text);
}

.bottom-tab-navigarot:deep(.item) {
  gap: 4px;
}

.bottom-tab-navigarot:deep(.item__count) {
  top: -3px;
  right: -2px;
}

.bottom-tab-navigarot:deep(.user-menu) {
  position: relative;
  padding: 5px;
}

.bottom-tab-navigarot:deep(.user-menu__list) {
  position: absolute;
  bottom: 58px;
  right: 0;
  box-shadow: var(--shadow-default-s);
  border-radius: 5px;
  padding: 8px;
}

.bottom-tab-navigarot:deep(.user-menu.is-open__true) {
  box-shadow: unset;
}

@media screen and (max-width: 767px) {
  .bottom-tab-navigarot {
    display: flex;
  }
}
</style>
