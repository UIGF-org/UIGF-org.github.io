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
const hoverAreaStyle = ref<CSSProperties>({
})

// onMounted(() => {
//   hoverAreaElm.value!.addEventListener('mouseover', () => {
//     hoverAreaStyle.value.display = ''
//   })
//   hoverAreaElm.value!.addEventListener('mouseleave', () => {
//     hoverAreaStyle.value.display = 'none'
//   })
// })
</script>

<template>
  <div class="partnership-project" :style="containerStyle">
    <div class="content" ref="hoverAreaElm" :transparent="Boolean(props.preview)">
      <div class="blocker"></div>
      <a :href="props.url" :title="props.name" target="_blank" class="link" :style="hoverAreaStyle"></a>
      
      <img class="icon" :alt="props.name" :src="props.logo" v-if="props.logo" ref="logoElm" @error="$event.currentTarget.src = 'broken'">
      <h4 class="name">{{ props.name }}</h4>
      <span class="desc" v-if="props.desc">{{ props.desc }}</span>
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
      <span>{{ props.version }}</span>
    </div>
  </div>
</template>

<style scoped lang="scss">
$fallback-preview-color: #a09783;
$thirdparty-margin: 0.3em;
$thirdparty-item-size: 1.5em;
$version-margin: 0.35em;

.partnership-project {
  position: relative;
  width: calc(50% - 24px);
  height: 12em;
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
    position: absolute;
    bottom: $version-margin;
    left: $version-margin;
    background-color: rgba(47, 47, 47, 0.5);
    backdrop-filter: blur(10px) brightness(0.9);
    border-radius: 5px;
    overflow: hidden;
    color: #dae3e8;
    z-index: 1;
    padding: 0em 0.2em;

    span {
      font-size: 1.05rem;
      line-height: 1rem;
      word-break: keep-all;
      text-align: center;
      transform: translateY(-0.5px);
    }
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
          display: block;
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
    position: relative;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
    align-items: center;
    justify-content: center;
    padding: 0 0.4em;
    z-index: 1;
    transition-duration: 0.5s;

    &:hover[transparent="true"] {
      opacity: 0;

      > *:not(.link) {
        pointer-events: none;
        user-select: none;
      }
    }

    .link {
      width: 100%;
      height: 100%;
      position: absolute;
    }

    .blocker {
      background-color: rgba(0, 0, 0, 0.65);
      position: absolute;
      width: 100%;
      height: 100%;
      pointer-events: none;
      z-index: -1;
    }
    
    > * {
      font-family: Arial, Helvetica, sans-serif;
      text-align: center;
    }

    .icon {
      width: 3em;
      margin-bottom: -1em;
      border-radius: 5px;
      display: block;

      &[src="broken"] {
        display: none;
      }
    }

    .name {
      font-size: 1.35rem;
      color: #fff;
      font-weight: 800;
      padding-bottom: 2px;
      border-bottom: 1px solid #aaa;
      margin-bottom: 0.8em;
    }

    .desc {
      font-size: 0.97rem;
      color: #a7a7b6;
      word-break: break-all;
    }
  }
}

ul {
  margin: 0;
  padding: 0;
  list-style: none;
}
</style>