<script lang="ts">
  import Navbar from "../lib/navbar/Navbar.svelte";
  import Card from "../lib/card/Card.svelte";
</script>

<div>
  <Navbar />
  <div class="content">
    <div class="list-container">
      <Card />
    </div>
    <button>Recomendar</button>
  </div>
</div>

<style lang="scss">
  @import "../variables.scss";
  .content {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 10px;

    & > .list-container {
      background-color: white;
      padding: 25px;
      margin-left: 20px;
      margin-right: 20px;
    }

    & > button {
      background-color: $mainColor;
      border: 0;
      padding: 10px 40px;
      cursor: pointer;
      text-transform: uppercase;
      color: white;
      border-radius: 8px;

      &:hover {
        padding: 12px 50px;
      }
    }
  }
</style>
