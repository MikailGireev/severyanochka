<template>
  <div class="container"><slot></slot></div>
</template>

<style>
.container {
  max-width: 1208px;
  margin: 0 auto;
}

@media screen and (max-width: 1207px) {
  .container {
    max-width: 768px;
  }
}
</style>
