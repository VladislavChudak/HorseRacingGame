import { updateHorseProgress, isRaceFinished, isLastRace } from '@/models/race/simulator';
import { createHorse } from '@/models/horse/createHorse';
import { MAX_PROGRESS } from '@/models/horse/constants';

describe('Race simulator logic', () => {
  describe('updateHorseProgress', () => {
    it('should update horse progress if not finished', () => {
      const horse = createHorse(1);
      horse.progress = 50;
      const race = { distance: 1200, horses: [horse] };
      const finishedHorses = [];

      updateHorseProgress(race, finishedHorses);

      expect(horse.progress).toBeGreaterThan(50);
    });

    it('should add horse to finishedHorses if progress reaches MAX_PROGRESS', () => {
      const horse = createHorse(2);
      horse.progress = 99.5;
      const race = { distance: 1200, horses: [horse] };
      const finishedHorses = [];

      updateHorseProgress(race, finishedHorses);

      expect(finishedHorses).toContain(horse);
    });

    it('should not update finished horses', () => {
      const horse = createHorse(2);
      horse.progress = MAX_PROGRESS;
      const race = { distance: 1200, horses: [horse] };
      const finishedHorses = [];

      updateHorseProgress(race, finishedHorses);

      expect(horse.progress).toBe(MAX_PROGRESS);
      expect(finishedHorses).not.toContain(horse);
    });
  });

  describe('isRaceFinished', () => {
    it('returns true if all horses finished', () => {
      const horses = Array.from({ length: 5 }, (_, i) => {
        const h = createHorse(i + 1);
        h.progress = MAX_PROGRESS;
        return h;
      });

      const race = { horses };
      expect(isRaceFinished(race)).toBe(true);
    });

    it('returns false if at least one horse has not finished', () => {
      const horses = [{ progress: MAX_PROGRESS }, { progress: 90 }, { progress: MAX_PROGRESS }];

      const race = { horses };
      expect(isRaceFinished(race)).toBe(false);
    });
  });

  describe('isLastRace', () => {
    it('returns true if currentRaceIndex === raceSchedule.length', () => {
      const store = {
        state: {
          races: {
            currentRaceIndex: 6,
            raceSchedule: Array(6),
          },
        },
      };

      expect(isLastRace(store)).toBe(true);
    });

    it('returns false if currentRaceIndex < raceSchedule.length', () => {
      const store = {
        state: {
          races: {
            currentRaceIndex: 2,
            raceSchedule: Array(6),
          },
        },
      };

      expect(isLastRace(store)).toBe(false);
    });
  });
});
