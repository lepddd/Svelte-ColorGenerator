<script>
  import Icon from "@iconify/svelte";
  import { colors } from "../colorStore";
</script>

<button on:click={colors.newColor}>
  <Icon icon="ic:round-shuffle" color="#212529" width="24" height="24" />
</button>

<style>
  button {
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #f4f4f4;
    border-radius: 50%;
    border: 1px solid #f4f4f4;
    cursor: pointer;
    height: 50px;
    width: 50px;
    transition: 0.3s ease-in-out;
  }
  button:focus,
  button:hover {
    border: 1px solid #ededed;    
    box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.06), 0px 4px 3px rgba(0, 0, 0, 0.07);
  }
</style>
