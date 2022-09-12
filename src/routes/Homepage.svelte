<script lang="ts">
  import Navbar from "../lib/Navbar.svelte";
  import Card from "../lib/Card.svelte";

</script>

<div>
  <Navbar />
  <div class="content">
    <div class="list-container">
      <div><Card category={"sim"} image={'./cs.jpg'} name={"Chainsaw Man"} rate={3.5} description={"homi da serra eletrica"} by={"Udyr"} /></div>
      <div><Card /></div>
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
      display: flex;
      flex-direction: column;
      padding: 25px;
      margin-left: 20px;
      margin-right: 20px;
      gap: 30px;
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

  .nomeDOCRA{
    color: white;
  }
</style>
