import { writable } from "svelte/store";

const newColor = () => {
  let color = Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, "0")
    .toUpperCase();
  return `#${color}`;
};

function createNewColor() {
  const { subscribe, set, update } = writable(0);

  return {
    subscribe,
    newColor: () => set(newColor()),
    
  };
}

export const color = createNewColor();
