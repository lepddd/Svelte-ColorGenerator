<script>
  import { colors } from "../colorStore";
  import toast from "svelte-french-toast";
  import Icon from "@iconify/svelte";

  $: currentColor = $colors[10].hex;
  $: color = currentColor;

  function searchColor(color) {
    try {
      if (color) {
        colors.customColor(color);
      }
    } catch (error) {
      toast.dismiss();
      toast.error("Invalid Color !");
    }
  }
</script>

<form on:submit|preventDefault={() => searchColor(color)}>
  <label for="color">
    <Icon icon="material-symbols:edit" color="#212529" width="20" height="20" />
  </label>
  <input
    id="color"
    type="text"
    bind:value={color}
    maxlength="6"
    on:blur={() => searchColor(color)}
  />
</form>

<style>  
  form {
    padding: 5px;
    gap: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  label {
    cursor: pointer;
  }
  input {
    padding: 0.2rem;
    border: 1px solid #f1f1f1;
    border-bottom: 1px solid #212529;
    background-color: #f1f1f1;
    outline: none;
    width: 80px;
  }
</style>
