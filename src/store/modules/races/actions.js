export default {
  initializeGame({ commit, dispatch }) {
    commit('horses/generateHorses', null, { root: true });
    commit('generateSchedule');
    dispatch('assignHorsesToRaces');
  },

  assignHorsesToRaces({ commit, rootState }) {
    const horses = rootState.horses.horses;
    commit('setHorsesToRaces', horses);
  },

  startNewRace({ commit, dispatch }) {
    commit('startRace');
    commit('results/clearResults', null, { root: true });
    dispatch('runRace');
  },

  runRace({ state }) {
    if (state.currentRaceIndex >= state.raceSchedule.length) return;

    const race = state.raceSchedule[state.currentRaceIndex];
    race.startRace(this);
  },

  finalizeRace({ commit }, { race, results }) {
    commit('results/setRaceResults', { race, results }, { root: true });
    commit('setLastFinishedRace', race);
    commit('updateRaceIndex');
    commit('horses/resetHorsesProgress', null, { root: true });
  },

  togglePause({ state, commit }) {
    commit('setPauseStatus', !state.isRacePaused);
  },
};
