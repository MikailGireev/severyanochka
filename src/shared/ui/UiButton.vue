<script setup lang="ts">
import { useSlots } from 'vue';
import type { Props } from '../types/button';
import UiTypography from './UiTypography.vue';

const {
  color = 'primary',
  size = 'M',
  decoration = 'default',
  disabled = false,
} = defineProps<Props>();

const slots = useSlots();

const classes = ['button', `color_${color}`, `size_${size}`, `decoration_${decoration}`];
</script>

<template>
  <button :class="classes" :disabled="disabled">
    <slot name="left-icon"></slot>
    <UiTypography v-if="slots.default" class="button__text" tag-name="p" size="s"
      ><slot></slot
    ></UiTypography>
    <slot name="right-icon"></slot>
  </button>
</template>

<style>
.button {
  display: flex;
  align-items: center;
  width: 100%;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

.button.size_M {
  gap: 8px;
  padding: 8px;
}

.button.color_secondary {
  background-color: var(--main-secondary);
}

.button.color_secondary .button__text {
  color: var(--main-secondary-text);
}

.button.color_primary {
  background-color: var(--main-primary);
}

.button.color_primary .button__text {
  color: var(--main-primary-text);
}

.button__text {
  width: 100%;
  text-align: center;
}

.button.decoration_none {
  background-color: unset;
  color: unset;
}

.button.decoration_none:deep(path) {
  fill: var(--main-surface-text);
}
</style>
