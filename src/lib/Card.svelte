<script>
  import CopyBtn from "./CopyBtn.svelte";

  export let color, index;

  let brightness,
    current,
    hidden = true;

  $: brightness = color.getBrightness() < 50;
  $: current = color.type === "base";
</script>

<div
  class={index >= 18 ? "base" : "card"}
  class:current
  style="--color: rgb({color.rgb})"
  on:mouseenter={() => (hidden = false)}
  on:mouseleave={() => (hidden = true)}
>
  <div class="color" class:current style="--color: rgb({color.rgb})">
    <div class="box">
      <span class:brightness>#{color.hex}</span>
      <CopyBtn {brightness} {hidden} {color}/>
    </div>
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
    border: 2px solid #171717;
  }
  .color {
    width: 100%;
    height: 100%;
    background-color: var(--color);
  }
  span {
    transition: 0.5s color ease-in-out;
    font-size: 12px;
    font-weight: 700;
    color: #171717;
  }
  .box {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 5px;
    height: 30px;
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
