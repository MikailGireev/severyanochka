import { ref, reactive } from 'vue';
import { defineStore } from 'pinia';

export const usePersonStore = defineStore('counter', () => {
  const isAuth = ref(true);
  const person = reactive({
    name: 'Алексей',
  });

  const setAuth = (value: boolean) => (isAuth.value = value);

  return { isAuth, person, setAuth };
});
