<script lang="ts">
  import { Link } from "svelte-navigator";
  import Card from "../lib/Card.svelte";
  let user = [];

  const GetRecommends = (async () => {
    const res = await fetch("http://localhost:8080/recommendations-list").then(
      (res) => {
        return res.json();
      }
    );
  })();
</script>

<section class="content">
  <div class="list-container">
    {#await GetRecommends}
      <p>Waiting...</p>
    {:then data}
      {#each data as item, index (user)}
        <div>
          <Card
            category={item.category}
            image={"./cs.jpg"}
            name={item.masterpiece}
            rate={item.rate}
            description={item.description}
            by={item.author}
          />
        </div>
      {/each}
    {/await}
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
