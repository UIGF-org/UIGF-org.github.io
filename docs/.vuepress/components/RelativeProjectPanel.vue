<script setup lang="ts"></script>

<template>
  <div class="relative-project-panel"><slot></slot></div>
</template>

<style scoped lang="scss">
.relative-project-panel {
  display: grid;
  gap: 11px 8px;
  grid-template-columns: repeat(2, 1fr);
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
}
</style>
