<script lang="ts">
  import StarRating from "svelte-star-rating";

  const config = {
    showText: true,
  };
</script>

<div class="card-container">
  <img src={"./cs.jpg"} alt={"Chainsaw Man"} />
  <div class="card-info">
    <div>{"Chainsaw Man"}</div>
    <div>Recomendacao: {"Zimbas zimbas"}</div>
    <StarRating rating={2.5} {config} />
    <div class="description">
      {"Anime sobre Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quae a neque impedit laudantium"}
    </div>
  </div>
</div>

<style lang="scss">
  .card-container {
    background-color: pink;
    display: flex;

    & > img {
      width: 100px;
    }

    & > .card-info {
      padding: 10px 5px;

      & > .description {
        font-size: 0.8rem;
      }
    }
  }
</style>
