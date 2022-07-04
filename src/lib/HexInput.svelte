<script>
  import { newColor } from "../colorStore.js";

  let value;
  let regexp = /^#([a-fA-F0-9]{6}|[a-fA-F0-9]{3})$/;

  let isValid = true;

  function simpleTest() {
    if (value.length == 4 || value.length == 7) {
      isValid = false;
      if (regexp.test(value)) {
        newColor.update((val) => (val = value));
        isValid = true;
      } else {
        isValid = false;
      }
    } else {
      isValid = false;
    }
  }
  newColor.subscribe((val) => (value = val));
</script>

<span class:isValid>
  <input
    class="color-input"
    type="text"
    bind:value
    on:blur={simpleTest}
    maxlength="7"
    minlength="3"
    required
  />
</span>

<style>
  .color-input {
    font-size: 16px;
    padding: 0 5px;
    position: relative;
    width: 100px;
    height: 25px;
    outline: none;
    border: none;
  }
  span {
    border-bottom: 1px solid #c61515;
    margin-left: 20px;
  }
  span.isValid {
    border-bottom: 1px solid #212529;
  }
</style>
