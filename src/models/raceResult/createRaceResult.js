/**
 * Creates a race result object containing horse placements.
 *
 * @param {number|string} raceId - The unique ID of the race.
 * @param {Array<Object>} horses - Array of horse objects ordered by finish.
 * @param {number|string} horses[].id - The unique ID of the horse.
 * @param {string} horses[].name - The name of the horse.
 * @param {number} horses[].progress - The horse's progress at race end.
 * @returns {{ raceId: number|string, placements: Array<{ id: number|string, name: string, progress: number, place: number }> }}
 *          A race result object containing race ID and ordered placements.
 */

export function createRaceResult(raceId, horses) {
  return {
    raceId,
    placements: horses.map((horse, index) => ({
      id: horse.id,
      name: horse.name,
      progress: horse.progress,
      place: index + 1,
    })),
  };
}
