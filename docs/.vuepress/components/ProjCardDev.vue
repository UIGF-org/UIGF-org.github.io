<template>
  <div class="proj-card-dev">
    <div class="proj-card-bg">
      <div class="proj-card-extra">
        <i class="iconfont icon-github" @click="toRepo" :title="props.repo" />
        <i class="iconfont icon-link" @click="toSite" :title="props.site" />
      </div>
      <img :src="props.bg" alt="background" />
    </div>
    <div class="proj-card-content">
      <div class="proj-card-main">
        <img :src="props.icon" alt="icon" />
        <div class="proj-card-info">
          <div class="proj-card-title">{{ props.title }}</div>
          <div class="proj-card-desc">{{ props.desc }}</div>
        </div>
      </div>
      <div class="proj-card-badges">
        <slot></slot>
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { computed } from "vue";
import { useLocalStorage } from "@vueuse/core";

interface ProjCardDevProps {
  bg: string;
  icon: string;
  title: string;
  desc: string;
  repo: string;
  site: string;
}

const props = defineProps<ProjCardDevProps>();

function isDarkTheme(): boolean {
  const theme = useLocalStorage<"auto" | "dark" | "light">("vuepress-theme-hope-scheme", "auto");
  return theme.value === "auto"
    ? window.matchMedia("(prefers-color-scheme: dark)").matches
    : theme.value === "dark";
}

const contentBg = computed(() => {
  const theme = isDarkTheme();
  return theme ? "#333333" : "#ffffff";
});
const shadowColor = computed(() => {
  const theme = isDarkTheme();
  return theme ? "#114514" : "#d9d9d9";
});

function toRepo() {
  window.open(props.repo, "_blank");
}

function toSite() {
  window.open(props.site, "_blank");
}
</script>
<style lang="css" scoped>
.proj-card-dev {
  position: relative;
  width: 100%;
  height: 100%;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 0 5px v-bind(shadowColor);
  display: flex;
  flex-direction: column;
  background: v-bind(contentBg);
}

.proj-card-bg {
  position: relative;
  width: 100%;
  aspect-ratio: 2 / 1;
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
}

.proj-card-extra {
  position: absolute;
  bottom: 0;
  right: 0;
  display: flex;
  padding: 5px;
  column-gap: 5px;

  i {
    background: white;
    padding: 5px;
    border-radius: 50%;
    cursor: pointer;
    color: black;
  }

  i:hover {
    color: var(--theme-color)
  }
}

.proj-card-content {
  padding: 1em;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  row-gap: 1em;
}

.proj-card-main {
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  column-gap: 12px;

  img {
    width: 4em;
    height: 4em;
    border-radius: 8px;
  }
}

.proj-card-info {
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 0.5em;
}

.proj-card-title {
  font-size: 1.5em;
  font-weight: bold;
}

.proj-card-badges {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-wrap: wrap;
  gap: 4px;
}
</style>
