<script setup lang="ts">
import { usePersonStore } from '@/entities/person/model';
import UserMenu from '@/features/header/UserMenu.vue';
import UiButton from '@/shared/ui/UiButton.vue';
import UiIcon from '@/shared/ui/UiIcon.vue';
import { storeToRefs } from 'pinia';

const personStore = usePersonStore();
const { person, isAuth } = storeToRefs(personStore);
</script>

<template>
  <ul class="bottom-tab-navigarot">
    <li>
      <div class="bottom-tab-navigarot__user-menu">
        <UserMenu v-if="isAuth" :data="userMenu" />
        <UiButton @click="onLogin" class="bottom-tab-navigarot__login-user" v-else color="primary">
          <template v-slot:right-icon>
            <UiIcon type="login" />
          </template>
          Войти
        </UiButton>
      </div>
    </li>
  </ul>
</template>

<style scoped>
.bottom-tab-navigarot {
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 56px;
  display: grid;
  align-items: center;
  padding: 0 16px;
  background-color: var(--main-surface);
  box-shadow: var(--shadow-default-s);
}
</style>
