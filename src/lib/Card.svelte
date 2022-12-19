<script>
  import Icon from "@iconify/svelte";

  export let color, index;

  let brightness, current;

  $: brightness = color.getBrightness() < 50;
  $: current = color.type === "base";
</script>

<div
  class={index >= 18 ? "base" : "card"}
  class:current
  style="--color: rgb({color.rgb})"
>
  <div class="color" class:current style="--color: rgb({color.rgb})">
    <span class:brightness>#{color.hex}</span>
  </div>
</div>

<style>
  .card {
    width: 100%;
    min-width: 110px;
    min-height: 110px;
    border: 4px solid var(--color);
  }
  .card.current {
    padding: 2px;
    border: 2px solid black;
  }
  .color {
    display: flex;
    justify-content: space-between;
    width: 100%;
    height: 100%;
    background-color: var(--color);
    padding: 10px;
    align-items: flex-start;
  }
  span {
    font-size: 12px;
    font-weight: 700;
    color: #171717;
    transition: 0.5s color ease-in-out;
  }
  .brightness {
    color: #f4f4f4;
  }
  @media screen and (min-width: 1200px) {
    .card {
      width: 100%;
      grid-area: span 1 / span 1;
    }
    .base {
      width: 100%;
      grid-area: span 1 / span 2;
    }
    span {
      font-size: 14px;
    }
  }
</style>
