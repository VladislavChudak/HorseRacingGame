import { createHorse } from '@/models/horse/createHorse';

export default {
  generateHorses(state) {
    state.horses = Array.from({ length: 20 }, (_, i) => createHorse(i + 1));
  },

  resetHorsesProgress(state) {
    state.horses.forEach((horse) => {
      horse.progress = 0;
    });
  },
};
