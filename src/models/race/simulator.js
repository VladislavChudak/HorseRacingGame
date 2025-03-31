import { RACE_TICK_INTERVAL_MS } from './constants';
import { MAX_PROGRESS } from '../horse/constants';

/**
 * Updates the progress of all horses in the current race.
 * Adds horses to the finished list once they reach max progress.
 *
 * @param {Object} race - The current race object.
 * @param {Array} finishedHorses - Array of horses that have completed the race.
 */

export function updateHorseProgress(race, finishedHorses) {
  race.horses.forEach((horse) => {
    if (horse.progress < MAX_PROGRESS) {
      horse.updateProgress(race.distance);

      if (horse.progress >= MAX_PROGRESS && !finishedHorses.includes(horse)) {
        finishedHorses.push(horse);
      }
    }
  });
}

/**
 * Checks if all horses have completed the race.
 *
 * @param {Object} race - The current race object.
 * @returns {boolean} - True if all horses have finished, false otherwise.
 */

export function isRaceFinished(race) {
  return race.horses.every((horse) => horse.progress >= MAX_PROGRESS);
}

/**
 * Determines if the current race is the last one in the schedule.
 *
 * @param {Object} store - The race Pinia store.
 * @returns {boolean} - True if this is the last race, false otherwise.
 */

export function isLastRace(store) {
  const { currentRaceIndex, raceSchedule } = store;
  return currentRaceIndex === raceSchedule.length;
}

/**
 * Finalizes the current race: sets results, updates race index, and starts next race or ends program.
 *
 * @param {Object} race - The current race object.
 * @param {Array} finishedHorses - Horses that completed the race.
 * @param {Object} store - The race Pinia store.
 */

export function finalizeRace(race, finishedHorses, store) {
  store.finalizeRace({ race, results: finishedHorses });

  if (isLastRace(store)) {
    return store.setRacesStarted(false);
  }

  store.runRace();
}

/**
 * Advances the race logic by one tick: updates horse progress, checks for completion.
 *
 * @param {Object} race - The current race object.
 * @param {Array} finishedHorses - Horses that finished so far.
 * @param {Object} store - The race Pinia store.
 * @param {number} raceInterval - The interval ID controlling the race timer.
 */

export function tick(race, finishedHorses, store, raceInterval) {
  updateHorseProgress(race, finishedHorses);
  store.updateRaceProgress(race);

  if (isRaceFinished(race)) {
    clearInterval(raceInterval);

    // Delay finalization to let the animation play out
    setTimeout(() => {
      finalizeRace(race, finishedHorses, store);
    }, 1000);
  }
}

/**
 * Starts the race simulation, using setInterval to simulate time progression.
 *
 * @param {Object} race - The race to simulate.
 * @param {Object} store - The race Pinia store.
 */

export function runRaceSimulation(race, store) {
  const finishedHorses = [];

  const raceInterval = setInterval(() => {
    if (store.isRacePaused) return;

    tick(race, finishedHorses, store, raceInterval);
  }, RACE_TICK_INTERVAL_MS);
}
