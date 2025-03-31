import { defineStore } from 'pinia';
import { createRaceResult } from '@/models/raceResult/createRaceResult';

export const useResultsStore = defineStore('results', {
  state: () => ({
    results: [],
  }),

  actions: {
    setRaceResults({ race, results }) {
      const result = createRaceResult(race.id, results);
      this.results.push(result);
    },

    clearResults() {
      this.results = [];
    },
  },
});
