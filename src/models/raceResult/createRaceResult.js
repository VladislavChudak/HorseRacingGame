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
