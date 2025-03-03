<script lang="ts" setup>
import UiContainer from '@/shared/ui/UiContainer.vue';
import UiTypography from '@/shared/ui/UiTypography.vue';
</script>

<template>
  <div class="dropdown-menu">
    <UiContainer>
      <ul class="dropdown-menu-list">
        <li class="list__item">
          <router-link to="/">
            <UiTypography size="s" bold tag-name="span" class="item__text">test</UiTypography>
          </router-link>
        </li>
      </ul>
    </UiContainer>
  </div>
</template>

<style scoped>
.dropdown-menu {
  position: fixed;
  top: 73px;
  left: 0;
  width: 100%;
  background-color: var(--main-surface);
  box-shadow: 0px 8px 16px 9px rgba(0, 0, 0, 0.15);
}

.dropdown-menu-list {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  row-gap: 24px;
  column-gap: 40px;
  padding: 40px 0;
}
</style>
