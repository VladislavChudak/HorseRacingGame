import { defineStore } from 'pinia';
import { createRace } from '@/models/race/createRace';
import { useHorseStore } from '@/stores/horses/useHorseStore';
import { useResultsStore } from '@/stores/results/useResultsStore';

export const useRaceStore = defineStore('races', {
  state: () => ({
    raceSchedule: [],
    currentRaceIndex: 0,
    racesStarted: false,
    isRacePaused: false,
    lastFinishedRace: null,
  }),

  getters: {
    currentRace(state) {
      return state.raceSchedule[state.currentRaceIndex] || state.lastFinishedRace || null;
    },
  },

  actions: {
    generateSchedule() {
      const distances = [1200, 1400, 1600, 1800, 2000, 2200];
      this.raceSchedule = distances.map((distance, index) => createRace(index + 1, distance));
    },

    setHorsesToRaces(horses) {
      this.raceSchedule.forEach((race) => {
        race.assignHorses(horses);
      });
    },

    updateRaceProgress(race) {
      this.raceSchedule = this.raceSchedule.map((raceItem) =>
        raceItem.id === race.id ? race : raceItem
      );
    },

    startRace() {
      this.currentRaceIndex = 0;
      const resultsStore = useResultsStore();
      resultsStore.clearResults();
    },

    updateRaceIndex() {
      this.currentRaceIndex++;
    },

    setPauseStatus(value) {
      this.isRacePaused = value;
    },

    togglePause() {
      this.isRacePaused = !this.isRacePaused;
    },

    setRacesStarted(value) {
      this.racesStarted = value;
    },

    setLastFinishedRace(race) {
      this.lastFinishedRace = race;
    },

    initializeGame() {
      const horseStore = useHorseStore();
      horseStore.generateHorses();

      this.generateSchedule();
      this.setHorsesToRaces(horseStore.horses);
    },

    startNewRace() {
      this.startRace();
      this.runRace();
    },

    runRace() {
      if (this.currentRaceIndex >= this.raceSchedule.length) return;

      const race = this.raceSchedule[this.currentRaceIndex];
      race.startRace(this);
    },

    finalizeRace({ race, results }) {
      const resultsStore = useResultsStore();
      const horseStore = useHorseStore();

      resultsStore.setRaceResults({ race, results });
      this.setLastFinishedRace(race);
      this.updateRaceIndex();
      horseStore.resetHorsesProgress();
    },
  },
});
