<template>
  <div class="game-layout">
    <div class="game-layout__content-wrapper">
      <aside class="game-layout__left-sidebar">
        <HorsePanel />
      </aside>

      <main class="game-layout__main-content">
        <ControlPanel />
        <RaceTrack />
      </main>
    </div>

    <aside class="game-layout__right-sidebar">
      <SchedulePanel />
      <ResultsPanel />
    </aside>
  </div>
</template>

<script setup>
import HorsePanel from '@/components/tables/HorsePanel.vue';
import SchedulePanel from '@/components/tables/SchedulePanel.vue';
import ResultsPanel from '@/components/tables/ResultsPanel.vue';
import ControlPanel from '@/components/controls/ControlPanel.vue';
import RaceTrack from '@/components/track/RaceTrack.vue';
</script>

<style scoped>
.game-layout {
  display: flex;
  flex-direction: row;
  gap: 30px;
  flex-wrap: nowrap;
  align-items: flex-start;
}

.game-layout__content-wrapper {
  display: flex;
  flex-direction: row;
  flex: 1;
  gap: 20px;
}

.game-layout__left-sidebar {
  flex: 0 0 20%;
  display: flex;
  flex-direction: column;
  gap: 12px;
  max-height: 100vh;
}

.game-layout__main-content {
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
}

.game-layout__right-sidebar {
  flex: 0 0 30%;
  display: flex;
  gap: 12px;
  max-height: 100vh;
}

@media (max-width: 1024px) {
  .game-layout {
    flex-direction: column;
  }

  .game-layout__content-wrapper {
    flex-direction: column-reverse;
    width: 100%;
  }

  .game-layout__left-sidebar,
  .game-layout__right-sidebar,
  .game-layout__main-content {
    flex: 0 0 auto;
    width: 100%;
    max-height: none;
  }

  .game-layout__left-sidebar,
  .game-layout__right-sidebar {
    flex-wrap: wrap;
  }
}
</style>
