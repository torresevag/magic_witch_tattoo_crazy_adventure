//esfera flotante
const BTN_GENERATOR = document.getElementById("generar");
const SPHERE = document.getElementById("tattoo");
export const BUTTON = document.getElementById("generar");

const BACKGROUND_LIST = [
  "🌿",
  "☁️",
  "🌊",
  "🌋",
  "🏔️",
  "🌃",
  "Without Background",
];
const ELEMENT_LIST = [
  "🐍",
  "🌺",
  "🐲",
  "🦁",
  "🦄",
  "🪱",
  "👽",
  "🧜🏻‍♀️",
  "🥇",
  "🎸",
  "👻",
  "🧙🏽",
  "🧩",
  "🫀",
  "👁️",
  "🦷",
];
const STYLE_LIST = ["OLD SCHOOL", "FINE-LINE", "JAPANESSE", "REALISM"];
const COLOR_LIST = ["Black/White", "Color", "Full Color"];
const BODY_PART_LIST = ["💪🏻", "🦵🏻", "🤚🏻", "👅", "🍑", "👂🏻", "👃🏻", "🦶🏻"];

const getRandomIndex = (arr) => {
  return arr[Math.floor(Math.random() * arr.length)];
};

export function getTattoo() {
  const background = getRandomIndex(BACKGROUND_LIST);
  const element = getRandomIndex(ELEMENT_LIST);
  const style = getRandomIndex(STYLE_LIST);
  const color = getRandomIndex(COLOR_LIST);
  const bodyPart = getRandomIndex(BODY_PART_LIST);

  const tattoo = ` ${element} and ${background} With ${style} style ${color}  IN:${bodyPart}`;
  SPHERE.textContent = tattoo;
}
BTN_GENERATOR.addEventListener("click", getTattoo);
