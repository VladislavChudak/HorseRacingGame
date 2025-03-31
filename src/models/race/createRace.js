import { MAX_HORSES_PER_RACE } from './constants';
import { selectRandomHorses } from './utils';
import { runRaceSimulation } from './simulator';

/**
 * Creates a race object with assigned distance and methods to manage the race flow.
 *
 * @param {number|string} id - Unique identifier for the race.
 * @param {number} distance - Distance of the race in meters.
 * @returns {{
 *   id: number|string,
 *   distance: number,
 *   isOngoing: boolean,
 *   horses: Array<Object>,
 *   assignHorses: (availableHorses: Array<Object>) => void,
 *   startRace: (store: Object) => void
 * }}
 *   A race object containing metadata and race control methods.
 */

export function createRace(id, distance) {
  return {
    id,
    distance,
    isOngoing: false,
    horses: [],

    /**
     * Assigns a random set of horses to the race.
     * Resets their progress before the race begins.
     *
     * @param {Array<Object>} availableHorses - All horses to choose from.
     */

    assignHorses(availableHorses) {
      this.horses = selectRandomHorses(availableHorses, MAX_HORSES_PER_RACE);
      this.horses.forEach((h) => h.resetProgress?.());
    },

    /**
     * Starts the race and triggers the simulation.
     *
     * @param {Object} store - The Pinia race store instance.
     */
    startRace(store) {
      store.setRacesStarted(true);
      runRaceSimulation(this, store);
    },
  };
}
