<script>
  import Icon from "@iconify/svelte";
  import toast from "svelte-french-toast";

  export let brightness, hidden, color;

  function callToast(col) {
    navigator.clipboard.writeText(col);
    toast.dismiss();
    toast("Copied !");
  }
</script>

<button
  class="hidden"
  class:brightness
  class:hidden
  on:click={() => callToast(color.hex)}
>
  <Icon icon="ph:copy-simple" width="20" height="20" />
</button>

<style>
  button {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 5px;
    background-color: transparent;
    border: none;
    cursor: pointer;
  }
  button.hidden {
    display: none;
  }
  .brightness {
    color: #f4f4f4;
  }
</style>
