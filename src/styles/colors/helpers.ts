import * as tinycolor from 'tinycolor2';

export const withAlpha = (color: string, alpha: number) => {
  const newColor = tinycolor(color);

  if (!newColor.isValid()) {
    throw new Error(`Unexpected color string format: ${color}`);
  }

  newColor.setAlpha(alpha);

  return newColor.toRgbString();
};
