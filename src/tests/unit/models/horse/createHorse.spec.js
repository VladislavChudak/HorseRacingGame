import { createHorse } from '@/models/horse/createHorse';

describe('createHorse', () => {
  it('creates a horse with expected properties and ranges', () => {
    const horse = createHorse(1);

    expect(horse.id).toBe(1);
    expect(horse.name).toBe('Horse 1');
    expect(horse.condition).toBeGreaterThanOrEqual(50);
    expect(horse.condition).toBeLessThanOrEqual(100);
    expect(horse.speed).toBeGreaterThanOrEqual(10);
    expect(horse.speed).toBeLessThanOrEqual(15);
    expect(horse.progress).toBe(0);
  });

  it('updates progress correctly and caps at 100', () => {
    const horse = createHorse(1);
    horse.updateProgress(1000);
    expect(horse.progress).toBeLessThanOrEqual(100);
  });

  it('resets progress to 0', () => {
    const horse = createHorse(1);
    horse.progress = 99;
    horse.resetProgress();
    expect(horse.progress).toBe(0);
  });
});
