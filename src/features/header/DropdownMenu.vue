<script lang="ts" setup>
import { useCatalogStore } from '@/entities/catalog/model';
import UiContainer from '@/shared/ui/UiContainer.vue';
import UiTypography from '@/shared/ui/UiTypography.vue';

const catalogStore = useCatalogStore();
const { catalogSections } = catalogStore;
</script>

<template>
  <div class="dropdown-menu">
    <UiContainer>
      <ul class="dropdown-menu-list">
        <li v-for="section in catalogSections" :key="section.label" class="list__item">
          <router-link :to="section.link">
            <UiTypography size="s" bold tag-name="span" class="item__text">{{
              section.label
            }}</UiTypography>
          </router-link>
        </li>
      </ul>
    </UiContainer>
  </div>
</template>

<style scoped>
.dropdown-menu {
  position: fixed;
  top: -5000px;
  left: 0;
  width: 100%;
  background-color: var(--main-surface);
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.15);
  animation: 0.5s 1 forwards slideDown;
  opacity: 0;
}

.dropdown-menu-list {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  row-gap: 24px;
  column-gap: 40px;
  padding: 40px 0;
}

.item__text:hover {
  color: var(--main-primary);
}

@keyframes slideDown {
  from {
    top: 0;
    opacity: 0;
  }
  to {
    top: 73px;
    opacity: 1;
  }
}
</style>
