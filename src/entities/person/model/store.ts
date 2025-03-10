import { ref, reactive } from 'vue';
import { defineStore } from 'pinia';
import avatarPng from '@/assets/avatar.png';
import type { Person } from './types';

export const usePersonStore = defineStore('person', () => {
  const isAuth = ref<boolean>(true);
  const person = reactive<Person>({
    avatar: avatarPng,
    name: 'Алексей',
  });

  const setAuth = (value: boolean) => (isAuth.value = value);

  return { isAuth, person, setAuth };
});
