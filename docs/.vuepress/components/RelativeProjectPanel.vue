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
  display: grid;
  gap: 0.8em;
  grid-template-columns: repeat(2, 1fr);
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
}
</style>
