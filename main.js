import fontAtlas from "font-atlas-sdf";

const container = document.getElementById("container");

const defaultOptions = {
  font: {
    family: "sans-serif",
  },
  cellSize: 32,
  chars: [
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "11",
    "12",
    "13",
    "14",
    "15",
    "16",
    "17",
    "18",
    "19",
    "20",
  ],
  align: "bounds",
  fit: 0.5,
};

function generateAtlas(options) {
  options.step = [options.cellSize, options.cellSize];
  options.font.size = options.cellSize / 2.0;
  options.shape = getShape(options.chars.length, options.cellSize);
  console.log(options);
  const canvas = fontAtlas(options);
  container.replaceChildren(canvas);
}

function getShape(count, cellSize) {
  let y = Math.floor(Math.sqrt(count));
  while (count % y != 0) y--;
  let x = count / y;
  return [x * cellSize, y * cellSize];
}

const form = document.getElementById("form");
form.addEventListener("submit", (e) => {
  e.preventDefault();

  let cellSize = document.getElementById("cellSize");
  let fontFamily = document.getElementById("fontFamily");
  let characters = document.getElementById("characters");

  let options = { ...defaultOptions };
  options.cellSize = parseFloat(cellSize.value) || options.cellSize;
  options.font.family = fontFamily.value || options.font.family;
  options.chars =
    characters.value.replace(/ /g, "").split(",") || options.chars;

  generateAtlas(options);
});

function submit() {}

generateAtlas(defaultOptions);
