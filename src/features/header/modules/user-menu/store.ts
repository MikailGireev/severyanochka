import { reactive } from 'vue';
import { defineStore } from 'pinia';
import type { UserMenu } from './types';

export const useUserMenuStore = defineStore('user-menu', () => {
  let menu = reactive<UserMenu>([
    { label: 'Профиль', link: '/profile' },
    { label: 'Выход', action: 'logout' },
  ]);

  const setMenu = (newMenu: UserMenu) => (menu = newMenu);

  return { menu, setMenu };
});
