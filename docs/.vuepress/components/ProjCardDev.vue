<template>
  <div class="proj-card-dev">
    <div class="proj-card-bg">
      <div class="proj-card-extra">
        <i class="iconfont icon-github" v-if="props.repo" @click="toRepo" :title="props.repo" />
        <i class="iconfont icon-link" v-if="props.site" @click="toSite" :title="props.site" />
      </div>
      <img :src="props.bg" alt="background" />
    </div>
    <div class="proj-card-content">
      <div class="proj-card-main">
        <img :src="props.icon" alt="icon" />
        <div class="proj-card-info">
          <div class="proj-card-title" :title="props.title" @click="toProj()">
            {{ props.title }}
          </div>
          <div class="proj-card-desc" :title="props.desc">{{ props.desc }}</div>
        </div>
      </div>
      <div v-if="props.import" class="proj-card-badge-box">
        <div class="proj-card-badge-title">{{ getImportTitle() }}</div>
        <div class="proj-card-badges">
          <slot name="import"></slot>
        </div>
      </div>
      <div v-if="props.export" class="proj-card-badge-box">
        <div class="proj-card-badge-title">{{ getExportTitle() }}</div>
        <div class="proj-card-badges">
          <slot name="export"></slot>
        </div>
      </div>
      <div class="proj-card-badges" v-if="!props.export && !props.import">
        <slot></slot>
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { computed, onMounted, ref } from "vue";
import { useLocalStorage } from "@vueuse/core";

interface ProjCardDevProps {
  bg: string;
  icon: string;
  title: string;
  desc: string;
  repo?: string;
  site?: string;
  import?: true;
  export?: true;
}

const props = defineProps<ProjCardDevProps>();
const lang = ref("zh-CN");

onMounted(() => {
  const path = window.location.pathname;
  lang.value = path.startsWith("/zh/") ? "zh-CN" : "en-US";
});

function getImportTitle() {
  return lang.value === "zh-CN" ? "导入支持：" : "Supported Import:";
}

function getExportTitle() {
  return lang.value === "zh-CN" ? "导出支持：" : "Supported Export:";
}

function isDarkTheme(): boolean | null {
  const theme = useLocalStorage<"auto" | "dark" | "light">("vuepress-theme-hope-scheme", "auto");
  if (theme.value === "auto" && typeof window === "undefined") return null;
  return theme.value === "auto"
    ? window.matchMedia("(prefers-color-scheme: dark)").matches
    : theme.value === "dark";
}

const contentBg = computed(() => {
  const theme = isDarkTheme();
  if (theme === null) return "transparent";
  return theme ? "#333333" : "#ffffff";
});
const shadowColor = computed(() => {
  const theme = isDarkTheme();
  if (theme === null) return "rgba(0,0,0,0.48)";
  return theme ? "rgba(255,223,0,0.48)" : "#d9d9d9";
});

function toRepo() {
  window.open(props.repo, "_blank");
}

function toSite() {
  window.open(props.site, "_blank");
}

function toProj() {
  window.open(props.site || props.repo, "_blank");
}
</script>
<style lang="css" scoped>
.proj-card-dev {
  position: relative;
  width: 100%;
  height: 100%;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 0 8px v-bind(shadowColor);
  display: flex;
  flex-direction: column;
  background: v-bind(contentBg);
  margin-bottom: 1.2em;
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
    transition: transform 0.3s linear;
  }

  img:hover {
    cursor: pointer;
    transform: scale(1.1);
    transition: transform 0.3s linear;
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
    box-shadow: 0 0 5px #000000;
  }

  i:hover {
    color: var(--theme-color);
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
    cursor: initial !important;
    pointer-events: none;
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
  cursor: pointer;
}

.proj-card-badge-box {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 0.5em;
}

.proj-card-badge-title {
  font-size: 1.2em;
  font-weight: bold;
}

.proj-card-badges {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-wrap: wrap;
  gap: 10px;
}
</style>
