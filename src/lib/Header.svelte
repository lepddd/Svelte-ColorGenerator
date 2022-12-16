<script>
  import NewBtn from "./NewBtn.svelte";

  let title = "Colors";
</script>

<header>
  <span class="title">{title}</span>
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
</style>
