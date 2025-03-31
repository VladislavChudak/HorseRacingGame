<template>
  <div class="race-lane__row" ref="trackRef">
    <div class="race-lane__number">{{ lane }}</div>
    <HorseIcon :progress="horse.progress" :trackWidth="trackWidth" :color="horse.color" />
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import HorseIcon from './HorseIcon.vue';

defineProps({
  lane: Number,
  horse: Object,
});

const trackRef = ref(null);
const trackWidth = ref(0);

onMounted(() => {
  if (trackRef.value) {
    trackWidth.value = trackRef.value.offsetWidth;
  }
});
</script>

<style lang="scss" scoped>
.race-lane__row {
  display: flex;
  align-items: center;
  position: relative;
  width: 100%;
  height: 60px;
  border-bottom: 1px dashed #aaa;
}

.race-lane__number {
  width: 60px;
  height: 40px;
  background-color: green;
  align-items: center;
  display: flex;
  justify-content: center;
  font-weight: bold;
  transform: rotate(-90deg);
  color: white;
  border-left: 1px solid white;
}
</style>
