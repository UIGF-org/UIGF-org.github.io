<template>
  <div
    class="proj-card-badge"
    :style="{backgroundColor: getBgColor(props.bg)}"
    :title="props.label"
    v-if="!props.games"
  >
    <slot></slot>
  </div>
  <div v-else>
    <div class="proj-game-badge" :style="{backgroundColor: getBgColor(props.bg)}">
      <span>{{ props.label }}</span>
      <div class="proj-games">
        <div class="proj-game" v-for="game in props.games" :key="game">
          <div class="proj-game-lock" v-if="game.endsWith('_')">
            <i class="font-icon lock" />
          </div>
          <img :src="getGameIcon(game)" :alt="game" />
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
type PcbBgColor = "white" | "red" | "purple" | "blue" | "green" | "orange" | "unknown";
type PcbGameType = "ys" | "ys_" | "sr" | "sr_" | "zzz" | "zzz_"
type PcbProps = {
  bg: PcbBgColor;
  label?: string;
  games?: Array<PcbGameType>;
}

function getBgColor(bgColor: PcbBgColor): string {
  switch (bgColor) {
    case "white":
      return "#abb2bf";
    case "red":
      return "#de6a73";
    case "purple":
      return "#c678dd";
    case "blue":
      return "#61afef";
    case "green":
      return "#98c379";
    case "orange":
      return "#d19a66";
    default:
      return "var(--theme-color)";
  }
}

function getGameIcon(gameType: PcbGameType): string {
  if (gameType.startsWith("ys")) {
    return "/games/ys.webp";
  }
  if (gameType.startsWith("sr")) {
    return "/games/sr.webp";
  }
  return "/games/zzz.webp";
}

const props = withDefaults(defineProps<PcbProps>(), { bg: "unknown" });
</script>
<style lang="css" scoped>
.proj-card-badge,
.proj-game-badge {
  display: flex;
  font-size: 12px;
  height: 28px;
  transition: background-color 0.3s, color 0.3s;
  color: white;
  padding: 2px 6px;
  font-weight: bold;
}

.proj-card-badge {
  align-items: center;
  justify-content: center;
}

.proj-game-badge {
  align-items: center;
  justify-content: space-between;
  border-radius: 15px;
  column-gap: 1em;
}

.proj-games {
  display: flex;
  gap: 4px;
}

.proj-game {
  display: flex;
  align-items: center;
  gap: 4px;

  img {
    width: 20px;
    height: 20px;
    border-radius: 50%;
  }
}

.proj-game-lock {
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: rgb(0 0 0 / 50%);
}

.proj-game-lock i {
  font-size: 10px;
}
</style>