<script setup lang="ts">
import { computed, onMounted, ref } from "vue";
import { useLocalStorage } from "@vueuse/core";

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

const theme = useLocalStorage<"auto" | "dark" | "light">("vuepress-theme-hope-scheme", "auto");
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
}>>();

function processImgUrl(url: string | undefined) {
  if (!url) {
    return undefined;
  }

  const tempUrl = url.toLowerCase();
  const origin = window.location.origin;
  if (tempUrl.startsWith("/")) {
    return `${origin}${url}`;
  } else if (tempUrl.startsWith("http")) {
    return url;
  } else {
    return `${origin}/${url}`;
  }
}

const themeCss = computed<string>(() => {
  if (theme.value !== "auto") return theme.value;
  if (window.matchMedia("(prefers-color-scheme: dark)").matches) return "dark";
  return "light";
});

onMounted(() => {
  imgs.value = {
    preview: processImgUrl(props.preview),
    logo: processImgUrl(props.logo),
  };
});
</script>

<template>
  <ClientOnly>
    <div class="partnership-project" :style="{
    backgroundImage: `url('${imgs?.preview}')`,
  }" :theme="themeCss">
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
  </ClientOnly>
</template>

<style scoped lang="scss">
$fallback-preview-color: #a09783;
$fallback-preview-color-light: #bab3b8;
$thirdparty-item-size: 1.5em;
$transition-duration: 0.8s;
$version-margin: 0.35em;
$left-margin: 0.7em;
$main-lt-size: 1.9em;

.partnership-project {
  &[theme='light'] {
    background-color: $fallback-preview-color-light;
    box-shadow: 2px 2px 5px 2px rgb(0 0 0 / 15%);

    .content {
      .blocker {
        background-color: rgba(255, 255, 255, 0.63);
      }

      .main-center {
        .info {
          .name {
            color: #222222;
            border-bottom: 1px solid #000;
          }

          .desc {
            color: mix(#000000, #777777);
          }
        }
      }

      .main-lt {
        background-color: rgba(253, 249, 243, 0.6);
        backdrop-filter: blur(6px) brightness(0.8);

        .name {
          color: #353637;
        }
      }
    }
  }

  position: relative;
  aspect-ratio: 16 / 9;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-color: $fallback-preview-color;
  border-radius: 0.5em;
  overflow: hidden;
  display: flex;
  justify-content: center;
  z-index: 0;

  .version {
    $font-size: 1.05rem;

    background: #0052D4; /* fallback for old browsers */
    background: -webkit-linear-gradient(to right, #6FB1FC, #4364F7, #0052D4); /* Chrome 10-25, Safari 5.1-6 */
    background: linear-gradient(to right, #6FB1FC, #4364F7, #0052D4); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
    color: #ffffff;
    backdrop-filter: blur(12px) brightness(0.9);
    position: absolute;
    bottom: $left-margin;
    left: $left-margin;
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
  }

  .thirdparty {
    position: absolute;
    bottom: $left-margin;
    right: $left-margin;
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
          background-color: rgb(246, 246, 246);
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
      backdrop-filter: blur(1px);
      position: absolute;
      width: 100%;
      height: 100%;
      pointer-events: none;
      z-index: -1;
    }

    * {
      transition: all 0.3s linear;
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
        max-width: calc(100% - 2 * $left-margin);
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
          color: mix(#ffffff, #999999);
          word-break: keep-all;
          max-width: 100%;
          overflow: hidden;
          text-overflow: ellipsis;
          font-weight: 700;
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
      background-color: rgba(13, 17, 23, 0.4);
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
