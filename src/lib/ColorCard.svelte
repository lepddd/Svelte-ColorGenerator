<script>
  import CopyColotBtn from "./CopyColotBtn.svelte";
  import CopyClipboardPop from "./CopyClipboardPop.svelte";

  export let color;
  export let hexColor;
  export let brightness;
  export let flexCard = false;
  export let current = false;

  /* show copy color btn */
  let isShow = false;

  /* copy to clipboard */
  function copyToClip() {
    isVisible = true;
    let timer = 2500;
    navigator.clipboard.writeText(hexColor);
    setTimeout(() => {
      isVisible = false;
    }, timer);
  }

  let isVisible = false;
</script>

<div
  class="color-card"
  class:flexCard
  class:current
  style="--borderColor: rgba({color})"
  on:mouseenter={() => (isShow = true)}
  on:mouseleave={() => (isShow = false)}
>
  <span class:lowbrightness={brightness < 50}>{hexColor}</span>
  <CopyColotBtn
    {isShow}
    {color}
    brightness={brightness < 50}
    on:click={copyToClip}
  />
  {#if isVisible}
    <CopyClipboardPop {brightness} />
  {/if}
  <div class="color" style="background-color: rgba({color});" />
</div>

<style>
  .color-card {
    position: relative;
    display: flex;
    height: calc(100% / 3);
    width: calc(100% / 9);
    border: 2px solid var(--borderColor);
    color: #212529;
  }
  .color-card > .color {
    width: 100%;
    height: 100%;
  }
  .color-card > span:first-of-type {
    position: absolute;
    top: 20px;
    left: 10px;
    font-weight: 700;
    font-size: 16px;
    transition: 0.5s ease-in-out;
  }
  .flexCard {
    flex-basis: calc(100% / 3);
  }
  .current {
    padding: 2px;
    border: 2px solid #212529;
  }
  .lowbrightness {
    color: #fff;
  }
  @media screen and (max-width: 1500px) {
    .color-card {
      width: calc(100% / 6);
      height: calc(100% / 4);
    }
  }
  @media screen and (max-width: 1000px) {
    .color-card {
      width: calc(100% / 3);
      height: calc(100% / 7);
    }
    .color-card > span:first-of-type {
      font-size: 14px;
      transition: 0.5s ease-in-out;
    }
  }
  @media screen and (max-width: 500px) {
    .color-card {
      min-height: calc(508px / 7);
    }
    .color-card > span:first-of-type {
      font-size: 12px;
      transition: 0.5s ease-in-out;
    }
  }
</style>
