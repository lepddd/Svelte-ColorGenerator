<script>
  import { colors } from "./colorStore";
  import Header from "./lib/Header.svelte";
  import Main from "./lib/Main.svelte";

  colors.newColor();
</script>

<div class="app">
  <Header />
  <Main />
</div>

<style>
  .app {
    height: 100%;
    background-color: #f1f1f1;
  }
</style>
