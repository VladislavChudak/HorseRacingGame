<template>
  <div class="horse__icon" :style="style">
    <HorseSvg class="horse__icon-svg" :style="{ fill: color }" />
  </div>
</template>

<script setup>
import { computed } from 'vue';
import HorseSvg from '@/assets/horse.svg';

const props = defineProps({
  progress: Number,
  trackWidth: Number,
  color: String,
});

const transformValue = computed(() => (props.progress / 100) * props.trackWidth);
const style = computed(() => {
  const isReset = props.progress === 0;

  return {
    transform: `translateX(${transformValue.value}px)`,
    transition: isReset ? 'none' : 'transform 0.2s linear',
  };
});
</script>

<style lang="scss" scoped>
.horse__icon {
  position: absolute;
  left: 0;
  transition: transform 0.2s linear;
  will-change: transform;
}

.horse__icon-svg {
  width: 40px;
  height: 40px;
}
</style>
