import { createRaceResult } from '@/models/raceResult/createRaceResult';

describe('createRaceResult', () => {
  it('creates result object with raceId and placements', () => {
    const horses = [
      { id: 1, name: 'Horse 1', progress: 100 },
      { id: 2, name: 'Horse 2', progress: 98 },
    ];

    const result = createRaceResult(3, horses);

    expect(result.raceId).toBe(3);
    expect(result.placements.length).toBe(2);
    expect(result.placements[0]).toEqual({
      id: 1,
      name: 'Horse 1',
      progress: 100,
      place: 1,
    });
  });
});
