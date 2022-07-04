<script>
  import { draw } from "svelte/transition";
  import { sineInOut } from "svelte/easing";

  export let brightness;

  let color = brightness < 50 ? "white" : "#212529";
</script>

<p>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
    role="img"
    width="100%"
    height="100%"
    preserveAspectRatio="xMidYMid meet"
    viewBox="0 0 48 48"
    ><path
      fill="none"
      stroke={color}
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-width="2"
      transition:draw={{ duration: 500, easing: sineInOut }}
      d="m4 24l5-5l10 10L39 9l5 5l-25 25L4 24Z"
      clip-rule="evenodd"
    /></svg
  >
</p>

<style>
  p {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 46px;
    height: 46px;
  }
  @media screen and (max-width: 1500px) {
    p {
      top: 75%;
      transform: translate(-50%, -75%);
      width: 42px;
      height: 42px;
    }
  }
  @media screen and (max-width: 1000px) {
    p {
      width: 24px;
      height: 24px;
      bottom: 5px;
      left: 25px;
      top: initial;
      transform: translate(0, 0);
    }
  }
</style>
