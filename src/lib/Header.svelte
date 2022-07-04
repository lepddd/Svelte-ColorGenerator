<script>
  import Icon from "@iconify/svelte";
  import ColorPicker from "./ColorPicker.svelte";
  import NewColorBtn from "./NewColorBtn.svelte";
  import HexInput from "./HexInput.svelte";

  let title, show;

  title = "Colors";

  show = true;

  /* Call function when resize window */
  function ObserverWidth() {
    if (innerWidth <= 500) {
      show = false;
    } else {
      show = true;
    }
  }
</script>

<svelte:window on:resize={ObserverWidth} />

<header>
  <span class="title">{title}</span>
  <button class="close-menu" on:click={() => (show = !show)}>
    <Icon icon="ep:menu" color="#212529" width="24" height="24" />
  </button>
  {#if show}
    <span class="right">
      <div class="color-options">
        <ColorPicker />
        <HexInput />
      </div>
      <NewColorBtn on:click />
    </span>
  {/if}
</header>

<style>
  header {
    display: flex;
    align-items: center;
    height: 60px;
    justify-content: space-between;
    padding: 0 20px;
  }
  .close-menu {
    display: none;
    align-items: center;
    background-color: #fff;
    border-radius: 50%;
    border: none;
    cursor: pointer;
    height: 40px;
    justify-content: center;
    width: 40px;
  }
  .close-menu:focus,
  .close-menu:hover {
    background-color: rgb(225, 225, 225);
  }
  .right {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    padding-left: 20px;
  }
  .color-options {
    display: flex;
    align-items: center;
  }
  .title {
    position: relative;
    color: #212529;
    font-size: 32px;
    font-weight: 700;
  }
  @media screen and (max-width: 500px) {
    .close-menu {
      display: flex;
    }
    .right {
      position: absolute;
      top: 60px;
      left: 0;
      width: 100%;
      z-index: 99;
      min-width: 320px;
      background-color: #fff;
      padding: 10px 20px;
      border-radius: 5px;
      box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25),
        0px 1px 3px 1px rgba(60, 64, 67, 0.15);
    }
  }
</style>
