<script>
  import { newColor } from "../colorStore";
  import Values from "values.js";
  import ColorCard from "./ColorCard.svelte";

  let colors;

  newColor.subscribe((val) => {
    colors = new Values(val).all();
  });
</script>

<main>
  {#each colors as color, index}
    {#if index < 18}
      <ColorCard
        current={color.type == "base"}
        color={color.rgb}
        hexColor={color.hexString()}
        brightness={color.getBrightness()}
      />
    {:else}
      <ColorCard
        flexCard
        current={color.type == "base"}
        color={color.rgb}
        hexColor={color.hexString()}
        brightness={color.getBrightness()}
      />
    {/if}
  {/each}
</main>

<style>
  main {
    display: flex;
    flex-wrap: wrap;
    height: calc(100% - 60px);
    min-width: 300px;
    width: 100%;
  }
</style>
