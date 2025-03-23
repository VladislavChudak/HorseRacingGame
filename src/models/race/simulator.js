import { RACE_TICK_INTERVAL_MS } from './constants';
import { MAX_PROGRESS } from '../horse/constants';

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

export function isRaceFinished(race) {
  return race.horses.every((horse) => horse.progress >= MAX_PROGRESS);
}

export function isLastRace(store) {
  const { currentRaceIndex, raceSchedule } = store.state.races;
  return currentRaceIndex === raceSchedule.length;
}

export function finalizeRace(race, finishedHorses, store) {
  store.dispatch('races/finalizeRace', { race, results: finishedHorses }, { root: true });

  if (isLastRace(store)) {
    return store.commit('races/setRacesStarted', false, { root: true });
  }

  store.dispatch('races/runRace', null, { root: true });
}

export function tick(race, finishedHorses, store, raceInterval) {
  updateHorseProgress(race, finishedHorses);
  store.commit('races/updateRaceProgress', race, { root: true });

  if (isRaceFinished(race)) {
    clearInterval(raceInterval);

    // Delay the start of a new race, to allow the user to see the horses finishing visually
    setTimeout(() => {
      finalizeRace(race, finishedHorses, store);
    }, 1000);
  }
}

export function runRaceSimulation(race, store) {
  const finishedHorses = [];

  const raceInterval = setInterval(() => {
    if (store.state.races.isRacePaused) return;

    tick(race, finishedHorses, store, raceInterval);
  }, RACE_TICK_INTERVAL_MS);
}
