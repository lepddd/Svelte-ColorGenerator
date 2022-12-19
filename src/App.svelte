<script>
  import { colors } from "./colorStore";
  import Header from "./lib/Header.svelte";
  import Main from "./lib/Main.svelte";
  import { Toaster } from 'svelte-french-toast';

  colors.newColor();
</script>

<div class="app">
  <Toaster/>
  <Header />
  <Main />
</div>

<style>
  .app {
    height: 100%;
    background-color: #f1f1f1;
  }
</style>
