export default {
  currentRace(state) {
    return state.raceSchedule[state.currentRaceIndex] || state.lastFinishedRace || null;
  },
};
