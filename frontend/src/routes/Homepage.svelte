<script lang="ts">
  import { Link } from "svelte-navigator";
  import Card from "../lib/Card.svelte";
</script>

<section class="content">
  <div class="list-container">
    <div>
      <Card
        category={"sim"}
        image={"./cs.jpg"}
        name={"Chainsaw Man"}
        rate={3.5}
        description={"homi da serra eletrica fgsdfsdfsdfsdffsfsdfdgdfgdfgfdgdgdfgdfgdsfdfsdf"}
        by={"Wilson"}
      />
    </div>
  </div>
  <Link to="/recommend" class="link-button">Recommend</Link>
</section>

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

    & > :global(a) {
      background-color: $mainColor;
      border: 0;
      padding: 10px 40px;
      cursor: pointer;
      text-transform: uppercase;
      color: white;
      border-radius: 8px;
      text-transform: uppercase;
      text-decoration: none;

      &:hover {
        padding: 12px 50px;
      }
    }
  }
</style>
