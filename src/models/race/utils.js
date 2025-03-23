export function selectRandomHorses(horses, count) {
  return [...horses].sort(() => 0.5 - Math.random()).slice(0, count);
}
