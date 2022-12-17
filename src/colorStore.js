import Values from "values.js";
import { writable } from "svelte/store";

const newColors = () => {
  let colors = [];
  let color = Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, "0")
    .toUpperCase();

  colors = new Values(`#${color}`).all();

  return colors;
};

function createNewColor() {
  const { subscribe, set, update } = writable(0);

  return {
    subscribe,
    newColor: () => set(newColors()),
  };
}

export const colors = createNewColor();
