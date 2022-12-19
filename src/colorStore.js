import Values from "values.js";
import { writable } from "svelte/store";

const newColors = () => {
  let colors = [];
  let color = Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, "0")
    .toUpperCase();

  colors = customColor(color);

  return colors;
};

const customColor = (color) => {
  return new Values(`#${color}`).all();
};

function createNewColor() {
  const { subscribe, set, update } = writable(0);

  return {
    subscribe,
    newColor: () => set(newColors()),
    customColor: (col) => set(customColor(col)),
  };
}

export const colors = createNewColor();
