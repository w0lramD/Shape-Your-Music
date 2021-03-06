import Color from 'color';

export const THEMES = { LIGHT: 'light', DARK: 'dark' };

export const themeColors = [
  '#c9563c', // red
  '#e8a531', // yellow
  '#2a548e', // blue
  '#705498', // purple
  '#33936b', // green
];

export const appColors = {
  black: '#242424',
  white: '#fff',
  grayLightest: '#f1f1f1',
  grayLight: '#eee',
  grayMedium: '#ddd',
  grayDark: '#999',
  red: 'red',
};

export const getDarker = (color, amount = 0.1) =>
  Color(color)
    .darken(amount)
    .toString();

export const getLighter = (color, amount = 0.1) =>
  Color(color)
    .lighten(amount)
    .toString();
