<script>
  import Icon from "@iconify/svelte";

  export let isShow = false;
  export let brightness;
  export let color;
</script>

<button
  class:isShow
  class:brightness
  style="background-color: rgba({color});"
  on:click
>
  <Icon class="copy-btn" icon="fluent:copy-20-regular" />
</button>

<style>
  button {
    display: none;
    position: absolute;
    top: 10px;
    right: 10px;
    cursor: pointer;
    border-radius: 50%;
    border: none;
    width: 40px;
    height: 40px;
    color: #212529;
  }
  button :global(.copy-btn) {
    width: 28px;
    height: 28px;
  }
  .isShow {
    display: block;
  }
  .brightness {
    color: white;
  }
  @media screen and (max-width: 500px) {
    button {
      width: 24px;
      height: 24px;
      top: 16px;
    }
    button :global(.copy-btn) {
      width: 20px;
      height: 20px;
    }
  }
</style>
