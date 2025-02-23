<script setup lang="ts">
import { useSlots, type Slots } from 'vue';
import type { Props } from '../types/field';

const slots: Slots = useSlots();
const {
  disabled,
  size = 'm',
  placeholder,
  onChange = () => {},
  onSubmit = () => {},
} = defineProps<Props>();
</script>

<template>
  <div
    :class="[
      'field',
      `disabled_${disabled}`,
      `size_${size}`,
      `left-icon_${Boolean(slots.leftIcon)}`,
      `right-icon_${Boolean(slots.rightIcon)}`,
    ]"
  >
    <slot name="label"></slot>
    <div class="field__container">
      <div v-if="slots.leftIcon" class="field__left-icon" @click="onSubmit">
        <slot class="left__icon" name="leftIcon"></slot>
      </div>
      <input
        @input="(input) => onChange((input.target as HTMLInputElement).value)"
        @keyup.enter="onSubmit"
        class="field__input"
        :placeholder="placeholder"
        type="text"
        :disabled="disabled"
      />
      <div v-if="slots.rightIcon" class="field__right-icon" @click="onSubmit">
        <slot class="right__icon" name="rightIcon"></slot>
      </div>
    </div>
  </div>
</template>

<style scoped>
.field :deep(.typography) {
  color: var(--grayscale-hard);
}

.field__input {
  width: 100%;
  border-radius: 4px;
  border: 1px solid var(--grayscale-light);
  background-color: var(--main-surface);
  transition: all 0.3 ease-in-out;
}

.field__input::placeholder {
  color: var(--grayscale-hard);
}

.field__input:focus {
  border: 1px solid var(--main-secondary);
  box-shadow: var(--shadow-secondary-m);
  caret-color: var(--main-secondary);
  transition: all 0.3 ease-in-out;
}

.field__input:disabled {
  border: 1px solid var(--grayscale-light);
  background-color: var(--grayscale-lightest);
}

.field__container {
  position: relative;
}

.field.size_m .field__input {
  padding: 8px 16px;
  font-size: 16px;
}

.field.size_l .field__input {
  padding: 12px 16px;
  font-size: 24px;
}

.field__left-icon,
.field__right-icon {
  position: absolute;
  cursor: pointer;
}

.field.left-icon_true.size_m .field__left-icon {
  top: 8px;
  left: 8px;
}

.field.left-icon_true.size_m .field__input {
  padding-left: 40px;
}

.field.right-icon_true.size_m .field__right-icon {
  top: 8px;
  right: 8px;
}

.field.right-icon_true.size_m .field__input {
  padding-right: 40px;
}

.field.left-icon_true.size_l .field__left-icon {
  top: 8px;
  left: 8px;
  padding: 6px;
}

.field.left-icon_true.size_l .field__input {
  padding-left: 56px;
}

.field.right-icon_true.size_l .field__right-icon {
  top: 8px;
  right: 8px;
  padding: 6px;
}

.field.right-icon_true.size_l .field__input {
  padding-right: 56px;
}
</style>
