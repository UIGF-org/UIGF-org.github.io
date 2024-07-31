<script setup lang="ts">
import { onMounted } from "vue";
import { useLocalStorage } from "@vueuse/core";

const theme = useLocalStorage<"auto" | "dark" | "light">("vuepress-theme-hope-scheme", "auto");

onMounted(() => {
  window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change", () => {
    if (theme.value === "auto") {
      window.location.reload();
    }
  });
});
</script>

<template>
  <div class="relative-project-panel">
    <slot></slot>
  </div>
</template>

<style scoped lang="scss">
.relative-project-panel {
  column-count: 2;
  gap: 1.2em;
  @media (max-width: 768px) {
    column-count: 1;
  }
}
</style>
