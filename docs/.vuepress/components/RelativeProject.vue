<script setup lang="ts">
import { CSSProperties, onMounted, ref, watch } from "vue";

enum ThirdpartyType {
  github,
  gitee,
  gitlab,
  other,
}

type Thirdparty = keyof typeof ThirdpartyType;

interface ProjectProps {
  name: string;
  desc?: string;
  url: string;
  logo?: string;
  thirdparty?: {
    type: Thirdparty;
    url: string;
    tip?: string;
  }[];
  preview?: string;
  version?: string;
}

const props = defineProps<ProjectProps>();

const icons: Record<Thirdparty, string> = {
  github: "github",
  gitlab: "gitlab",
  gitee: "gitee",
  other: "arrow",
};
const titles: Record<Thirdparty, string> = {
  gitee: "源代码",
  github: "源代码",
  gitlab: "源代码",
  other: "第三方站点",
};

function toOuter(url: string) {
  window.open(url, "_blank");
}

function brokenImage(ev: Event) {
  (<HTMLImageElement>ev.currentTarget).style.display = "none";
}

const imgs = ref<Partial<{
  preview: string
  logo: string
}>>()
function processImgUrl(url: string | undefined) {
  if (!url) {
    return undefined
  }

  const tempUrl = url.toLowerCase()
  const origin = window.location.origin
  if (tempUrl.startsWith('/')) {
    return `${origin}${url}`
  }
  else if (tempUrl.startsWith('http')) {
    return url
  }
  else {
    return `${origin}/${url}`
  }
}
function processImgs() {
  imgs.value = {
    preview: processImgUrl(props.preview),
    logo: processImgUrl(props.logo)
  }
}
watch(props, processImgs)
onMounted(processImgs)
</script>

<template>
  <div class="partnership-project" :style="{
    backgroundImage: `url('${imgs?.preview}')`,
  }">
    <div class="content" :transparent="Boolean(imgs?.preview)" :title="props.name" @click="toOuter(props.url)">
      <div class="blocker"></div>

      <!-- hover 时消失 -->
      <div class="main-center">
        <img class="icon" :alt="props.name" :src="imgs.logo" v-if="imgs?.logo" @error="brokenImage">
        <div class="info">
          <div class="name" :title="props.name">{{ props.name }}</div>
          <span class="desc" v-if="props.desc" :title="props.desc">{{ props.desc }}</span>
        </div>
      </div>

      <!-- hover 时出现 -->
      <div class="main-lt">
        <img class="icon" :alt="props.name" :src="imgs.logo" v-if="imgs?.logo" @error="brokenImage">
        <div class="name" :title="props.name">{{ props.name }}</div>
      </div>
    </div>

    <div class="thirdparty" v-if="props.thirdparty">
      <ul>
        <li v-for="(platform, i) in props.thirdparty" :key="i">
          <a :href="platform.url" :title="platform.tip ?? titles[platform.type]" target="_blank">
            <i :class="`iconfont icon-${icons[platform.type]}`"></i>
          </a>
        </li>
      </ul>
    </div>

    <div class="version" v-if="props.version">
      {{ props.version }}
    </div>
  </div>
</template>

<style scoped lang="scss">
$fallback-preview-color: #a09783;
$thirdparty-margin: 0.3em;
$thirdparty-item-size: 1.5em;
$transition-duration: 0.8s;
$version-margin: 0.35em;
$left-margin: 0.2em;
$main-lt-size: 1.9em;

.partnership-project {
  position: relative;
  aspect-ratio: 16 / 9;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-color: $fallback-preview-color;
  border-radius: 8px;
  overflow: hidden;
  display: inline-flex;
  justify-content: center;
  z-index: 0;

  .version {
    $font-size: 1.05rem;

    position: absolute;
    bottom: $left-margin;
    left: $left-margin;
    background-color: rgba(50, 50, 50, 0.4);
    backdrop-filter: blur(10px) brightness(0.75);
    border-radius: 5px;
    z-index: 1;
    padding: 0.1em 0.2em;
    pointer-events: none;
    display: block;
    line-height: 1rem;
    height: $font-size;
    font-size: $font-size;
    text-align: center;
    word-break: keep-all;
    user-select: none;
    color: #dae3e8;
  }

  .thirdparty {
    position: absolute;
    bottom: $thirdparty-margin;
    right: $thirdparty-margin;
    z-index: 1;

    > ul {
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      gap: 0.5em;

      > li {
        a {
          width: $thirdparty-item-size;
          height: $thirdparty-item-size;
          line-height: $thirdparty-item-size;
          border-radius: 50%;
          overflow: hidden;
          display: flex;
          justify-content: center;
          align-items: center;
          background-color: white;
          text-align: center;

          .iconfont {
            font-size: 1.2rem;
            color: #220533;
          }
        }
      }
    }
  }

  .content {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
    align-items: center;
    justify-content: center;
    padding: 0 0.4em;
    z-index: 1;
    cursor: pointer;

    &:hover[transparent="true"] {
      .blocker,
      .main-center {
        opacity: 0;
      }

      .main-lt {
        opacity: 1;
      }
    }

    .blocker {
      background-color: rgba(0, 0, 0, 0.65);
      position: absolute;
      width: 100%;
      height: 100%;
      pointer-events: none;
      z-index: -1;
    }

    * {
      transition: all $transition-duration ease;
      font-family: Arial, Helvetica, sans-serif;
      text-align: center;
      user-select: none;
    }

    .main-center {
      position: absolute;
      width: 100%;
      height: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;

      .icon {
        // todo: width 小于 300 时会出现问题
        max-height: calc(100% - 4rem);
        height: 3.5em;
        aspect-ratio: 1 / 1;
        border-radius: 5px;
        margin: 0 auto;
      }

      .info {
        position: relative;
        max-width: calc(100% - 0.4em);
        display: flex;
        flex-direction: column;
        flex-wrap: wrap;
        margin: 0 0.2em;

        .name {
          white-space: nowrap;
          width: 100%;
          overflow: hidden;
          font-size: 1.35rem;
          color: #effefa;
          font-weight: 800;
          border-bottom: 1px solid #aaa;
          text-overflow: ellipsis;
        }

        .desc {
          white-space: nowrap;
          font-size: 0.97rem;
          color: #a7a7b6;
          word-break: keep-all;
          max-width: 100%;
          overflow: hidden;
          text-overflow: ellipsis;
        }
      }
    }

    .main-lt {
      opacity: 0;
      position: absolute;
      max-width: calc(50% + #{$main-lt-size} - #{$left-margin});
      top: $left-margin;
      left: $left-margin;
      max-height: $main-lt-size;
      height: auto;
      background-color: rgba(50, 50, 50, 0.4);
      backdrop-filter: blur(8px) brightness(0.8);
      display: flex;
      justify-content: flex-start;
      align-items: center;
      padding: 0.3em;
      column-gap: 0.3em;
      border-radius: 5px;
      box-shadow: 0 0 0.1em rgba(255, 255, 255, 0.65);

      .icon {
        border-radius: 5px;
        height: $main-lt-size;
        width: $main-lt-size;
      }

      .name {
        font-size: 1.1rem;
        color: #ebeaeb;
        overflow: hidden;
        text-overflow: ellipsis;
        word-break: keep-all;
        white-space: nowrap;
      }
    }
  }
}

ul {
  margin: 0;
  padding: 0;
  list-style: none;
}

img {
  cursor: initial !important;
  pointer-events: none;
}

a {
  text-decoration: none;

  &:hover {
    text-decoration: none;
  }
}
</style>
