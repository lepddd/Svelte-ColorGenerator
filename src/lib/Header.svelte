<script>
  import NewBtn from "./NewBtn.svelte";
  import { colors } from "../colorStore";
  import toast from "svelte-french-toast";

  let color,
    title = "Colors";

  function searchColor(color) {
    try {
      if (color) {
        colors.customColor(color);
      }
    } catch (error) {
      toast.dismiss();
      toast.error("Error !");
    }
  }
</script>

<header>
  <div class="box">
    <span class="title">{title}</span>
    <form on:submit|preventDefault={() => searchColor(color)}>
      <input type="text" bind:value={color} maxlength="6"/>
    </form>
  </div>
  <NewBtn />
</header>

<style>
  header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 20px;
    min-width: 320px;
  }
  .title {
    color: #212529;
    font-size: 32px;
    font-weight: 700;
  }
  .box {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;
  }
</style>
