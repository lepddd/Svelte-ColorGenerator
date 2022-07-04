<script>
  import { onMount } from "svelte";
  import { newColor } from "./colorStore";

  import Header from "./lib/Header.svelte";
  import Main from "./lib/Main.svelte";

  const pattern = "abcdef0123456789";

  let color;

  //Update svelte color store
  function updateStore() {
    newColor.update((val) => val = color);
  }
  
  //Generate a random color
  function genHexColor() {
    color = "#";
    for (let i = 0; i < 6; i++) {
      color += pattern[Math.floor(Math.random() * 10)];
    }
    updateStore();
  }

  onMount(() => {
    genHexColor();
  });
</script>

<Header on:click={genHexColor} />
<Main />
