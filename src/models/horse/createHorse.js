import {
  CONDITION_MIN,
  CONDITION_MAX,
  SPEED_MIN,
  SPEED_MAX,
  MAX_PROGRESS,
  PERFORMANCE_SCALE,
} from './constants';
import { generateRandomHexColor, generateRandomValue } from './utils';

export function createHorse(id) {
  return {
    id,
    name: `Horse ${id}`,
    color: generateRandomHexColor(),
    condition: generateRandomValue(CONDITION_MIN, CONDITION_MAX),
    speed: generateRandomValue(SPEED_MIN, SPEED_MAX),
    progress: 0,

    updateProgress(distance) {
      const performance = (this.condition + this.speed) / (distance / PERFORMANCE_SCALE);
      this.progress += performance * this.speed;
      this.progress = Math.min(this.progress, MAX_PROGRESS);
    },

    resetProgress() {
      this.progress = 0;
    },
  };
}
