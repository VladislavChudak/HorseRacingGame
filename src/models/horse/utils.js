export function generateRandomHexColor() {
  const hex = Math.floor(Math.random() * 0xffffff)
    .toString(16)
    .padStart(6, '0');
  return `#${hex}`;
}

export function generateRandomValue(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
