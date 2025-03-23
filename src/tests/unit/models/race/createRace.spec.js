import { createRace } from '@/models/race/createRace';
import { createHorse } from '@/models/horse/createHorse';

describe('createRace', () => {
  it('assigns exactly 10 unique horses', () => {
    const horses = Array.from({ length: 20 }, (_, i) => createHorse(i + 1));
    const race = createRace(1, 1600);
    race.assignHorses(horses);

    expect(race.horses.length).toBe(10);

    const uniqueIds = [...new Set(race.horses.map((h) => h.id))];
    expect(uniqueIds.length).toBe(10);
  });
});
