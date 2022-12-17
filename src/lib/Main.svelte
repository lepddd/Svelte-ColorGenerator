<script>
  import { onDestroy } from "svelte";
  import { colors } from "../colorStore";
  import Card from "./Card.svelte";

  let allColors;

  const unsubscribe = colors.subscribe((value) => {
    allColors = value;
  });

  onDestroy(unsubscribe);
</script>

<main>
  {#each allColors as color, index}
    <Card {color} {index} />
  {/each}
</main>

<style>
  main {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(7, 1fr);
    min-width: 320px;
    height: calc(100% - 80px);
  }

  @media screen and (min-width: 1200px) {
    main {
      display: grid;
      grid-template-columns: repeat(6, 1fr);
      grid-template-rows: repeat(4, 1fr);
      height: calc(100% - 90px);
    }
  }
</style>
