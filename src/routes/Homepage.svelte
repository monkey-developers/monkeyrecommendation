<script lang="ts">
  import Navbar from "../lib/navbar/Navbar.svelte";
  import Card from "../lib/card/Card.svelte";
</script>

<div>
  <Navbar />
  <div class="list-container">
    <Card />
  </div>
</div>

<style lang="scss">
  .list-container {
    background-color: white;
    padding: 25px;
    margin-left: 20px;
    margin-right: 20px;
  }
</style>
