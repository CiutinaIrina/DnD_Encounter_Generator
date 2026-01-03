import THEMES from '@/common/themes.js'

const savedTheme = localStorage.getItem("theme");

let currentTheme = savedTheme ? JSON.parse(savedTheme) : THEMES.BARD

export function changeColorTheme(theme) {
  currentTheme = theme

  setColorTheme()
}

export function setColorTheme() {
  const root = document.documentElement

  root.style.setProperty('--main', currentTheme.MAIN)
  root.style.setProperty('--contrast-inside', currentTheme.CONTRAST)
  root.style.setProperty('--contrast-outside', getDarkenedColor(currentTheme.CONTRAST, 20))
  root.style.setProperty('--bg', currentTheme.BG)
  root.style.setProperty('--main-5', getBrightenedColor(currentTheme.MAIN, 5))
  root.style.setProperty('--main-10', getBrightenedColor(currentTheme.MAIN, 10))
  root.style.setProperty('--main-20', getBrightenedColor(currentTheme.MAIN, 20))
  root.style.setProperty('--main-30', getBrightenedColor(currentTheme.MAIN, 30))
  root.style.setProperty('--main-40', getBrightenedColor(currentTheme.MAIN, 40))
  root.style.setProperty('--main-50', getBrightenedColor(currentTheme.MAIN, 50))
  root.style.setProperty('--main-105', getDarkenedColor(currentTheme.MAIN, 5))
  root.style.setProperty('--main-110', getDarkenedColor(currentTheme.MAIN, 10))
  root.style.setProperty('--main-120', getDarkenedColor(currentTheme.MAIN, 20))
  root.style.setProperty('--main-130', getDarkenedColor(currentTheme.MAIN, 30))
  root.style.setProperty('--main-140', getDarkenedColor(currentTheme.MAIN, 40))
  root.style.setProperty('--main-150', getDarkenedColor(currentTheme.MAIN, 50))
  root.style.setProperty('--highlight', currentTheme.HIGHLIGHT)
  root.style.setProperty('--error', currentTheme.ERROR)
  root.style.setProperty('--success', currentTheme.SUCCESS)
  root.style.setProperty('--disabled', currentTheme.DISABLED)

  localStorage.setItem("theme", JSON.stringify(currentTheme));
}

function getBrightenedColor(color, percent) {
  const hex = color.replace('#', '');
  const transparency = hex.length === 8;


  const r = parseInt(hex.substring(0, 2), 16);
  const g = parseInt(hex.substring(2, 4), 16);
  const b = parseInt(hex.substring(4, 6), 16);

  const percentDecimal = percent / 100;

  const newR = Math.min(255, Math.floor(r + (255 - r) * percentDecimal));
  const newG = Math.min(255, Math.floor(g + (255 - g) * percentDecimal));
  const newB = Math.min(255, Math.floor(b + (255 - b) * percentDecimal));

  if (transparency) {
    const t = parseInt(hex.substring(6, 8), 16);
    const newT = (t / 255).toFixed(2);

    return `rgba(${newR}, ${newG}, ${newB}, ${newT})`;
  }

  return `#${newR.toString(16).padStart(2, '0')}${newG.toString(16).padStart(2, '0')}${newB.toString(16).padStart(2, '0')}`;
}

function getDarkenedColor(color, percent) {
  const hex = color.replace('#', '');
  const transparency = hex.length === 8;

  const r = parseInt(hex.substring(0, 2), 16);
  const g = parseInt(hex.substring(2, 4), 16);
  const b = parseInt(hex.substring(4, 6), 16);

  const percentDecimal = percent / 100;

  const newR = Math.max(0, Math.floor(r * (1 - percentDecimal)));
  const newG = Math.max(0, Math.floor(g * (1 - percentDecimal)));
  const newB = Math.max(0, Math.floor(b * (1 - percentDecimal)));

  if (transparency) {
    const t = parseInt(hex.substring(6, 8), 16);
    const newT = (t / 255).toFixed(2);

    return `rgba(${newR}, ${newG}, ${newB}, ${newT})`;
  }

  return `#${newR.toString(16).padStart(2, '0')}${newG.toString(16).padStart(2, '0')}${newB.toString(16).padStart(2, '0')}`;
}
