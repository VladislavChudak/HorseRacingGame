import {
  CONDITION_MIN,
  CONDITION_MAX,
  SPEED_MIN,
  SPEED_MAX,
  MAX_PROGRESS,
  PERFORMANCE_SCALE,
} from './constants';
import { generateRandomHexColor, generateRandomValue } from './utils';

/**
 * Creates a horse object with randomized stats and race logic methods.
 *
 * @param {number|string} id - Unique identifier for the horse.
 * @returns {{
 *   id: number|string,
 *   name: string,
 *   color: string,
 *   condition: number,
 *   speed: number,
 *   progress: number,
 *   updateProgress: (distance: number) => void,
 *   resetProgress: () => void
 * }} A horse object ready to participate in a race.
 */

export function createHorse(id) {
  return {
    id,
    name: `Horse ${id}`,
    color: generateRandomHexColor(),
    condition: generateRandomValue(CONDITION_MIN, CONDITION_MAX),
    speed: generateRandomValue(SPEED_MIN, SPEED_MAX),
    progress: 0,

    /**
     * Updates the horse's progress based on its performance and race distance.
     * Capped by MAX_PROGRESS.
     *
     * @param {number} distance - Distance of the current race.
     */

    updateProgress(distance) {
      const performance = (this.condition + this.speed) / (distance / PERFORMANCE_SCALE);
      this.progress += performance * this.speed;
      this.progress = Math.min(this.progress, MAX_PROGRESS);
    },

    /**
     * Resets the horse's progress to 0.
     */

    resetProgress() {
      this.progress = 0;
    },
  };
}
