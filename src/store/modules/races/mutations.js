import { createRace } from '@/models/race/createRace';

export default {
  generateSchedule(state) {
    const distances = [1200, 1400, 1600, 1800, 2000, 2200];
    state.raceSchedule = distances.map((distance, index) => createRace(index + 1, distance));
  },

  setHorsesToRaces(state, horses) {
    state.raceSchedule.forEach((race) => {
      race.assignHorses(horses);
    });
  },

  updateRaceProgress(state, race) {
    state.raceSchedule = state.raceSchedule.map((raceItem) =>
      raceItem.id === race.id ? race : raceItem
    );
  },

  startRace(state) {
    state.currentRaceIndex = 0;
    state.results = [];
  },

  updateRaceIndex(state) {
    state.currentRaceIndex++;
  },

  setPauseStatus(state, value) {
    state.isRacePaused = value;
  },

  setRacesStarted(state, value) {
    state.racesStarted = value;
  },

  setLastFinishedRace(state, race) {
    state.lastFinishedRace = race;
  },
};
