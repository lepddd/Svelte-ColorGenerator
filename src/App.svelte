<script>
  import { color } from "./colorStore";
  import Header from "./lib/Header.svelte";
  import Main from "./lib/Main.svelte";

  color.newColor();
</script>

<div class="app">
  <Header />
  <Main />
</div>

<style>
  .app {
    height: 100%;
    background-color: #f4f4f4;
  }
</style>
