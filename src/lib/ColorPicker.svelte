<script>
  import Icon from "@iconify/svelte";
  import { newColor } from "../colorStore";

  let color;

  newColor.subscribe((val) => (color = val));

  function updateStore() {
    newColor.update((val) => (val = color));
  }
</script>

<label for="color">
  <Icon icon="iconoir:color-picker" color="#545454" width="20" height="20" />
  <input
    type="color"
    name=""
    id="color"
    bind:value={color}
    on:blur={updateStore}
  />
</label>

<style>
  label {
    display: flex;
    align-items: center;
    justify-content: space-around;
    width: 70px;
    height: 40px;
    border-radius: 5px;
    cursor: pointer;
    position: relative;
  }
  label:focus,
  label:hover {
    background-color: rgb(225, 225, 225);
  }
  input[type="color"] {
    appearance: none;
    -moz-appearance: none;
    -webkit-appearance: none;
    background: none;
    border: 0;
    cursor: pointer;
    height: 20px;
    width: 20px;
    padding: 0;
  }
  ::-webkit-color-swatch-wrapper {
    padding: 0;
  }

  ::-webkit-color-swatch {
    border: 1px solid black;
    border-radius: 50%;
  }

  ::-moz-color-swatch,
  ::-moz-focus-inner {
    border: 0;
  }

  ::-moz-focus-inner {
    padding: 0;
  }
</style>
