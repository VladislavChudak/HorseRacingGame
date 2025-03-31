/**
 * Generates a random hex color string.
 *
 * @returns {string} A random hex color in the format '#rrggbb'.
 */

export function generateRandomHexColor() {
  const hex = Math.floor(Math.random() * 0xffffff)
    .toString(16)
    .padStart(6, '0');
  return `#${hex}`;
}

/**
 * Generates a random integer between a minimum and maximum (inclusive).
 *
 * @param {number} min - The minimum value.
 * @param {number} max - The maximum value.
 * @returns {number} A random integer between min and max.
 */

export function generateRandomValue(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
