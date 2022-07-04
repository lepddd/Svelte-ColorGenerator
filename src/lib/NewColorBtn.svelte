<script>
  import Icon from "@iconify/svelte";
</script>

<button on:click>
  <Icon icon="ic:round-shuffle" color="#212529" width="24" height="24" />
</button>

<style>
  button {
    align-items: center;
    background-color: #fff;
    border-radius: 50%;
    border: none;
    cursor: pointer;
    display: flex;
    height: 40px;
    justify-content: center;
    width: 40px;
  }
  button:focus,
  button:hover {
    background-color: rgb(225, 225, 225);
  }
</style>
