/**
 * Randomly selects a given number of horses from the available list.
 *
 * @param {Array<Object>} horses - The full list of available horses.
 * @param {number} count - The number of horses to select.
 * @returns {Array<Object>} A randomly selected subset of horses.
 */

export function selectRandomHorses(horses, count) {
  return [...horses].sort(() => 0.5 - Math.random()).slice(0, count);
}
