<script setup lang="ts">
import type { Props } from '../types/typography';

defineProps<Props>();
</script>

<template>
  <component
    :is="tagName"
    :class="['typography', size ? `size_${size}` : '', bold ? 'bold' : '', `tag_${tagName}`]"
    ><slot></slot
  ></component>
</template>

<style scoped>
.typography {
  font-style: normal;
  line-height: 150%;
  color: var(--main-surface-text);
}

.bold {
  font-weight: 700;
}

/*size*/

.size_xs {
  font-size: 12px;
}

.size_s {
  font-size: 16px;
}

.size_m {
  font-size: 18px;
}

.size_l {
  font-size: 24px;
}
.size_xl {
  font-size: 36px;
}

/* tag-name */

.tag_h1 {
  font-size: 64px;
}

.tag_h2 {
  font-size: 48px;
}

.tag_h3 {
  font-size: 36px;
}

.tag_h4 {
  font-size: 24px;
}

.tag_h5 {
  font-size: 18;
}

@media screen and (max-width: 768px) {
  /*size*/

  .size_xs {
    font-size: 8px;
  }

  .size_s {
    font-size: 12px;
  }

  .size_m {
    font-size: 14px;
  }

  .size_l {
    font-size: 20px;
  }
  .size_xl {
    font-size: 32px;
  }

  /* tag-name */

  .tag_h1 {
    font-size: 48px;
  }

  .tag_h2 {
    font-size: 36px;
  }

  .tag_h3 {
    font-size: 24px;
  }

  .tag_h4 {
    font-size: 20px;
  }

  .tag_h5 {
    font-size: 16px;
  }
}
</style>
