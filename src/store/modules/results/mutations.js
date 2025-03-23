import { createRaceResult } from '@/models/raceResult/createRaceResult';

export default {
  setRaceResults(state, data) {
    const result = createRaceResult(data.race.id, data.results);
    state.results.push(result);
  },

  clearResults(state) {
    state.results = [];
  },
};
