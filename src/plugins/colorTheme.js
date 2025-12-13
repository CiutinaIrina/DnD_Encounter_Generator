import CONSTANTS from '@/common/constants.js'

let currentTheme = CONSTANTS.THEMES.BARD;

export function changeColorTheme(theme) {
  currentTheme = theme;

  setColorTheme();
}

export function setColorTheme() {
  const root = document.documentElement;

  root.style.setProperty("--main", currentTheme.MAIN);
  root.style.setProperty("--contrast", currentTheme.CONTRAST);
}

