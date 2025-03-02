<script setup lang="ts">
import AppNavigation from '@/features/header/AppNavigation.vue';

import UserMenu from '@/features/header/UserMenu.vue';
import UiButton from '@/shared/ui/UiButton.vue';
import UiContainer from '@/shared/ui/UiContainer.vue';
import UiField from '@/shared/ui/UiField.vue';
import UiIcon from '@/shared/ui/UiIcon.vue';
import UiLogo from '@/shared/ui/UiLogo.vue';

import { reactive } from 'vue';

const personStore = usePersonStore();
const { person, isAuth } = storeToRefs(personStore);
const { setAuth } = personStore;

import avatarPng from '@/assets/avatar.png';
import { usePersonStore } from '@/entities/person/model/store';
import { storeToRefs } from 'pinia';

const navItem = reactive([
  { label: 'Избранное', icon: 'favorite', count: 0, link: '/favorites' },
  { label: 'Заказы', icon: 'orders', count: 0, link: '/orders' },
  { label: 'Корзина', icon: 'cart', count: 1, link: '/cart' },
]);

const userMenu = reactive({
  avatar: avatarPng,
  name: person.value.name,
  menu: [
    { label: 'Профиль', link: '/profile' },
    { label: 'Выход', action: 'logout' },
  ],
});

const onChangeSearch = (value: string) => {
  console.log(value);
};

const onSearch = () => console.log('SEND');
const onLogin = () => setAuth(true);
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
      <div class="header__search">
        <UiField placeholder="Найти товар" size="m" :onChange="onChangeSearch" :onSubmit="onSearch">
          <template v-slot:rightIcon
            ><svg
              width="24.000000"
              height="24.000000"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink"
            >
              <desc>Created with Pixso.</desc>
              <defs />
              <rect
                id="feather-icon / search"
                rx="0.000000"
                width="23.000000"
                height="23.000000"
                transform="translate(0.500000 0.500000)"
                fill="#FFFFFF"
                fill-opacity="0"
              />
              <path
                id="Oval (Stroke)"
                d="M2.5 10.5C2.5 6.08 6.08 2.5 10.5 2.5C14.91 2.5 18.5 6.08 18.5 10.5C18.5 14.91 14.91 18.5 10.5 18.5C6.08 18.5 2.5 14.91 2.5 10.5ZM10.5 3.5C6.63 3.5 3.5 6.63 3.5 10.5C3.5 14.36 6.63 17.5 10.5 17.5C14.36 17.5 17.5 14.36 17.5 10.5C17.5 6.63 14.36 3.5 10.5 3.5Z"
                fill="#414141"
                fill-opacity="1.000000"
                fill-rule="evenodd"
              />
              <path
                id="Shape (Stroke)"
                d="M15.44 15.44C15.64 15.25 15.95 15.25 16.15 15.44L21.35 20.64C21.54 20.84 21.54 21.15 21.35 21.35C21.15 21.54 20.84 21.54 20.64 21.35L15.44 16.15C15.25 15.95 15.25 15.64 15.44 15.44Z"
                fill="#414141"
                fill-opacity="1.000000"
                fill-rule="evenodd"
              />
            </svg>
          </template>
        </UiField>
      </div>
      <div class="header__navigation">
        <AppNavigation :data="navItem" />
      </div>
      <div class="header__user-menu">
        <UserMenu v-if="isAuth" :data="userMenu" />
        <UiButton @click="onLogin" class="header__login-user" v-else color="primary">
          <template v-slot:right-icon>
            <UiIcon type="login" />
          </template>
          Войти
        </UiButton>
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

.header__search {
  width: 374px;
  margin-left: 16px;
}

.header__navigation {
  margin-left: 40px;
}

.header__user-menu {
  position: relative;
  margin-left: 24px;
  width: 217px;
}

.header__login-user {
  width: 157px;
}

.header__user-menu:deep(.user-menu) {
  position: absolute;
  top: -28px;
  left: 0;
}
</style>
