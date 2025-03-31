import { defineStore } from 'pinia';
import { createHorse } from '@/models/horse/createHorse';

export const useHorseStore = defineStore('horses', {
  state: () => ({
    horses: [],
  }),

  actions: {
    generateHorses() {
      this.horses = Array.from({ length: 20 }, (_, i) => createHorse(i + 1));
    },

    resetHorsesProgress() {
      this.horses.forEach((horse) => {
        horse.progress = 0;
      });
    },
  },
});
