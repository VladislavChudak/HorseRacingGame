import { MAX_HORSES_PER_RACE } from './constants';
import { selectRandomHorses } from './utils';
import { runRaceSimulation } from './simulator';

export function createRace(id, distance) {
  return {
    id,
    distance,
    isOngoing: false,
    horses: [],

    assignHorses(availableHorses) {
      this.horses = selectRandomHorses(availableHorses, MAX_HORSES_PER_RACE);
      this.horses.forEach((h) => h.resetProgress?.());
    },

    startRace(store) {
      store.setRacesStarted(true);

      runRaceSimulation(this, store);
    },
  };
}
