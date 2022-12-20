<script>
  import InputColor from "./InputColor.svelte";
  import NewBtn from "./NewBtn.svelte";
</script>

<header>
  <div class="box">
    <span class="title">Colors</span>
    <InputColor />
  </div>
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
  .box {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 20px;
  }
</style>
