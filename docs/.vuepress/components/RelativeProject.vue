<script setup lang="ts">
import { CSSProperties, onMounted, ref } from 'vue';

enum ThirdpartyType {
  github,
  gitee,
  gitlab,
  other
}
type Thirdparty = keyof typeof ThirdpartyType

const props = withDefaults(defineProps<{
  name: string
  desc?: string
  url: string
  logo?: string
  thirdparty?: {
    type: Thirdparty
    url: string
    tip?: string
  }[]
  preview?: string
  version?: string
}>(), {})

const icons: Record<Thirdparty, string> = {
  github: 'github',
  gitlab: 'gitlab',
  gitee: 'gitee',
  other: 'arrow'
}
const titles: Record<Thirdparty, string> = {
  gitee: '源代码',
  github: '源代码',
  gitlab: '源代码',
  other: '第三方站点'
}

const containerStyle = ref<CSSProperties>({
  backgroundImage: `url("${props.preview}")`,
})

const hoverAreaElm = ref<HTMLElement>()
const hoverAreaStyle = ref<CSSProperties>({})

onMounted(() => {
})

function toOuter(url: string) {
  window.open(url, "_blank");
}

function brokenImage(ev: Event) {
  (<HTMLImageElement>ev.currentTarget).style.display = 'none'
}
</script>

<template>
  <div class="partnership-project" :style="containerStyle">
    <div class="content" ref="hoverAreaElm" :transparent="Boolean(props.preview)" :title="props.name" @click="toOuter(props.url)">
      <div class="blocker"></div>

      <!-- hover 时消失 -->
      <div class="main-center">
        <img class="icon" :alt="props.name" :src="props.logo" v-if="props.logo" @error="brokenImage">
        <div class="info">
          <div class="name">{{ props.name }}</div>
          <span class="desc" v-if="props.desc">{{ props.desc }}</span>
        </div>
      </div>

      <!-- hover 时出现 -->
      <div class="main-lt">
        <img class="icon" :alt="props.name" :src="props.logo" v-if="props.logo" @error="brokenImage">
        <div class="name">{{ props.name }}</div>
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
$main-lt-margin: 1em;

.partnership-project {
  position: relative;
  aspect-ratio: 16 / 9;
  background-size: cover;
  background-repeat: no-repeat;
  background-color: $fallback-preview-color;
  margin: 8px 11px;
  border-radius: 8px;
  overflow: hidden;
  display: inline-flex;
  justify-content: center;
  z-index: 0;

  .version {
    display: flex;
    flex-wrap: nowrap;
    justify-content: center;
    align-items: center;
    max-width: 48%;
    position: absolute;
    bottom: $version-margin;
    left: $version-margin;
    background-color: rgba(47, 47, 47, 0.5);
    backdrop-filter: blur(10px) brightness(0.9);
    border-radius: 5px;
    overflow: hidden;
    height: calc(1rem + 0.2em);
    z-index: 1;
    padding: 0.1em 0.2em;
    pointer-events: none;
    user-select: none;
    color: #dae3e8;
    text-overflow: ellipsis;
    font-size: 1.05rem;
    word-break: keep-all;
    line-height: 1rem;
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
      overflow: hidden;
      display: flex;
      flex-direction: column;
      flex-wrap: wrap;
      align-items: center;
      justify-content: center;
      border-radius: 5px;
      column-gap: 1.2em;

      .icon {
        height: 3.5em;
        border-radius: 5px;
        display: block;
      }

      .info {
        position: relative;
        display: flex;
        flex-direction: column;
        flex-wrap: wrap;
        margin-top: 1em;
        padding: 0 0.1em;
        
        .name {
          width: 100%;
          overflow: hidden;
          font-size: 1.35rem;
          color: #effefa;
          font-weight: 800;
          border-bottom: 1px solid #aaa;
          width: auto;
          text-overflow: ellipsis;
        }

        .desc {
          font-size: 0.97rem;
          color: #a7a7b6;
          word-break: break-all;
          text-overflow: ellipsis;
        }
      }
    }

    .main-lt {
      opacity: 0;
      position: absolute;
      top: $main-lt-margin;
      left: $main-lt-margin;
      height: 40px;
      background-color: rgba(50, 50, 50, 0.4);
      backdrop-filter: blur(8px) brightness(0.8);
      display: flex;
      justify-content: flex-start;
      align-items: center;
      padding: 0.4em;
      border-radius: 5px;
      box-shadow: 0 0 5px rgba(255, 255, 255, 0.65);
    
      .icon {
        border-radius: 5px;
        height: 2em;
        margin-right: 0.5em;
      }
      
      .name {
        font-size: 1.1rem;
        border: none;
        color: #ebeaeb;
        overflow: hidden;
        text-overflow: ellipsis;
        word-break: keep-all;
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
}
</style>